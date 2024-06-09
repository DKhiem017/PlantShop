import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Pagetitle from "../../../components/pagetitle";
import Searchbar from "../../../components/search";
import { useEffect, useState } from "react";
import voucherAPI from "../../../../Api/VoucherApi";
import { TouchableOpacity } from "react-native-gesture-handler";

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
    marginBottom: 10,
  },
  backgroundImg: {
    position: "absolute",
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  applyButtonContainer: {},
  applyBut: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: "#498553",
    borderRadius: 2,
  },
  dashLine: {
    borderStyle: "dashed",
    borderColor: "#D9D9D9",
    borderWidth: 1,
    marginLeft: 5,
  },
  voucherInfo: {
    justifyContent: "space-between",
    marginLeft: 10,
    paddingVertical: 2,
  },
});

const VoucherWallet = ({ navigation, route }) => {
  const { ProductList, subTotal } = route.params;
  //apply Voucher
  const handleApplyVoucher = (id, name, value) => {
    const reduceCost = subTotal * (value / 100);
    console.log(reduceCost);
    navigation.navigate("Checkout", {
      voucherID: id,
      voucherName: name,
      voucherValue: value,
      data: ProductList,
      subTotal: subTotal,
    });
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await voucherAPI.getAll("CS0001");
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

  const HandleSearch = async (value) => {
    setLoading(true);
    if (value != "") {
      return await voucherAPI
        .searchByName(value)
        .then((response) => {
          setData(response);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          alert("Not found voucher with provided keyword");
        });
    } else {
      return await voucherAPI.getAll("CS0001").then((response) => {
        setData(response);
        setLoading(false);
      });
    }
  };

  const formatDate = (date) => {
    const inputDate = new Date(date);

    const year = inputDate.getUTCFullYear();
    const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
    const day = inputDate.getDate().toString().padStart(2, "0");

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };

  const Item = ({ id, name, value, dateBegin, dateEnd, onPress }) => {
    return (
      <View style={styles.itembackground}>
        {/* ảnh sp */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ height: 70, width: 70 }}>
              <Image source={couponImg} style={styles.backgroundImg}></Image>
            </View>
            <View style={styles.dashLine}></View>
            <View style={styles.voucherInfo}>
              <Text style={{ fontSize: 13, fontWeight: 700, color: "#498553" }}>
                {name}
              </Text>
              <Text style={{ fontSize: 11, color: "#6F6A61" }}>
                Voucher Code:{" "}
                <Text style={{ color: "#498553", fontWeight: "bold" }}>
                  {id}
                </Text>
              </Text>
              <Text style={{ fontSize: 11, color: "#6F6A61" }}>
                Reduce <Text style={{ color: "red" }}>{value}%</Text> for all
                orders
              </Text>
              <Text style={{ fontSize: 11, color: "#6F6A61" }}>
                From{" "}
                <Text style={{ fontWeight: "bold" }}>
                  {formatDate(dateBegin)}
                </Text>{" "}
                to{" "}
                <Text style={{ fontWeight: "bold" }}>
                  {formatDate(dateEnd)}
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.applyButtonContainer}>
            <TouchableOpacity style={styles.applyBut} onPress={onPress}>
              <Text style={{ fontSize: 12, color: "#fff" }}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#f5f5f5", paddingHorizontal: 15 }}
    >
      <StatusBar></StatusBar>
      <View>
        <Pagetitle title={"Voucher Wallet"} navigation={navigation}></Pagetitle>
        <Searchbar
          placeholder="Search for voucher ... "
          onPress={() => HandleSearch()}
        ></Searchbar>
        <View style={{ marginTop: 15, gap: 10 }}>
          {/* item */}
          {loading ? (
            <ActivityIndicator
              size="large"
              color="#498553"
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          ) : (
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <Item
                  id={item.id}
                  name={item.name}
                  value={item.value}
                  dateBegin={item.dateBegin}
                  dateEnd={item.dateEnd}
                  onPress={() =>
                    handleApplyVoucher(item.id, item.name, item.value)
                  }
                />
              )}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VoucherWallet;
