import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ActivityIndicator,
} from "react-native";
import Pagetitle from "../../../components/pagetitle";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext, useEffect, useState } from "react";
import customerAPI from "../../../../Api/CustomerApi";
import { AppContext } from "../../../../contexts/appContext";

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

const UserInformation = ({ navigation }) => {
  const { user } = useContext(AppContext);

  const [userName, setUserName] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
  const [address, setAddress] = useState("");
  const [registerDay, setRegisterDay] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        console.log("user", user);
        const response = await customerAPI.getInfo(user.id);
        setUserName(response.name);
        setNumberPhone(response.phone);
        setAddress(response.address);
        setRegisterDay(response.dateBirth);
        setLoading(false);
      }
      catch (error) {
        console.log("Error: ", error);
        setLoading(false);
      }
    }

    fetchAPI()
  }, [])

  const formatDate = (date) => {
    const inputDate = new Date(date);

    const year = inputDate.getUTCFullYear();
    const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
    const day = inputDate.getDate().toString().padStart(2, "0");

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }

  const HandleUpdateInfo = async () => {
    return await customerAPI.updateInfo('CS0001', userName, numberPhone, true, address, registerDay + 'Z')
      .then(() => {
        alert("Changes have been saved")
      })
      .catch((error) => {
        console.log("Error: ", error);
        alert("Cannot make changes, please try again")
      })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar style="dark"></StatusBar>
        <Pagetitle
          title={"User Information"}
          navigation={navigation}
        ></Pagetitle>
        <View style={{ gap: 10, marginTop: 50 }}>
          {
            loading ? <ActivityIndicator size="large"
              color="#498553"
              style={{ flex: 1, alignItems: "center", justifyContent: "center" }} />
              : <>
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
                  <TextInput style={styles.TextInput}
                    value={userName}
                    onChangeText={(e) => setUserName(e)}
                  >
                  </TextInput>
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
                  <TextInput style={styles.TextInput}
                    value={numberPhone}
                    onChangeText={(e) => setNumberPhone(e)}
                  >
                  </TextInput>
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
                  <TextInput style={styles.TextInput}
                    value={address}
                    onChangeText={(e) => setAddress(e)}
                  >
                  </TextInput>
                </View>
                <View style={styles.TextInputContainer}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: "#498553",
                      fontWeight: 600,
                    }}
                  >
                    Date of Register
                  </Text>
                  <TextInput style={styles.TextInput}
                    value={formatDate(registerDay)}
                    readOnly
                  >
                  </TextInput>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.saveButton} onPress={HandleUpdateInfo}>
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
              </>
          }

        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserInformation;
