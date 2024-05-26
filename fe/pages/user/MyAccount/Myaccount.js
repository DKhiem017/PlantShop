import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome6 } from "@expo/vector-icons";

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

const MyAccount = ({ navigation }) => {
  const UserinfoNavigation = () => {
    navigation.navigate("UserInfo");
  };

  const MyAddressNavigation = () => {
    navigation.navigate("MyAddress");
  };

  const MyOrderNavigation = () => {
    navigation.navigate("Order");
  };

  const MyFeedbackNavigation = () => {
    navigation.navigate("MyFeedback");
  };

  const VoucherNavigation = () => {
    navigation.navigate("Voucher Wallet");
  };

  const ChatNavigation = () =>{
    navigation.navigate("Chat Room")
  }
  return (
    <SafeAreaView>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#F5F5F5",
        }}
      >
        <StatusBar style="dark"></StatusBar>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 19, fontWeight: 800, color: "#498553" }}>
            My Account
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
        {/* Order */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <TouchableOpacity style={styles.greenbut} onPress={MyOrderNavigation}>
            <FontAwesome6 name="money-bill-wave" size={15} color="white" />
            <Text
              style={{
                fontWeight: 600,
                color: "#fff",
                marginLeft: 53,
                fontSize: 16,
              }}
            >
              My Order
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
        {/* Voucher Wallet */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <TouchableOpacity style={styles.greenbut} onPress={VoucherNavigation}>
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
    </SafeAreaView>
  );
};

export default MyAccount;
