import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const avt = require("../../../../assets/images/Logo.png");

const UserInformation = () => {
  return (
    <View
      style={{
        backgroundColor: "#F5F5F5",
      }}
    >
      <StatusBar style="dark"></StatusBar>
      <TouchableOpacity>
        <View
          style={{
            marginLeft: 5,
            position: "absolute",
            marginTop: 25,
          }}
        >
          <AntDesign name="arrowleft" size={28} color="#498553" />
        </View>
      </TouchableOpacity>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 25,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 500, color: "#498553" }}>
          User Information
        </Text>
        <View
          style={{
            height: 120,
            width: 120,
            borderWidth: 2,
            borderRadius: 60,
            borderColor: "#498553",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          <Image
            source={avt}
            style={{
              resizeMode: "cover",
            }}
          ></Image>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: "#498553",
            width: 280,
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 30,
          }}
        >
          <FontAwesome5 name="user-alt" size={20} color="#fff" />
          <Text
            style={{
              fontWeight: 600,
              color: "#fff",
              marginLeft: 50,
              fontSize: 16,
            }}
          >
            User Information
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: "#498553",
            width: 280,
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 30,
          }}
        >
          <Entypo name="location-pin" size={24} color="#fff" />
          <Text
            style={{
              fontWeight: 600,
              color: "#fff",
              marginLeft: 46,
              fontSize: 16,
            }}
          >
            My Address
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: "#498553",
            width: 280,
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 30,
          }}
        >
          <FontAwesome name="send" size={20} color="#fff" />
          <Text
            style={{
              fontWeight: 600,
              color: "#fff",
              marginLeft: 50,
              fontSize: 16,
            }}
          >
            Chat Room
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: "#498553",
            width: 280,
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 30,
          }}
        >
          <AntDesign name="like1" size={20} color="#fff" />
          <Text
            style={{
              fontWeight: 600,
              color: "#fff",
              marginLeft: 50,
              fontSize: 16,
            }}
          >
            My Feedback
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: "#498553",
            width: 280,
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 30,
          }}
        >
          <MaterialCommunityIcons name="sale" size={20} color="#fff" />
          <Text
            style={{
              fontWeight: 600,
              color: "#fff",
              marginLeft: 50,
              fontSize: 16,
            }}
          >
            Voucher Wallet
          </Text>
        </TouchableOpacity>
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
            backgroundColor: "#fff",
            width: 280,
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 30,
            borderColor: "#498553",
            borderWidth: 1,
          }}
        >
          <FontAwesome5 name="door-open" size={20} color="#498553" />
          <Text
            style={{
              fontWeight: 600,
              color: "#498553",
              fontSize: 16,
              marginLeft: 70,
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserInformation;
