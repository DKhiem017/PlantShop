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
  Alert,
  Modal,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { FontAwesome6 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useEffect, useState } from "react";
import orderAPI from "../../../../Api/OrderApi";
import { useFocusEffect } from "@react-navigation/native";
import ButtonMultiselect, { ButtonLayout } from "react-native-button-multiselect";

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
          {StatusColor(status)}
        </Text>
      </View>
    </TouchableOpacity>
  )
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

const formatDate = (date) => {
  const inputDate = new Date(date);

  const year = inputDate.getUTCFullYear();
  const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
  const day = inputDate.getDate().toString().padStart(2, "0");

  const time =
    inputDate.getHours().toString().padStart(2, "0") +
    ":" +
    inputDate.getMinutes().toString().padStart(2, "0");

  const formattedDate = `${day}/${month}/${year}  ${time}  `;
  return formattedDate;
}

const BillList = ({ navigation }) => {
  const [order, setOrder] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [statusForm, setStatusForm] = useState(false);
  const [loading, setLoading] = useState(true);

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

  useFocusEffect(
    useCallback(() => {
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
      return () => {
        //Clean up function
        setSearchParam("");
      };
    }, [])
  )

  const HandleDetail = (id) => {
    navigation.navigate("DetailOrderAdmin", {
      orderID: id
    })
  }

  const HandleSearchOrder = async (param) => {
    setLoading(true);
    return await orderAPI.searchByID(param)
      .then((res) => {
        setOrder(res);
        setLoading(false);
      })
      .catch(() => {
        Alert.alert("Please enter keyword");
        setLoading(false);
      })
  }

  const HandleSubmit = async (value) => {
    setLoading(true);
    setStatusForm(false);
    setSelectedButtons([]);
    return await orderAPI.filterOrder(value)
      .then((res) => {
        setOrder(res);
        setLoading(false);
      })
      .catch(() => {
        Alert.alert("Cannot find order");
        setLoading(false);
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
        <ScrollView showsVerticalScrollIndicator={false}
          style={{ marginBottom: 10 }}
        >
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
              <TextInput
                style={{
                  color: "#498553",
                  fontSize: 15,
                  height: 45,
                  width: "90%",
                  paddingLeft: 40,
                }}
                placeholder="Search"
                value={searchParam}
                onChangeText={(e) => setSearchParam(e)}
              ></TextInput>
              <Feather
                style={{ position: "absolute", marginLeft: 5 }}
                name="search"
                size={25}
                color="#498553"
                onPress={() => HandleSearchOrder(searchParam)}
              />
            </View>
            <TouchableOpacity onPress={() => setStatusForm(true)}>
              <FontAwesome6 name="filter" size={24} color="#498553" />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 25, gap: 10, marginBottom: 10 }}>
            {/* item */}
            {
              loading ? <ActivityIndicator size="large"
                color="#498553"
                style={{ flex: 1, alignItems: "center", justifyContent: "center" }} />
                :
                order.map((item, index) => (
                  <Item
                    orderID={item.orderID}
                    dayOrder={item.timeOrder}
                    totalPrice={item.totalPrice}
                    status={item.status}
                    onPress={() => HandleDetail(item.orderID)}
                  />
                ))
            }
          </View>
        </ScrollView>
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

export default BillList;
