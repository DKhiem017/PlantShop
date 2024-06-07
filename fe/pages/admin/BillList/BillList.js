import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { FontAwesome6 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import orderAPI from "../../../../Api/OrderApi";

const couponImg = require("../../../../assets/images/Bill.png");

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
    marginBottom: 10
  },
  backgroundImg: {
    position: "absolute",
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  searchBar: {
    backgroundColor: "#DCE1D2",
    height: 45,
    width: "100%",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

const Item = ({ orderID, dayOrder, totalPrice, status, onPress }) => {
  return (
    <TouchableOpacity style={styles.itembackground} onPress={onPress}>
      {/* ảnh bill */}
      <View
        style={{ flexDirection: "row", justifyContent: "space-between" }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ height: 70, width: 70 }}>
            <Image
              source={couponImg}
              style={styles.backgroundImg}
            ></Image>
          </View>
          <View
            style={{
              justifyContent: "space-between",
              marginLeft: 10,
              paddingVertical: 5,
            }}
          >
            <Text
              style={{ fontSize: 13, fontWeight: 700, color: "#000" }}
            >
              {orderID}
            </Text>
            <Text
              style={{
                fontSize: 11,
                color: "#6F6A61",
                fontStyle: "italic",
              }}
            >
              {formatDate(dayOrder)}
            </Text>
            <Text
              style={{ fontSize: 13, color: "#498553", fontWeight: 700 }}
            >
              Total: ${totalPrice}
            </Text>
          </View>
        </View>
        <Text
          style={{ marginRight: 4, fontWeight: 700, color: "#F4CE14" }}
        >
          {status}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const formatDate = (date) => {
  const inputDate = new Date(date);

  const year = inputDate.getUTCFullYear();
  const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
  const day = inputDate.getDate().toString().padStart(2, "0");

  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
}

const BillList = ({ navigation }) => {
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await orderAPI.getOrderByAdmin();
        setOrder(response);
        setLoading(false);
      }
      catch (error) {
        console.log("Error: ", error);
      }
    }

    fetchAPI();
  }, [])

  const HandleDetail = (id) => {
    navigation.navigate("DetailOrderAdmin", {
      orderID: id
    })
  }

  return (
    // View tổng quát
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
            Order List
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Searchbar */}
          <View style={styles.searchBar}>
            <Feather
              style={{ position: "absolute", marginLeft: 5 }}
              name="search"
              size={25}
              color="#498553"
            />
            <TextInput
              style={{
                color: "#498553",
                fontSize: 15,
                width: "100%",
                paddingLeft: 40,
              }}
              placeholder="Search"
            ></TextInput>
          </View>
          <TouchableOpacity style={{ marginLeft: 15 }}>
            <FontAwesome6 name="filter" size={24} color="#498553" />
          </TouchableOpacity>
        </View>
        {/* Content */}
        <View style={{ marginTop: 25, gap: 10 }}>
          {/* item */}
          {
            loading ? <ActivityIndicator size="large"
              color="#498553"
              style={{ flex: 1, alignItems: "center", justifyContent: "center" }} />
              : <FlatList
                data={order}
                renderItem={({ item }) => (
                  <Item
                    orderID={item.orderID}
                    dayOrder={item.timeOrder}
                    totalPrice={item.totalPrice}
                    status={item.status}
                    onPress={() => HandleDetail(item.orderID)}
                  />
                )}
                keyExtractor={(item) => item.orderID}
                showsHorizontalScrollIndicator={false}
              />
          }
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BillList;
