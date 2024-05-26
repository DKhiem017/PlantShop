import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import Searchbar from "../../../components/search";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Pagetitle from "../../../components/pagetitle";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const product_background = require("../../../../assets/images/Background_Plants.png");
const plant_img = require("../../../../assets/images/Monstera_tran.png");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f3f3",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  customerInfo: {
    height: 120,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 5,
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  customerInfo_grid1: {
    height: 25,
    width: "100%",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  deliveryMethod: {
    height: 60,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 5,
    marginTop: 15,
    padding: 10,
  },
  voucherContainer: {
    height: 90,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 5,
    marginTop: 15,
    padding: 10,
  },
  SubtotalContainer: {
    height: 125,
    width: "100%",
    backgroundColor: "#fff",
    marginTop: 15,
    padding: 10,
    borderRadius: 5,
  },
  butContainer: {
    width: "100%",
    height: 60,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  acceptButton: {
    backgroundColor: "#498553",
    width: 320,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Checkout = ({ navigation }) => {
  const HandleMyAddress = () => {
    navigation.navigate("RecepientInfo");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar></StatusBar>
        <Pagetitle title={"Checkout"} navigation={navigation}/>
        <View style={styles.customerInfo}>
          <View style={styles.customerInfo_grid1}>
            <Text style={{ color: "#498553", fontSize: 14, fontWeight: 500 }}>
              Recipient Info
            </Text>
            <TouchableOpacity
              style={{
                height: 25,
                width: 80,
                backgroundColor: "#498553",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 8,
                borderRadius: 5,
                position: "absolute",
                right: 0,
              }}
              onPress={HandleMyAddress}
            >
              <Text style={{ fontWeight: 400, color: "#fff" }}>Modify</Text>
              <Entypo
                style={{ position: "absolute", right: 4 }}
                name="chevron-right"
                size={16}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
          <View style={{ display: "flex", flexDirection: "row", marginTop: 5 }}>
            <Text style={{ fontSize: 12, color: "#498553", fontWeight: 600 }}>
              Recipient:
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "#498553",
                marginLeft: 15,
                fontStyle: "italic",
              }}
            >
              Hoàng Phúc
            </Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", marginTop: 5 }}>
            <Text style={{ fontSize: 12, color: "#498553", fontWeight: 600 }}>
              Address:
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "#498553",
                marginLeft: 15,
                fontStyle: "italic",
              }}
            >
              Tân Lập, Dĩ An, Bình Dương
            </Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", marginTop: 5 }}>
            <Text style={{ fontSize: 12, color: "#498553", fontWeight: 600 }}>
              Phone:
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "#498553",
                marginLeft: 15,
                fontStyle: "italic",
              }}
            >
              0961826917
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 40,
            width: "100%",
            backgroundColor: "#fff",
            marginTop: 15,
            borderRadius: 5,
          }}
        >
          <TextInput
            style={{ height: "100%", paddingLeft: 15 }}
            placeholder="Note"
            fontSize={13}
          ></TextInput>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 15,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: 500, color: "#498553" }}>
            Product List
          </Text>
          <TouchableOpacity style={{ position: "absolute", right: 10 }}>
            <Entypo name="chevron-down" size={15} color="#498553" />
          </TouchableOpacity>
        </View>
        <View style={styles.deliveryMethod}>
          <Text style={{ fontWeight: 500, color: "#498553", fontSize: 14 }}>
            Method Delivery
          </Text>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginRight: 50,
              }}
            >
              <Entypo name="dot-single" size={24} color="#498553" />
              <Text style={{ fontWeight: 500, color: "#498553", fontSize: 13 }}>
                Normal
              </Text>
              <Text
                style={{
                  fontWeight: 500,
                  color: "#498553",
                  fontStyle: "italic",
                  marginLeft: 5,
                  fontSize: 13,
                }}
              >
                ($5.00)
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Entypo name="dot-single" size={24} color="#6F6A61" />
              <Text style={{ fontWeight: 500, color: "#6F6A61", fontSize: 13 }}>
                Express
              </Text>
              <Text
                style={{
                  fontWeight: 500,
                  color: "#6F6A61",
                  fontStyle: "italic",
                  marginLeft: 5,
                  fontSize: 13,
                }}
              >
                ($10.00)
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Voucher */}
        <View style={styles.voucherContainer}>
          <View style={styles.customerInfo_grid1}>
            <Text style={{ color: "#498553", fontWeight: 500 }}>Voucher</Text>
            <TouchableOpacity
              style={{
                height: 25,
                width: 80,
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
              <Text style={{ fontWeight: 400, color: "#fff" }}>Apply</Text>
              <Entypo
                style={{ position: "absolute", right: 4 }}
                name="chevron-right"
                size={16}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 32,
              width: "100%",
              borderWidth: 1,
              borderColor: "#c4c4c4",
              marginTop: 10,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 10,
              paddingRight: 10,
              borderRadius: 5,
            }}
          >
            <Text style={{ fontSize: 13, fontWeight: 600 }}>ABCDE</Text>
            <Text
              style={{
                position: "absolute",
                right: 10,
                color: "#498553",
                fontWeight: 600,
              }}
            >
              -10%
            </Text>
          </View>
        </View>
        <View style={styles.deliveryMethod}>
          <Text style={{ fontWeight: 500, color: "#498553", fontSize: 14 }}>
            Payment
          </Text>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginRight: 20,
              }}
            >
              <Entypo name="dot-single" size={24} color="#498553" />
              <Text style={{ fontWeight: 500, color: "#498553", fontSize: 13 }}>
                Normal
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginRight: 20,
              }}
            >
              <Entypo name="dot-single" size={24} color="#6F6A61" />
              <Text style={{ fontWeight: 500, color: "#6F6A61", fontSize: 13 }}>
                Momo
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Entypo name="dot-single" size={24} color="#6F6A61" />
              <Text style={{ fontWeight: 500, color: "#6F6A61", fontSize: 13 }}>
                Banking
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Subtotal */}
        <View style={styles.SubtotalContainer}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ color: "#6F6A61", fontWeight: 500, fontSize: 13 }}>
              Subtotal:
            </Text>
            <Text
              style={{
                color: "#498553",
                fontWeight: 500,
                position: "absolute",
                right: 0,
                fontSize: 13,
              }}
            >
              $80.00
            </Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", marginTop: 5 }}>
            <Text style={{ color: "#6F6A61", fontWeight: 500, fontSize: 13 }}>
              Delivery Fee:
            </Text>
            <Text
              style={{
                color: "#498553",
                fontWeight: 500,
                position: "absolute",
                right: 0,
                fontSize: 13,
              }}
            >
              $80.00
            </Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", marginTop: 5 }}>
            <Text style={{ color: "#6F6A61", fontWeight: 500, fontSize: 13 }}>
              Reduced Cost:
            </Text>
            <Text
              style={{
                color: "#498553",
                fontWeight: 500,
                position: "absolute",
                right: 0,
                fontSize: 13,
              }}
            >
              $80.00
            </Text>
          </View>
          {/* line */}
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#c4c4c4",
              marginTop: 10,
            }}
          ></View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 5,
            }}
          >
            <Text style={{ color: "#6F6A61", fontWeight: 500, fontSize: 13 }}>
              Total:
            </Text>
            <Text
              style={{
                color: "#498553",
                fontWeight: 500,
                position: "absolute",
                right: 0,
                fontSize: 13,
              }}
            >
              $80.00
            </Text>
          </View>
        </View>
        <View style={styles.butContainer}>
          <TouchableOpacity style={styles.acceptButton}>
            <Text style={{ color: "#fff", fontWeight: 500 }}>Accept</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Checkout;
