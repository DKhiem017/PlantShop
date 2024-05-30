import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import Pagetitle from "../../../components/pagetitle";
import { SafeAreaView } from "react-native-safe-area-context";

const avt = require("../../../../assets/images/Logo.png");
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
    width: 200,
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

const UserInformation = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar style="dark"></StatusBar>
        <Pagetitle
          title={"User Information"}
          navigation={navigation}
        ></Pagetitle>
        <View style={{ gap: 10, marginTop: 50 }}>
          <View style={styles.TextInputContainer}>
            <Text
              style={{
                fontSize: 15,
                color: "#498553",
                fontWeight: 600,
              }}
            >
              User Name
            </Text>
            <TextInput style={styles.TextInput}></TextInput>
          </View>
          <View style={styles.TextInputContainer}>
            <Text
              style={{
                fontSize: 15,
                color: "#498553",
                fontWeight: 600,
              }}
            >
              Phone Number
            </Text>
            <TextInput style={styles.TextInput}></TextInput>
          </View>
          <View style={styles.TextInputContainer}>
            <Text
              style={{
                fontSize: 15,
                color: "#498553",
                fontWeight: 600,
              }}
            >
              Address
            </Text>
            <TextInput style={styles.TextInput}></TextInput>
          </View>
          <View style={styles.TextInputContainer}>
            <Text
              style={{
                fontSize: 15,
                color: "#498553",
                fontWeight: 600,
              }}
            >
              Email
            </Text>
            <TextInput style={styles.TextInput}></TextInput>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.saveButton}>
              <Text
                style={{
                  fontWeight: 600,
                  color: "#fff",
                  fontSize: 16,
                }}
              >
                Save changes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserInformation;
