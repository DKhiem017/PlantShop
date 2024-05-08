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
import { cloneElement } from "react";
import { Fontisto } from "@expo/vector-icons";

const avt = require("../../../../assets/images/Logo.png");

const PromotionDetail = () => {
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
          marginTop: 28,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 700, color: "#498553" }}>
          Promotion Detail
        </Text>
      </View>
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
          Promotion Name
        </Text>
        <TextInput
          style={{
            marginTop: 5,
            height: 55,
            backgroundColor: "#fff",
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#498553",
            paddingStart: 10,
            fontSize: 16,
            color: "#498553",
          }}
        >
          Super Sale 17.01
        </TextInput>
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
          Date Modified
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              marginTop: 5,
              height: 55,
              backgroundColor: "#fff",
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#498553",
              paddingStart: 10,
              paddingEnd: 50,
              fontSize: 15,
              color: "#498553",
              width: "100%",
            }}
          >
            17.01.2024 - 18.01.2024
          </TextInput>
          <TouchableOpacity
            style={{
              position: "absolute",
              marginLeft: 340,
            }}
          >
            <FontAwesome name="calendar" size={28} color="#498553" />
          </TouchableOpacity>
        </View>
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
          Discount Value
        </Text>
        <TextInput
          style={{
            marginTop: 5,
            height: 55,
            backgroundColor: "#fff",
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#498553",
            paddingStart: 10,
            fontSize: 15,
            color: "#498553",
          }}
        >
          30%
        </TextInput>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 210,
        }}
      >
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: "#498553",
            width: 250,
            borderRadius: 5,
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
            Edit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              width: 60,
              height: 50,
              borderColor: "#498553",
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 10,
              borderRadius: 5,
            }}
          >
            <Fontisto name="trash" size={24} color="#498553" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PromotionDetail;
