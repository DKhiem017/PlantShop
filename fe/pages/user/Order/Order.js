import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  FlatList,
  Modal,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import Pagetitle from "../../../components/pagetitle";
import { useState, useEffect } from "react";
import orderAPI from "../../../../Api/OrderApi";
import ButtonMultiselect, { ButtonLayout } from "react-native-button-multiselect";

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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchCharacter, setSearchCharacter] = useState("");
  const [statusForm, setStatusForm] = useState(false);

  const buttons = [
    { label: 'All', value: 0 },
    { label: 'Pending', value: 1 },
    { label: 'Packaging', value: 2 },
    { label: 'Delivering', value: 3 },
    { label: 'Completed', value: 4 },
  ];

  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonSelected = (selectedValues) => {
    setSelectedButtons(selectedValues);
  };

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await orderAPI.getAll('CS0001');
        console.log("success: ", response);
        setData(response);
        setLoading(false);
      }
      catch (error) {
        console.log("Error: ", error);
        setLoading(false);
      }
    }

    fetchAPI()
  }, [])

  const HandleDetailProduct = (productID) => {
    navigation.navigate("OrderDetail", {
      id: productID
    })
  }

  const Item = ({ nameProduct, quantity, orderID, totalPrice, status, image, date }) => {
    return (
      <View style={{ width: "100%", marginBottom: 15 }}>
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
              <Image source={{ uri: `${image}` }} style={styles.backgroundImage}></Image>
            </View>
            {/* thông tin sản phẩm */}
            <View style={{ justifyContent: "space-between", marginLeft: 10 }}>
              <Text style={{ color: "#498553", fontWeight: 500 }}>
                {nameProduct}
              </Text>
              <Text style={{ color: "#6F6A61", fontSize: 13 }}>{quantity} items</Text>
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
              onPress={() => HandleDetailProduct(orderID)}
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
                {orderID}
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
                ${totalPrice}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.greyText}>Time of Order</Text>
              <Text style={{ fontSize: 13, fontWeight: 700, color: "#000" }}>
                {formatDate(date)}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.greyText}>Status</Text>
              {StatusColor(status)}
            </View>
          </View>
        </View>
      </View>
    )
  }

  const HandleSearch = async (value) => {
    setLoading(true);
    if (value != "") {
      return await orderAPI.searchByID(value)
        .then((response) => {
          setData(response);
          setLoading(false)
        })
        .catch((error) => {
          console.log(error);
          alert("Not found order with provided keyword")
        })
    }
    else {
      return await orderAPI.getAll('CS0001')
        .then((response) => {
          setData(response);
          setLoading(false)
        })
    }
  }

  const formatDate = (date) => {
    const inputDate = new Date(date);

    const year = inputDate.getUTCFullYear();
    const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
    const day = inputDate.getDate().toString().padStart(2, "0");

    const time = inputDate.getHours().toString().padStart(2, "0")
      + ':'
      + inputDate.getMinutes().toString().padStart(2, "0");

    const formattedDate = `${day}/${month}/${year}  ${time}`;
    return formattedDate;
  }

  const StatusColor = (status) => {
    if (status === "Pending") {
      return (
        <Text
          style={{ fontSize: 13, fontWeight: 700, color: "#F4CE14" }}
        >
          {status}
        </Text>
      )
    }
    else if (status === "Packaging") {
      return (
        <Text
          style={{ fontSize: 13, fontWeight: 700, color: "#2A2A86" }}
        >
          {status}
        </Text>
      )
    }
    else if (status === "Delivering") {
      return (
        <Text
          style={{ fontSize: 13, fontWeight: 700, color: "#AAC9FF" }}
        >
          {status}
        </Text>
      )
    }
    else if (status === "Completed") {
      return (
        <Text
          style={{ fontSize: 13, fontWeight: 700, color: "#498553" }}
        >
          {status}
        </Text>
      )
    }
  }

  const HandleSubmit = async (value) => {
    setLoading(true);
    setStatusForm(false);
    setSelectedButtons([]);
    return await orderAPI.filterOrderByCustomer("CS0001", value)
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch(() => {
        Alert.alert("Cannot find order");
        setLoading(false);
      })
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#f5f5f5",
        display: "flex",
        paddingHorizontal: 15,
        paddingBottom: 80,
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
              placeholder="Search for orders..."
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
              value={searchCharacter}
              onChangeText={(e) => setSearchCharacter(e)}
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
              onPress={() => HandleSearch(searchCharacter)}
            />
          </View>
          <TouchableOpacity style={styles.filterContainer} onPress={() => setStatusForm(true)}>
            <Image source={adjust} style={styles.filterbackground}></Image>
          </TouchableOpacity>
        </View>
        {/* Order Item  */}
        {
          loading ? <ActivityIndicator size="large"
            color="#498553"
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }} />
            : <FlatList style={{ marginTop: 15 }}
              data={data}
              renderItem={({ item }) => (
                <Item nameProduct={item.firstProduct.productName}
                  quantity={item.totalQuantity}
                  image={item.firstProduct.images[0].imageURL}
                  orderID={item.orderID}
                  date={item.timeOrder}
                  totalPrice={item.totalPrice}
                  status={item.status}
                />
              )}
              keyExtractor={(item) => item.orderID}
              showsVerticalScrollIndicator={false}
            />
        }
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={statusForm}
        onRequestClose={() => setStatusForm(!statusForm)}
      >
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
          <View style={{
            width: "90%",
            backgroundColor: 'white',
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: "center",
          }}>
            <Text style={{
              fontWeight: 700,
              fontSize: 16
            }}>
              Choose status to filter orders
            </Text>
            <ButtonMultiselect
              containerStyle={{
                marginTop: 20,
                height: "40%",
                paddingHorizontal: 30,
              }}
              buttons={buttons}
              layout={ButtonLayout.GRID}
              onButtonSelected={handleButtonSelected}
              selectedButtons={selectedButtons}
              selectedColors={{
                textColor: "white",
                backgroundColor: "#498553",
                borderColor: "#498553",
              }}
            />
            <TouchableOpacity
              style={{
                backgroundColor: "#498553",
                marginTop: 10,
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 10
              }}
              onPress={() => HandleSubmit(selectedButtons)}
            >
              <Text style={{ fontSize: 15, fontWeight: 700, color: "white" }}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Order;
