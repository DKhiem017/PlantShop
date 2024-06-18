import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from "react-native";
import Pagetitle from "../../../components/pagetitle";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import customerAPI from "../../../../Api/CustomerApi";
import addressAPI from "../../../../Api/AddressApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  TextInputContainer: {
    display: "flex",
    flexDirection: "column",
  },
  TextInput: {
    marginTop: 5,
    height: 45,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#498553",
    paddingStart: 10,
    fontSize: 15,
    color: "#498553",
  },
  saveButton: {
    height: 50,
    backgroundColor: "#498553",
    width: "75%",
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 25,
  },
});

const AddAddress = ({ navigation, route }) => {
  const [isValid, setIsValid] = useState(false);

  const { ProductList } = route.params;

  console.log(ProductList);

  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState();

  const handleSaveNewAddress = async () => {
    if (
      name == null ||
      name == "" ||
      phoneNumber == null ||
      phoneNumber == "" ||
      address == null ||
      address == ""
    ) {
      setIsValid(true);
    } else {
      try {
        const user = await AsyncStorage.getItem("CustomerID");
        const response = await addressAPI.addAddress(
          user,
          name,
          address,
          phoneNumber
        );
        Alert.alert("Thêm thành công địa chỉ mới");
        navigation.navigate("MyAddress", { ProductList: ProductList });
      } catch (error) {
        console.log("Thêm không thành công", error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar style="dark"></StatusBar>
        <Pagetitle
          title={"Add new Address"}
          navigation={navigation}
        ></Pagetitle>
        <View style={{ gap: 10, marginTop: 30 }}>
          {isValid && (
            <View>
              <Text style={{ color: "#cd5c5c" }}>
                Please full-fill all neccessary information
              </Text>
            </View>
          )}
          <View style={styles.TextInputContainer}>
            <Text
              style={{
                fontSize: 15,
                color: "#498553",
                fontWeight: 700,
              }}
            >
              Receiver
            </Text>
            <TextInput
              style={styles.TextInput}
              value={name}
              onChangeText={(e) => setName(e)}
            ></TextInput>
          </View>
          <View style={styles.TextInputContainer}>
            <Text
              style={{
                fontSize: 15,
                color: "#498553",
                fontWeight: 700,
              }}
            >
              Phone Number
            </Text>
            <TextInput
              style={styles.TextInput}
              value={phoneNumber}
              onChangeText={(e) => setPhoneNumber(e)}
            ></TextInput>
          </View>
          <View style={styles.TextInputContainer}>
            <Text
              style={{
                fontSize: 15,
                color: "#498553",
                fontWeight: 700,
              }}
            >
              Address
            </Text>
            <TextInput
              style={styles.TextInput}
              value={address}
              onChangeText={(e) => setAddress(e)}
            ></TextInput>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleSaveNewAddress}
            >
              <Text
                style={{
                  fontWeight: 700,
                  color: "#fff",
                  fontSize: 16,
                }}
              >
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddAddress;
