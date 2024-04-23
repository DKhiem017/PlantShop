import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Register = () => {
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "#E9F3ED",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <StatusBar style="dark"></StatusBar>
      <TouchableOpacity>
        <View
          style={{
            marginTop: 30,
            marginLeft: 10,
          }}
        >
          <AntDesign name="arrowleft" size={28} color="#498553" />
        </View>
      </TouchableOpacity>
      <View>
        <Text
          style={{
            fontSize: 25,
            marginStart: 35,
            marginTop: 20,
          }}
        >
          Welcome to
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 35,
            marginStart: 35,
            marginTop: 2,
            fontWeight: 500,
            color: "#498553",
          }}
        >
          PK Plant Store
        </Text>
      </View>
      <View
        style={{
          paddingStart: 35,
          paddingEnd: 35,
        }}
      >
        <TextInput
          placeholder="Name"
          style={{
            marginTop: 25,
            height: 45,
            backgroundColor: "#fff",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#498553",
            paddingStart: 10,
            fontSize: 15,
          }}
        ></TextInput>
        <TextInput
          placeholder="Email"
          style={{
            marginTop: 25,
            height: 45,
            backgroundColor: "#fff",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#498553",
            paddingStart: 10,
            fontSize: 15,
          }}
        ></TextInput>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={{
            marginTop: 25,
            height: 45,
            backgroundColor: "#fff",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#498553",
            paddingStart: 10,
            fontSize: 15,
          }}
        ></TextInput>
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
          <Text style={{ color: "#fff", fontSize: 15, fontWeight: 700 }}>
            Create an Account
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
          <Text style={{ color: "#498553" }}>Already have an account? </Text>
          <TouchableOpacity>
            <Text style={{ fontWeight: 500, color: "#498553" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;
