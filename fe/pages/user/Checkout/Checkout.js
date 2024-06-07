import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  Animated,
  LayoutAnimation,
  UIManager,
  Platform,
} from "react-native";
import Pagetitle from "../../../components/pagetitle";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useRef } from "react";

const Checkout = ({ navigation, route }) => {
  const { data } = route.params;

  const hasProducts = data && data.length > 0;

  console.log(hasProducts);

  //xử lý chuyển method Delivery
  const [activeMethod, setActiveMethod] = useState("normal"); // Trạng thái mặc định là 'normal'

  const handlePress = (method) => {
    setActiveMethod(method);
  };

  const [activePayment, setActivePayment] = useState("normal"); // Trạng thái mặc định là 'normal'

  const handlePayment = (method) => {
    setActivePayment(method);
  };

  //xử lý chuyển đổi payment

  const HandleMyAddress = () => {
    navigation.navigate("RecepientInfo");
  };

  // Quản lý trạng thái hiển thị danh sách sản phẩm
  const [showProductList, setShowProductList] = useState(true);

  // Giá trị Animated để xoay biểu tượng chevron
  const chevronRotation = useRef(new Animated.Value(1)).current;

  const toggleProductList = () => {
    // Đảo ngược trạng thái hiển thị danh sách sản phẩm
    setShowProductList(!showProductList);

    // Tạo hiệu ứng LayoutAnimation cho danh sách sản phẩm
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    // Tạo hiệu ứng xoay cho biểu tượng chevron
    Animated.timing(chevronRotation, {
      toValue: showProductList ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  // Tạo giá trị xoay cho biểu tượng chevron
  const chevronRotate = chevronRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar></StatusBar>
        <Pagetitle title={"Checkout"} navigation={navigation} />
        {/* Recipient Info */}
        <View style={styles.customerInfo}>
          <View style={styles.customerInfo_grid1}>
            <Text style={{ color: "#498553", fontSize: 14, fontWeight: 500 }}>
              Recipient Info
            </Text>
            <TouchableOpacity
              style={styles.modifyBut}
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
        {/* Note */}
        <View style={styles.noteContainer}>
          <TextInput
            style={{ height: "100%", paddingLeft: 15 }}
            placeholder="Note"
            fontSize={13}
            multiline={true}
          ></TextInput>
        </View>
        {/* Product List */}
        <View>
          <View style={styles.productListText}>
            <Text style={{ fontSize: 14, fontWeight: 500, color: "#498553" }}>
              Product List
            </Text>
            <TouchableOpacity
              style={{ position: "absolute", right: 10 }}
              onPress={toggleProductList}
            >
              <Animated.View style={{ transform: [{ rotate: chevronRotate }] }}>
                <Entypo name="chevron-down" size={15} color="#498553" />
              </Animated.View>
            </TouchableOpacity>
          </View>
          {hasProducts && showProductList && (
            <View>
              {data.map((item) => (
                <View key={item.product.productID} style={styles.productItem}>
                  <View style={styles.itemImgContainer}>
                    <Image
                      source={{ uri: `${item.product.images[0].imageURL}` }}
                      style={styles.itemImg}
                    ></Image>
                  </View>
                  <View style={styles.itemInfo}>
                    <Text
                      style={{
                        fontSize: 13,
                        color: "#000",
                        fontWeight: "bold",
                      }}
                    >
                      {item.product.productName}
                    </Text>
                    <Text style={{ fontSize: 13, color: "#498553" }}>
                      $ {item.product.price}
                    </Text>
                  </View>
                  <View style={styles.quantityContainer}>
                    <Text
                      style={{
                        fontSize: 13,
                        color: "#6F6A61",
                        position: "absolute",
                        bottom: 0,
                        alignSelf: "center",
                        right: 5,
                      }}
                    >
                      x {item.quantity}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>
        {/* Method Delivery */}
        <View style={styles.deliveryMethod}>
          <Text style={{ fontWeight: 500, color: "#498553", fontSize: 14 }}>
            Method Delivery
          </Text>
          <View style={styles.normalAndExpress}>
            <TouchableOpacity
              style={styles.normalMethod}
              onPress={() => handlePress("normal")}
            >
              <Entypo
                name="dot-single"
                size={24}
                color={activeMethod === "normal" ? "#498553" : "#6F6A61"}
              />
              <Text
                style={{
                  fontWeight: 500,
                  color: activeMethod === "normal" ? "#498553" : "#6F6A61",
                  fontSize: 13,
                }}
              >
                Normal
              </Text>
              <Text
                style={{
                  fontWeight: 500,
                  color: activeMethod === "normal" ? "#498553" : "#6F6A61",
                  fontStyle: "italic",
                  marginLeft: 5,
                  fontSize: 13,
                }}
              >
                ($5.00)
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.expressMethod}
              onPress={() => handlePress("express")}
            >
              <Entypo
                name="dot-single"
                size={24}
                color={activeMethod === "express" ? "#498553" : "#6F6A61"}
              />
              <Text
                style={{
                  fontWeight: 500,
                  color: activeMethod === "express" ? "#498553" : "#6F6A61",
                  fontSize: 13,
                }}
              >
                Express
              </Text>
              <Text
                style={{
                  fontWeight: 500,
                  color: activeMethod === "express" ? "#498553" : "#6F6A61",
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
            <TouchableOpacity style={styles.applyBut}>
              <Text style={{ fontWeight: 400, color: "#fff" }}>Apply</Text>
              <Entypo
                style={{ position: "absolute", right: 4 }}
                name="chevron-right"
                size={16}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.couponBut}>
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
        {/* Payment */}
        <View style={styles.deliveryMethod}>
          <Text style={{ fontWeight: "500", color: "#498553", fontSize: 14 }}>
            Payment
          </Text>
          <View style={styles.paymentContainer}>
            <TouchableOpacity
              style={styles.paymentBut}
              onPress={() => handlePayment("normal")}
            >
              <Entypo
                name="dot-single"
                size={24}
                color={activePayment === "normal" ? "#498553" : "#6F6A61"}
              />
              <Text
                style={{
                  fontWeight: "500",
                  color: activePayment === "normal" ? "#498553" : "#6F6A61",
                  fontSize: 13,
                }}
              >
                Normal
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.paymentBut}
              onPress={() => handlePayment("momo")}
            >
              <Entypo
                name="dot-single"
                size={24}
                color={activePayment === "momo" ? "#498553" : "#6F6A61"}
              />
              <Text
                style={{
                  fontWeight: "500",
                  color: activePayment === "momo" ? "#498553" : "#6F6A61",
                  fontSize: 13,
                }}
              >
                Momo
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.paymentBut}
              onPress={() => handlePayment("banking")}
            >
              <Entypo
                name="dot-single"
                size={24}
                color={activePayment === "banking" ? "#498553" : "#6F6A61"}
              />
              <Text
                style={{
                  fontWeight: "500",
                  color: activePayment === "banking" ? "#498553" : "#6F6A61",
                  fontSize: 13,
                }}
              >
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
            <Text style={styles.subTotalText}>$80.00</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", marginTop: 5 }}>
            <Text style={{ color: "#6F6A61", fontWeight: 500, fontSize: 13 }}>
              Delivery Fee:
            </Text>
            <Text style={styles.subTotalText}>$80.00</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", marginTop: 5 }}>
            <Text style={{ color: "#6F6A61", fontWeight: 500, fontSize: 13 }}>
              Reduced Cost:
            </Text>
            <Text style={styles.subTotalText}>$80.00</Text>
          </View>
          {/* line */}
          <View style={styles.subtoTalLine}></View>
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
            <Text style={styles.subTotalText}>$80.00</Text>
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
    paddingBottom: 15,
  },
  acceptButton: {
    backgroundColor: "#498553",
    width: 320,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  modifyBut: {
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
  },
  productListText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  normalAndExpress: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  normalMethod: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 50,
  },
  expressMethod: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  applyBut: {
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
  },
  noteContainer: {
    height: 40,
    width: "100%",
    backgroundColor: "#fff",
    marginTop: 15,
    borderRadius: 5,
  },
  couponBut: {
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
  },
  paymentContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  paymentBut: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  subTotalText: {
    color: "#498553",
    fontWeight: "bold",
    position: "absolute",
    right: 0,
    fontSize: 13,
  },
  subtoTalLine: {
    height: 1,
    width: "100%",
    backgroundColor: "#c4c4c4",
    marginTop: 10,
  },
  productItem: {
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 8,
    marginTop: 5,
  },
  itemImgContainer: {
    height: 50,
    width: 50,
    backgroundColor: "#DAF1D4",
    borderRadius: 5,
  },
  itemInfo: {
    justifyContent: "space-between",
    marginLeft: 10,
  },
  quantityContainer: {
    height: "100%",
    position: "absolute",
    right: 10,
    alignSelf: "center",
  },
  itemImg: {
    height: "100%",
    width: "100%",
    position: "absolute",
    resizeMode: "contain",
  },
});
