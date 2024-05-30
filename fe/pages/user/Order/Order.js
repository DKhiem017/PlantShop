import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import Pagetitle from "../../../components/pagetitle";

const adjust = require("../../../../assets/images/Adjust.png");
const plantImg = require("../../../../assets/images/Monstera_tran.png");

const styles = StyleSheet.create({
  filterContainer: {
    height: 40,
    width: 40,
    backgroundColor: "#498553",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundimage: {
    position: "absolute",
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  backgroundImage: {
    position: "absolute",
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  filterbackground: {
    resizeMode: "contain",
    position: "absolute",
  },
  orderItem: {
    width: "100%",
    backgroundColor: "#fff",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
    borderRadius: 5,
    padding: 5,
  },
  greyText: {
    fontSize: 13,
    color: "#6F6A61",
  },
});

const Order = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#f5f5f5",
        display: "flex",
        paddingLeft: 15,
        paddingRight: 15,
        alignItems: "center",
      }}
    >
      <View style={{ width: "100%" }}>
        <StatusBar></StatusBar>
        <Pagetitle title={"My Order"} navigation={navigation}></Pagetitle>
        {/* search và lọc */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            marginTop: 15,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{ display: "flex", justifyContent: "center", width: "85%" }}
          >
            <TextInput
              placeholder="Search for plants..."
              style={{
                backgroundColor: "#fff",
                height: 40,
                borderRadius: 10,
                paddingLeft: 13,
                color: "#000000",
                fontWeight: "600",
                paddingRight: 30,
                borderWidth: 0.5,
                borderColor: "#6F6A61",
              }}
            ></TextInput>
            <Feather
              style={{
                position: "absolute",
                right: 15,
                transform: [{ scaleX: -1 }],
              }}
              name="search"
              size={24}
              color="grey"
            />
          </View>
          <TouchableOpacity style={styles.filterContainer}>
            <Image source={adjust} style={styles.filterbackground}></Image>
          </TouchableOpacity>
        </View>
        {/* Order Item  */}
        <View style={{ width: "100%", marginTop: 15 }}>
          {/* item */}
          <View style={styles.orderItem}>
            <View style={{ height: 52, flexDirection: "row" }}>
              {/* ảnh sản phẩm */}
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 5,
                  backgroundColor: "#DAF1D4",
                }}
              >
                <Image source={plantImg} style={styles.backgroundImage}></Image>
              </View>
              {/* thông tin sản phẩm */}
              <View style={{ justifyContent: "space-between", marginLeft: 10 }}>
                <Text style={{ color: "#498553", fontWeight: 500 }}>
                  Monstera
                </Text>
                <Text style={{ color: "#6F6A61", fontSize: 13 }}>2 items</Text>
              </View>
              {/* detail button */}
              <TouchableOpacity
                style={{
                  height: 25,
                  width: 60,
                  backgroundColor: "#498553",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 8,
                  borderRadius: 5,
                  position: "absolute",
                  right: 0,
                }}
              >
                <Text
                  style={{
                    fontWeight: 400,
                    color: "#fff",
                    fontSize: 12,
                    marginRight: 5,
                  }}
                >
                  Detail
                </Text>
                <Entypo name="chevron-right" size={13} color="#fff" />
              </TouchableOpacity>
              {/* Text Container */}
            </View>
            <View style={{ gap: 10, marginTop: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.greyText}>ID Order</Text>
                <Text
                  style={{ fontSize: 13, fontWeight: 600, color: "#498553" }}
                >
                  HK001
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.greyText}>Total Price</Text>
                <Text style={{ fontSize: 13, fontWeight: 600, color: "#000" }}>
                  $50.55
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.greyText}>Status</Text>
                <Text
                  style={{ fontSize: 13, fontWeight: 600, color: "#F4CE14" }}
                >
                  Pending
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Order;
