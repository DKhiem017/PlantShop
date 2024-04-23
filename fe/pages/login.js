import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ImageBackground } from "react-native";

const backgroundImage = require("../../assets/images/LoginBg.png");
const logo = require("../../assets/images/Logo.png");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Adjust as needed
  },
});

const Login = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark"></StatusBar>
      <Image source={backgroundImage} style={styles.backgroundImage}></Image>
      {/* <TouchableOpacity>
        <View
          style={{
            marginTop: 25,
            marginLeft: 5,
          }}
        >
          <AntDesign name="arrowleft" size={28} color="#498553" />
        </View>
      </TouchableOpacity> */}
      <View
        style={{
          marginTop: 150,
          paddingLeft: 20,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View>
          <Image source={logo}></Image>
        </View>
        <Text
          style={{
            fontSize: 35,
            fontWeight: 500,
            color: "#498553",
          }}
        >
          PK Plant Store
        </Text>
      </View>
      <View
        style={{
          marginTop: 5,
          paddingLeft: 35,
        }}
      >
        <Text>Login to your Account</Text>
      </View>
      <View
        style={{
          paddingStart: 35,
          paddingEnd: 35,
        }}
      >
        <View
          style={{
            marginTop: 30,
          }}
        >
          <Text>Email Address</Text>
          <TextInput
            style={{
              marginTop: 10,
              height: 45,
              backgroundColor: "#fff",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#498553",
              paddingStart: 10,
              fontSize: 15,
            }}
          ></TextInput>
        </View>
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={{
              marginTop: 10,
              height: 45,
              backgroundColor: "#fff",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#498553",
              paddingStart: 10,
              fontSize: 15,
            }}
          ></TextInput>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            marginTop: 15,
          }}
        >
          <TouchableOpacity>
            <Text style={{ fontWeight: 500, color: "#498553", fontSize: 15 }}>
              Fotget Password?
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#498553",
            marginTop: 25,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: 700 }}>
            Login
          </Text>
        </TouchableOpacity>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          <Text style={{ color: "#498553" }}>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={{ fontWeight: 500, color: "#498553" }}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
