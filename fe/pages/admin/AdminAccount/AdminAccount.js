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
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext } from "react";
import { AppContext } from "../../../../contexts/appContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";

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
});

const AdminAccount = ({ navigation }) => {
  const { t } = useTranslation();
  const { setToken, setUser } = useContext(AppContext);

  const ChatNavigation = () => {
    navigation.navigate("ChatAdmin");
  };

  const HandleLogout = () => {
    Alert.alert("Logout", "Do you want to log out?", [
      { text: "Cancel", onPress: () => {}, style: "cancel" },
      {
        text: "Logout",
        onPress: async () => {
          AsyncStorage.removeItem("Token");
          setToken("");
          setUser("");
          navigation.navigate("Login");
        },
      },
    ]);
  };

  return (
    <SafeAreaView>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#F5F5F5",
          marginBottom: 15,
        }}
      >
        <StatusBar style="dark"></StatusBar>
        <ScrollView>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 19, fontWeight: 800, color: "#498553" }}>
              {t("myAccount")}
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
          </View>
          {/* Chat Room */}
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 60,
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
                {t("chatRoom")}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 15,
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
              onPress={HandleLogout}
            >
              <FontAwesome5 name="door-open" size={20} color="#fff" />
              <Text
                style={{
                  fontWeight: 700,
                  color: "#fff",
                  fontSize: 16,
                  marginLeft: 70,
                }}
              >
                {t("logout")}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AdminAccount;
