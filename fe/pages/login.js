import { StatusBar } from "expo-status-bar";
import { useCallback, useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import authAPI from "../../Api/AuthApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppContext } from "../../contexts/appContext";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useTranslation } from "react-i18next";

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
    bottom: 10,
    right: 10,
  },
});

const Login = ({ navigation }) => {
  const { t, i18n } = useTranslation(); // Khởi tạo hook cho đa ngôn ngữ

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const { setToken, setUser, setRole } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      HandleGetToken();
    }, 100);
  }, []);

  const HandleGetToken = async () => {
    const dataToken = await AsyncStorage.getItem("Token");
    const roleUser = await AsyncStorage.getItem("Role");
    console.log("check: ", roleUser);
    if (!dataToken) {
      return;
    } else {
      navigation.replace(roleUser === "Customer" ? "Main" : "Main Admin");
    }
  };

  const HandleLogin = async () => {
    setLoading(true);

    if (!password || !email) {
      setLoading(false);
      return;
    }

    try {
      const res = await authAPI.login(email, password);

      if (res && res.data.access_token) {
        AsyncStorage.setItem("Token", "Bearer " + res.data.access_token);
        setToken(res.data.access_token);

        AsyncStorage.setItem("CustomerID", res.data.customer.id);
        setUser(res.data.customer);

        AsyncStorage.setItem("Role", res.data.role);
        setRole(res.data.role);
        setEmail("");
        setPassword("");
        navigation.navigate(
          res.data.role === "Customer" ? "Main" : "Main Admin"
        );
        setLoading(false);
      } else {
        console.log("không có res ");
        setLoading(false);
      }
    } catch (error) {
      if (error.response.status === 401) {
        Alert.alert("Error", "Incorrect Password");
        setLoading(false);
      } else if (error.response.status === 404) {
        Alert.alert("Error", "Email not exists");
        setLoading(false);
      } else {
        Alert.alert("Error", error.response.status);
        setLoading(false);
      }
    }
  };

  const HandleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <ScrollView
      automaticallyAdjustKeyboardInsets={true}
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar style="dark"></StatusBar>
      <Image source={backgroundImage} style={styles.backgroundImage}></Image>
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
            fontWeight: 700,
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
        <Text>{t("loginTitle")}</Text>
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
          <Text>{t("email")}</Text>
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
              color: "#498553",
            }}
            value={email}
            onChangeText={(e) => setEmail(e)}
          ></TextInput>
        </View>
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text>{t("password")}</Text>
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
              color: "#498553",
            }}
            value={password}
            onChangeText={(e) => setPassword(e)}
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
            <Text style={{ fontWeight: 700, color: "#498553", fontSize: 15 }}>
              {t("forgetPassword")}
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
            gap: 10,
            flexDirection: "row",
          }}
          onPress={HandleLogin}
        >
          {loading ? <ActivityIndicator size="small" color="white" /> : null}
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: 700 }}>
            {t("loginButton")}
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
          <Text style={{ color: "#498553" }}>{t("noAccount")} </Text>
          <TouchableOpacity onPress={HandleRegister}>
            <Text style={{ fontWeight: 700, color: "#498553" }}>
              {t("register")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* nút chuyển đổi ngôn ngữ */}
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
    </ScrollView>
  );
};

export default Login;
