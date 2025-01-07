import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome6 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";
import { Fontisto } from "@expo/vector-icons";
import customerAPI from "../../../../Api/CustomerApi";

const avt = require("../../../../assets/images/Logo.png");

const styles = StyleSheet.create({
  greenbut: {
    height: 50,
    backgroundColor: "#498553",
    width: 280,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 30,
  },
  changeLanguagebut: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: "#498553",
    flexDirection: "row",
    width: 60,
    borderRadius: 50,
    alignItems: "center",
    gap: 5,
  },
  changeLanguagebutContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

const MyAccount = ({ navigation }) => {
  const gold = require("../../../../assets/images/gold.png");
  const bronze = require("../../../../assets/images/bronze.png");
  const silver = require("../../../../assets/images/silver.png");
  const diamond = require("../../../../assets/images/diamond.png");

  const { t, i18n } = useTranslation();

  const [userName, setUserName] = useState();
  const [userType, setUserType] = useState();
  const [paid, setPaid] = useState();
  const [typeName, setTypeName] = useState();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const UserinfoNavigation = () => {
    navigation.navigate("UserInfo");
  };

  const MyAddressNavigation = () => {
    navigation.navigate("MyAddress", { ProductList: [] });
  };

  const MyOrderNavigation = () => {
    navigation.navigate("Order");
  };

  const MyFeedbackNavigation = () => {
    navigation.navigate("MyFeedback");
  };

  const VoucherNavigation = () => {
    navigation.navigate("Voucher Wallet", { ProductList: [] });
  };

  const ChatNavigation = () => {
    navigation.navigate("Chat Room");
  };

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const user = await AsyncStorage.getItem("CustomerID");
        const response = await customerAPI.getInfo(user);
        setUserName(response.name);
        setUserType(response.customerTypeId);
        setPaid(response.totalPaid);
        setTypeName(response.customerType.customerTypeName);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchAPI();
  }, []);

  const HandleLogout = () => {
    Alert.alert(t("Logout"), t("DoUWantToLogout"), [
      { text: t("Cancel"), onPress: () => {}, style: "cancel" },
      {
        text: t("Logout"),
        onPress: async () => {
          AsyncStorage.removeItem("Token");
          AsyncStorage.removeItem("Role");
          AsyncStorage.removeItem("CustomerID");
          navigation.navigate("Home");
          navigation.navigate("Login");
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "column",
          backgroundColor: "#F5F5F5",
          marginBottom: 15,
          paddingBottom: 10,
        }}
      >
        <StatusBar style="dark"></StatusBar>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 19, fontWeight: 800, color: "#498553" }}>
              {t("MyAccount")}
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
                marginTop: 10,
              }}
            >
              <Image
                source={avt}
                style={{
                  resizeMode: "cover",
                }}
              ></Image>
            </View>
            <View style={{ marginTop: 10, gap: 5, flexDirection: "column" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontWeight: 600, color: "#498553" }}>
                  {userName}
                </Text>
                <View
                  style={{
                    width: 25,
                    height: 25,
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: 5,
                  }}
                >
                  <Image
                    source={
                      userType === 1
                        ? bronze
                        : userType === 2
                        ? silver
                        : userType === 3
                        ? gold
                        : userType === 4
                        ? diamond
                        : silver
                    }
                    style={{
                      resizeMode: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  ></Image>
                </View>
                <Text> {typeName}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>{t("TotalPaid")}: </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#498553",
                  }}
                >
                  {paid}$
                </Text>
              </View>
            </View>
          </View>
          {/* User Information */}
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              style={styles.greenbut}
              onPress={UserinfoNavigation}
            >
              <FontAwesome5 name="user-alt" size={20} color="#fff" />
              <Text
                style={{
                  fontWeight: 700,
                  color: "#fff",
                  marginLeft: 50,
                  fontSize: 16,
                }}
              >
                {t("UserInfo")}
              </Text>
            </TouchableOpacity>
          </View>
          {/* My Address */}
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={styles.greenbut}
              onPress={MyAddressNavigation}
            >
              <Entypo name="location-pin" size={24} color="#fff" />
              <Text
                style={{
                  fontWeight: 700,
                  color: "#fff",
                  marginLeft: 46,
                  fontSize: 16,
                }}
              >
                {t("MyAddress")}
              </Text>
            </TouchableOpacity>
          </View>
          {/* Order */}
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={styles.greenbut}
              onPress={MyOrderNavigation}
            >
              <FontAwesome6 name="money-bill-wave" size={15} color="white" />
              <Text
                style={{
                  fontWeight: 700,
                  color: "#fff",
                  marginLeft: 53,
                  fontSize: 16,
                }}
              >
                {t("MyOrder")}
              </Text>
            </TouchableOpacity>
          </View>
          {/* Chat Room */}
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <TouchableOpacity style={styles.greenbut} onPress={ChatNavigation}>
              <FontAwesome name="send" size={20} color="#fff" />
              <Text
                style={{
                  fontWeight: 700,
                  color: "#fff",
                  marginLeft: 50,
                  fontSize: 16,
                }}
              >
                {t("ChatRoom")}
              </Text>
            </TouchableOpacity>
          </View>
          {/* My Feedback */}
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={styles.greenbut}
              onPress={MyFeedbackNavigation}
            >
              <AntDesign name="like1" size={20} color="#fff" />
              <Text
                style={{
                  fontWeight: 700,
                  color: "#fff",
                  marginLeft: 50,
                  fontSize: 16,
                }}
              >
                {t("MyFeedback")}
              </Text>
            </TouchableOpacity>
          </View>
          {/* Voucher Wallet */}
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={styles.greenbut}
              onPress={VoucherNavigation}
            >
              <MaterialCommunityIcons name="sale" size={20} color="#fff" />
              <Text
                style={{
                  fontWeight: 700,
                  color: "#fff",
                  marginLeft: 50,
                  fontSize: 16,
                }}
              >
                {t("VoucherWallet")}
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
              onPress={HandleLogout}
            >
              <FontAwesome5 name="door-open" size={20} color="#498553" />
              <Text
                style={{
                  fontWeight: 700,
                  color: "#498553",
                  fontSize: 16,
                  marginLeft: 70,
                }}
              >
                {t("Logout")}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.changeLanguagebutContainer}>
          <TouchableOpacity
            style={styles.changeLanguagebut}
            onPress={() => changeLanguage(i18n.language === "en" ? "vi" : "en")}
          >
            <Fontisto name="world-o" size={24} color="white" />
            <Text style={{ color: "#fff" }}>
              {i18n.language === "en" ? "EN" : "VI"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyAccount;
