import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Pagetitle from "../../../components/pagetitle";
import { SafeAreaView } from "react-native-safe-area-context";

const avt = require("../../../../assets/images/Logo.png");

const UserInformation = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#F5F5F5",
        flex: 1,
      }}
    >
      <View>
        <StatusBar style="dark"></StatusBar>
        <Pagetitle title={"User Information"} navigation={navigation}></Pagetitle>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 50,
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "#498553",
              fontWeight: 600,
            }}
          >
            User Name
          </Text>
          <TextInput
            style={{
              marginTop: 5,
              height: 45,
              backgroundColor: "#fff",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#498553",
              paddingStart: 10,
              fontSize: 15,
              color: "#498553",
            }}
          ></TextInput>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 10,
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "#498553",
              fontWeight: 600,
            }}
          >
            Phone Number
          </Text>
          <TextInput
            style={{
              marginTop: 5,
              height: 45,
              backgroundColor: "#fff",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#498553",
              paddingStart: 10,
              fontSize: 15,
              color: "#498553",
            }}
          ></TextInput>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 10,
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "#498553",
              fontWeight: 600,
            }}
          >
            Address
          </Text>
          <TextInput
            style={{
              marginTop: 5,
              height: 45,
              backgroundColor: "#fff",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#498553",
              paddingStart: 10,
              fontSize: 15,
              color: "#498553",
            }}
          ></TextInput>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 10,
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "#498553",
              fontWeight: 600,
            }}
          >
            Email
          </Text>
          <TextInput
            style={{
              marginTop: 5,
              height: 45,
              backgroundColor: "#fff",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#498553",
              paddingStart: 10,
              fontSize: 15,
              color: "#498553",
            }}
          ></TextInput>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 25,
          }}
        >
          <TouchableOpacity
            style={{
              height: 50,
              backgroundColor: "#498553",
              width: 200,
              borderRadius: 15,
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
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
    </SafeAreaView>
  );
};

export default UserInformation;
