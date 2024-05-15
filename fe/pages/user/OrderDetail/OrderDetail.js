import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import Pagetitle from "../../../components/pagetitle";
import { Entypo } from "@expo/vector-icons";

const plant_img = require("../../../../assets/images/Monstera_tran.png");

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 15,
    gap: 10,
  },
  itemContainer: {
    borderRadius: 10,
    width: "100%",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
    padding: 8,
    backgroundColor: "#fff",
  },
  backgroundImg: {
    height: "100%",
    width: "100%",
    position: "absolute",
    resizeMode: "contain",
  },
});

const OrderDetail = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <View>
        <StatusBar></StatusBar>
        <Pagetitle title={"Order Detail"}></Pagetitle>
        {/* Thông tin order */}
        <View style={styles.container}>
          <View style={styles.itemContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#498553", fontWeight: 600, fontSize: 15 }}>
                Order Infomation
              </Text>
              <View
                style={{
                  height: 23,
                  width: 98,
                  backgroundColor: "#F4CE14",
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#fff" }}>Pending</Text>
              </View>
            </View>
            {/* Text Container */}
            <View style={{ flexDirection: "row", marginTop: 10, gap: 40 }}>
              <View style={{ gap: 4 }}>
                <Text style={{ color: "#498553" }}>OrderID</Text>
                <Text style={{ color: "#498553" }}>Time</Text>
                <Text style={{ color: "#498553" }}>Total</Text>
              </View>
              <View style={{ gap: 4 }}>
                <Text style={{ color: "#498553", fontWeight: 500 }}>HK001</Text>
                <Text style={{ color: "#498553", fontWeight: 500 }}>
                  03/03/2024 6:50:50
                </Text>
                <Text style={{ color: "#498553", fontWeight: 500 }}>
                  $40.00
                </Text>
              </View>
            </View>
          </View>
          {/* Thông tin người nhận */}
          <View style={styles.itemContainer}>
            <Text style={{ color: "#498553", fontSize: 15, fontWeight: 600 }}>
              Recipient Infomation
            </Text>
            <View style={{ marginTop: 8, gap: 4 }}>
              <View style={{ flexDirection: "row", gap: 2 }}>
                <Text style={{ color: "#498553" }}>Hoàng Phúc</Text>
                <Text style={{ color: "#498553" }}>-</Text>
                <Text style={{ color: "#6F6A61" }}>0961826917</Text>
              </View>
              <Text style={{ color: "#498553" }}>
                Tân Lập, Dĩ An, Bình Dương
              </Text>
            </View>
          </View>
          {/* ProductList */}
          <View style={styles.itemContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#498553", fontWeight: 600, fontSize: 15 }}>
                Product List
              </Text>
              <TouchableOpacity
                style={{
                  height: 20,
                  width: 20,
                  backgroundColor: "#498553",
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Entypo name="chevron-down" size={15} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
          {/* Item sản phẩm */}
          <View style={styles.itemContainer}>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <View
                style={{
                  height: 61,
                  width: 50,
                  backgroundColor: "#DAF1D4",
                  borderRadius: 5,
                }}
              >
                <Image source={plant_img} style={styles.backgroundImg} />
              </View>
              <View style={{ justifyContent: "space-between" }}>
                <Text style={{ color: "#498553", fontSize: 13 }}>Monstera</Text>
                <Text
                  style={{
                    color: "#6F6A61",
                    fontStyle: "italic",
                    fontSize: 13,
                  }}
                >
                  2 items
                </Text>
                <Text style={{ color: "#000", fontWeight: 600, fontSize: 13 }}>
                  $30.55
                </Text>
              </View>
            </View>
          </View>
          {/* Deliverty & Payment */}
          <View style={styles.itemContainer}>
            <Text style={{ color: "#498553", fontSize: 15, fontWeight: 600 }}>
              Deliverty & Payment
            </Text>
            <View style={{ marginTop: 4, gap: 30, flexDirection: "row" }}>
              <View style={{ gap: 5 }}>
                <Text style={{ color: "#498553" }}>Delivery Method</Text>
                <Text style={{ color: "#498553" }}>Payment Method</Text>
              </View>
              <View style={{ gap: 5 }}>
                <Text style={{ color: "#498553", fontWeight: 600 }}>
                  Express
                </Text>
                <Text style={{ color: "#498553", fontWeight: 600 }}>
                  Pay when receiving
                </Text>
              </View>
            </View>
          </View>

          {/* Summary */}
          <View style={styles.itemContainer}>
            <Text style={{ color: "#498553", fontSize: 15, fontWeight: 600 }}>
              Summary
            </Text>
            <View style={{ marginTop: 4, flexDirection: "row", gap: 55 }}>
              <View style={{ gap: 4 }}>
                <Text style={{ color: "#498553" }}>SubTotal</Text>
                <Text style={{ color: "#498553" }}>Delivery Cost</Text>
                <Text style={{ color: "#498553" }}>Total</Text>
              </View>
              <View style={{ gap: 4 }}>
                <Text style={{ color: "#498553", fontWeight: 600 }}>
                  $30.00
                </Text>
                <Text style={{ color: "#498553", fontWeight: 600 }}>
                  $10.00
                </Text>
                <Text style={{ color: "#E71818", fontWeight: 600 }}>
                  $40.00
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderDetail;
