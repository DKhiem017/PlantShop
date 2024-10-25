import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import { ProgressStep, ProgressSteps } from "react-native-progress-steps";
import { SafeAreaView } from "react-native-safe-area-context";
import orderAPI from "../../../../Api/OrderApi";
import { useTranslation } from "react-i18next";

const DetailBill = ({ navigation, route }) => {
  const { t } = useTranslation();
  const { orderID } = route.params;

  const [product, setProduct] = useState([]);
  const [order, setOrder] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await orderAPI.getDetail(orderID);
        console.log("Order", response.products);
        setProduct(response.products);
        setOrder(response.order);
        let activeNum = setStatus(response.order.status);
        setActiveStep(activeNum);
        setLoading(false);
      } catch (error) {
        console.log("Error: ", error);
        setLoading(false);
      }
    };

    fetchAPI();
  }, []);

  const setStatus = (status) => {
    switch (status) {
      case "Pending":
        return 0;
      case "Packaging":
        return 1;
      case "Delivering":
        return 2;
      case "Completed":
        return 3;
    }
  };

  const HandleNextStep = async () => {
    return await orderAPI
      .updateStatus(orderID)
      .then((res) => {
        console.log("Response: ", res);
        Alert.alert("Order's status has been changed");
      })
      .catch((error) => {
        Alert.alert("Error: ", error);
      });
  };

  const HandleSubmit = () => {
    Alert.alert(
      t("orderHasBeenCompleted") + ", " + t("cannotChangeStatus") + "!"
    );
  };

  return (
    <SafeAreaView
      style={{
        display: "flex",
        backgroundColor: "#f5f5f5",
        flex: 1,
        paddingHorizontal: 15,
      }}
    >
      <View>
        <StatusBar />
        {/* Tiêu đề với search */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontWeight: 700,
              color: "#498553",
            }}
          >
            {t("orderDetail")}
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#498553"
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
            }}
          />
        ) : (
          <>
            <View style={{ flex: 0.1 }}>
              <ProgressSteps activeLabelColor="#498553" activeStep={activeStep}>
                <ProgressStep
                  label={t("pending")}
                  nextBtnTextStyle={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: 13,
                  }}
                  nextBtnStyle={{
                    backgroundColor: "#498553",
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    marginVertical: -20,
                    width: 80,
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                  onNext={HandleNextStep}
                />

                <ProgressStep
                  label={t("packaging")}
                  nextBtnTextStyle={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: 13,
                  }}
                  nextBtnStyle={{
                    backgroundColor: "#498553",
                    borderRadius: 10,
                    paddingHorizontal: 15,
                    marginVertical: -20,
                    width: 80,
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                  onNext={HandleNextStep}
                  previousBtnText={t("back")}
                  previousBtnTextStyle={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: 13,
                  }}
                  previousBtnStyle={{
                    backgroundColor: "#498553",
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    marginVertical: -20,
                    width: 80,
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                />

                <ProgressStep
                  label={t("delivering")}
                  nextBtnTextStyle={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: 13,
                  }}
                  nextBtnStyle={{
                    backgroundColor: "#498553",
                    borderRadius: 10,
                    paddingHorizontal: 15,
                    marginVertical: -20,
                    width: 80,
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                  onNext={HandleNextStep}
                  previousBtnText={t("back")}
                  previousBtnTextStyle={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: 13,
                  }}
                  previousBtnStyle={{
                    backgroundColor: "#498553",
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    marginVertical: -20,
                    width: 80,
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                />

                <ProgressStep
                  label={t("completed")}
                  nextBtnTextStyle={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: 13,
                  }}
                  nextBtnStyle={{
                    backgroundColor: "#498553",
                    borderRadius: 10,
                    paddingHorizontal: 15,
                    marginVertical: -20,
                    width: 80,
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                  onSubmit={HandleSubmit}
                  previousBtnText={t("back")}
                  previousBtnTextStyle={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: 13,
                  }}
                  previousBtnStyle={{
                    backgroundColor: "#498553",
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    marginVertical: -20,
                    width: 80,
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                />
              </ProgressSteps>
            </View>
            <View
              style={{
                backgroundColor: "white",
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderRadius: 5,
                gap: 10,
                marginBottom: 10,
              }}
            >
              <Text
                style={{ fontWeight: "700", color: "#498553", fontSize: 15 }}
              >
                {t("customerInfomation")}
              </Text>

              <View style={{ flexDirection: "row", gap: 10 }}>
                <Text style={{ color: "#6F6A61" }}>{t("name")} </Text>
                <Text style={{ fontWeight: "700" }}>{order.name}</Text>
              </View>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <Text style={{ color: "#6F6A61" }}>{t("phoneNumber")} </Text>
                <Text style={{ fontWeight: "700" }}>{order.phone}</Text>
              </View>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <Text style={{ color: "#6F6A61" }}>{t("address")} </Text>
                <Text style={{ fontWeight: "700" }}>{order.address}</Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderRadius: 5,
                gap: 10,
                marginBottom: 10,
              }}
            >
              <Text
                style={{ fontWeight: "700", color: "#498553", fontSize: 15 }}
              >
                {t("delivery")} & {t("payment")}
              </Text>

              <View style={{ flexDirection: "row", gap: 10 }}>
                <Text style={{ color: "#6F6A61" }}>
                  {t("deliveryMethod")}:{" "}
                </Text>
                <Text style={{ fontWeight: "700" }}>
                  {order.deliveryMethod}
                </Text>
              </View>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <Text style={{ color: "#6F6A61" }}>{t("shippingCost")}: </Text>
                <Text style={{ fontWeight: "700" }}>
                  $ {order.shippingCost}
                </Text>
              </View>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <Text style={{ color: "#6F6A61" }}>{t("paymentMethod")}: </Text>
                <Text style={{ fontWeight: "700" }}>{order.payMethod}</Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderRadius: 5,
                gap: 5,
                marginBottom: 10,
              }}
            >
              <Text
                style={{ fontWeight: "700", color: "#498553", fontSize: 15 }}
              >
                {t("details")}
              </Text>
              <View>
                {product.map((item, index) => (
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
              <View
                style={{
                  flexDirection: "row",
                  gap: 5,
                  justifyContent: "flex-end",
                }}
              >
                <Text>{t("total")}: </Text>
                <Text style={{ fontWeight: "700", color: "#E71818" }}>
                  $ {order.totalPrice}
                </Text>
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  productItem: {
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 8,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#498553",
    borderRadius: 10,
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

export default DetailBill;
