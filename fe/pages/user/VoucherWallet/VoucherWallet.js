import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Pagetitle from "../../../components/pagetitle";
import Searchbar from "../../../components/search";

const couponImg = require("../../../../assets/images/gift.png");

const styles = StyleSheet.create({
  itembackground: {
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
  backgroundImg: {
    position: "absolute",
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
});

const VoucherWallet = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#f5f5f5", paddingHorizontal: 15 }}
    >
      <StatusBar></StatusBar>
      <View>
        <Pagetitle title={"Voucher Wallet"} navigation={navigation}></Pagetitle>
        <Searchbar></Searchbar>
        <View style={{ marginTop: 15, gap: 10 }}>
          {/* item */}
          <View style={styles.itembackground}>
            {/* ảnh sp */}
            <View style={{ flexDirection: "row" }}>
              <View style={{ height: 70, width: 70 }}>
                <Image source={couponImg} style={styles.backgroundImg}></Image>
              </View>
              <View
                style={{
                  borderStyle: "dashed",
                  borderColor: "#D9D9D9",
                  borderWidth: 1,
                  marginLeft: 5,
                }}
              ></View>
              <View
                style={{
                  justifyContent: "space-between",
                  marginLeft: 10,
                  paddingVertical: 5,
                }}
              >
                <Text
                  style={{ fontSize: 13, fontWeight: 600, color: "#498553" }}
                >
                  Siêu ưu đãi Tết 2024
                </Text>
                <Text style={{ fontSize: 11, color: "#6F6A61" }}>
                  Giảm 20% cho đơn từ $50
                </Text>
                <Text style={{ fontSize: 11, color: "#6F6A61" }}>
                  Từ 08/02/2024-19/02/2024
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VoucherWallet;
