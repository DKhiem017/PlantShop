import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ActivityIndicator,
} from "react-native";
import Pagetitle from "../../../components/pagetitle";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import customerAPI from "../../../../Api/CustomerApi";
import addressAPI from "../../../../Api/AddressApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";

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

const DetailAddress = ({ navigation, route }) => {
  const { t } = useTranslation();

  const { id } = route.params;

  const [name, setName] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await addressAPI.getDetail(id);
        setName(response.receiverName);
        setNumberPhone(response.phone);
        setAddress(response.address);
        setLoading(false);
      } catch (error) {
        console.log("Error: ", error);
        setLoading(false);
      }
    };

    fetchAPI();
  }, []);

  const HandleUpdateInfo = async () => {
    const user = await AsyncStorage.getItem("CustomerID");
    return await addressAPI
      .update(id, user, name, address, numberPhone)
      .then(() => {
        alert("ChangesHaveBeenSaved");
        navigation.navigate("MyAddress");
      })
      .catch((error) => {
        console.log("Error: ", error);
        alert("CannotMakeChanges");
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar style="dark"></StatusBar>
        <Pagetitle title={t("AddressDetail")} navigation={navigation}></Pagetitle>
        <View style={{ gap: 10, marginTop: 50 }}>
          {loading ? (
            <ActivityIndicator
              size="large"
              color="#498553"
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          ) : (
            <>
              <View style={styles.TextInputContainer}>
                <Text
                  style={{
                    fontSize: 15,
                    color: "#498553",
                    fontWeight: 700,
                  }}
                >
                {t("Receiver")}
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
                  {t("phoneNumber")}
                </Text>
                <TextInput
                  style={styles.TextInput}
                  value={numberPhone}
                  onChangeText={(e) => setNumberPhone(e)}
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
                  {t("address")}
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
                  onPress={HandleUpdateInfo}
                >
                  <Text
                    style={{
                      fontWeight: 700,
                      color: "#fff",
                      fontSize: 16,
                    }}
                  >
                    {t("save")} {t("changes")}
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailAddress;
