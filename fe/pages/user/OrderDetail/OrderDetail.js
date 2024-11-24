import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  FlatList,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Pagetitle from "../../../components/pagetitle";
import { Entypo } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import orderAPI from "../../../../Api/OrderApi";
import { useTranslation } from "react-i18next";

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  itemContainer: {
    borderRadius: 10,
    marginBottom: 10,
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
  productItem: {
    borderRadius: 10,
    marginBottom: 10,
    width: 200,
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
    marginRight: 5,
  },
  backgroundImg: {
    height: "100%",
    width: "100%",
    position: "absolute",
    resizeMode: "contain",
  },
});

const OrderDetail = ({ route, navigation }) => {
  const { t } = useTranslation();

  const { id } = route.params;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await orderAPI.getDetail(id);
        console.log("success: ", response);
        setData(response);
        setLoading(false);
      } catch (error) {
        console.log("Error: ", error);
        setLoading(false);
      }
    };

    fetchAPI();
  }, []);

  const formatDate = (date) => {
    const inputDate = new Date(date);

    const year = inputDate.getUTCFullYear();
    const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
    const day = inputDate.getDate().toString().padStart(2, "0");

    const time =
      inputDate.getHours().toString().padStart(2, "0") +
      ":" +
      inputDate.getMinutes().toString().padStart(2, "0");

    const formattedDate = `${day}/${month}/${year}  ${time}`;
    return formattedDate;
  };

  const StatusColor = (status) => {
    if (status === "Pending") {
      return (
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
          <Text style={{ color: "#fff" }}>{status}</Text>
        </View>
      );
    } else if (status === "Packaging") {
      return (
        <View
          style={{
            height: 23,
            width: 98,
            backgroundColor: "#2A2A86",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff" }}>{status}</Text>
        </View>
      );
    } else if (status === "Delivering") {
      return (
        <View
          style={{
            height: 23,
            width: 98,
            backgroundColor: "#AAC9FF",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff" }}>{status}</Text>
        </View>
      );
    } else if (status === "Completed") {
      return (
        <View
          style={{
            height: 23,
            width: 98,
            backgroundColor: "#498553",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff" }}>{status}</Text>
        </View>
      );
    }
  };

  const ProductItem = ({ image, name, quantity, price }) => {
    return (
      <View style={styles.productItem}>
        <View style={{ flexDirection: "row", gap: 10, marginRight: 10 }}>
          <View
            style={{
              height: 61,
              width: 50,
              backgroundColor: "#DAF1D4",
              borderRadius: 5,
            }}
          >
            <Image source={{ uri: `${image}` }} style={styles.backgroundImg} />
          </View>
          <View style={{ justifyContent: "space-between" }}>
            <Text style={{ color: "#498553", fontSize: 13 }}>{name}</Text>
            <Text
              style={{
                color: "#6F6A61",
                fontStyle: "italic",
                fontSize: 13,
              }}
            >
              {quantity} {t("items")}
            </Text>
            <Text style={{ color: "#000", fontWeight: 600, fontSize: 13 }}>
              ${price}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#F5F5F5", paddingHorizontal: 15 }}
    >
      <View>
        <StatusBar></StatusBar>
        <Pagetitle title={t("OrderDetail")} navigation={navigation}></Pagetitle>
        {/* Thông tin order */}
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#498553"
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          />
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 25, marginTop: 10 }}
          >
            <View style={styles.container}>
              <View style={styles.itemContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{ color: "#498553", fontWeight: 800, fontSize: 15 }}
                  >
                    {t("OrderInfo")}
                  </Text>
                  {StatusColor(data.order.status)}
                </View>
                {/* Text Container */}
                <View style={{ flexDirection: "row", marginTop: 10, gap: 40 }}>
                  <View style={{ gap: 4 }}>
                    <Text style={{ color: "#498553" }}>{t("OrderID")}</Text>
                    <Text style={{ color: "#498553" }}>{t("TimeOfOrder")}</Text>
                    <Text style={{ color: "#498553" }}>{t("total")}</Text>
                  </View>
                  <View style={{ gap: 4 }}>
                    <Text style={{ color: "#498553", fontWeight: 700 }}>
                      {data.order.orderID}
                    </Text>
                    <Text style={{ color: "#498553", fontWeight: 700 }}>
                      {formatDate(data.order.timeCreated)}
                    </Text>
                    <Text style={{ color: "#498553", fontWeight: 700 }}>
                      ${data.order.totalPrice}
                    </Text>
                  </View>
                </View>
              </View>
              {/* Thông tin người nhận */}
              <View style={styles.itemContainer}>
                <Text
                  style={{ color: "#498553", fontSize: 15, fontWeight: 700 }}
                >
                  {t("RecipientInfo")}
                </Text>
                <View style={{ marginTop: 8, gap: 4 }}>
                  <View style={{ flexDirection: "row", gap: 5 }}>
                    <Text style={{ color: "#498553" }}>{data.order.name}</Text>
                    <Text style={{ color: "#498553" }}>-</Text>
                    <Text style={{ color: "#6F6A61" }}>{data.order.phone}</Text>
                  </View>
                  <Text style={{ color: "#498553" }}>{data.order.address}</Text>
                </View>
              </View>
              {/* ProductList */}
              <View style={styles.itemContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{ color: "#498553", fontWeight: 700, fontSize: 15 }}
                  >
                    {t("productList")}
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
              <FlatList
                horizontal={true}
                data={data.products}
                renderItem={({ item }) => (
                  <ProductItem
                    image={item.product.images[0].imageURL}
                    name={item.product.productName}
                    quantity={item.quantity}
                    price={item.quantity * item.product.price}
                  />
                )}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
              />
              {/* Deliverty & Payment */}
              <View style={styles.itemContainer}>
                <Text
                  style={{ color: "#498553", fontSize: 15, fontWeight: 700 }}
                >
                  {t("delivery")} & {t("payment")}
                </Text>
                <View style={{ marginTop: 4, gap: 30, flexDirection: "row" }}>
                  <View style={{ gap: 5 }}>
                    <Text style={{ color: "#498553" }}>{t("DeliveryMethod")}</Text>
                    <Text style={{ color: "#498553" }}>{t("PaymentMethod")}</Text>
                  </View>
                  <View style={{ gap: 5 }}>
                    <Text style={{ color: "#498553", fontWeight: 700 }}>
                      {data.order.deliveryMethod}
                    </Text>
                    <Text style={{ color: "#498553", fontWeight: 700 }}>
                      {data.order.payMethod}
                    </Text>
                  </View>
                </View>
              </View>

              {/* Summary */}
              <View style={styles.itemContainer}>
                <Text
                  style={{ color: "#498553", fontSize: 15, fontWeight: 700 }}
                >
                  {t("Summary")}
                </Text>
                <View style={{ marginTop: 4, flexDirection: "row", gap: 55 }}>
                  <View style={{ gap: 4 }}>
                    <Text style={{ color: "#498553" }}>{t("Subtotal")}</Text>
                    <Text style={{ color: "#498553" }}>{t("DeliveryFee")}</Text>
                    <Text style={{ color: "#498553" }}>{t("total")}</Text>
                  </View>
                  <View style={{ gap: 4 }}>
                    <Text style={{ color: "#498553", fontWeight: 700 }}>
                      ${data.order.totalPrice - data.order.shippingCost}
                    </Text>
                    <Text style={{ color: "#498553", fontWeight: 700 }}>
                      ${data.order.shippingCost}
                    </Text>
                    <Text style={{ color: "#E71818", fontWeight: 700 }}>
                      ${data.order.totalPrice}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default OrderDetail;
