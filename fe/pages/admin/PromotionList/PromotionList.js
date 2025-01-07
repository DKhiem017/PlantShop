import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  ActivityIndicator,
  FlatList,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { FontAwesome6 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import voucherAPI from "../../../../Api/VoucherApi";
import { useTranslation } from "react-i18next";

const couponImg = {
  gold: require("../../../../assets/images/gold-gift.jpg"),
  silver: require("../../../../assets/images/silver-gift.png"),
  diamond: require("../../../../assets/images/diamond-gift.png"),
  all: require("../../../../assets/images/bronze-gift.png"),
};

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
  searchBar: {
    backgroundColor: "#DCE1D2",
    height: 45,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

const PromotionList = ({ navigation }) => {
  const { t } = useTranslation();

  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      const fetchAPI = async () => {
        try {
          const response = await voucherAPI.getAllAdmin();
          console.log("success: ", response);
          setData(response);
          setLoading(false);
        } catch (error) {
          console.log("Error: ", error);
          setLoading(false);
        }
      };

      fetchAPI();

      return () => {
        setSearchValue("");
      };
    }, [])
  );

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
          alert(t("voucherNotFound"));
        });
    } else {
      return await voucherAPI.getAll().then((response) => {
        setData(response);
        setLoading(false);
      });
    }
  };

  const HandleAddNew = () => {
    navigation.navigate("NewPromotionAdmin");
  };

  const formatDate = (date) => {
    const inputDate = new Date(date);

    const year = inputDate.getUTCFullYear();
    const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
    const day = inputDate.getDate().toString().padStart(2, "0");

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };

  const HandleDetailVoucher = (id) => {
    navigation.navigate("PromotionDetailAdmin", {
      voucherID: id,
    });
  };

  const Item = ({ id, img, name, value, dateBegin, dateEnd, onPress }) => {
    return (
      <TouchableOpacity style={styles.itembackground} onPress={onPress}>
        {/* ảnh sp */}
        <View style={{ flexDirection: "row" }}>
          <View style={{ height: 70, width: 70 }}>
            <Image source={img} style={styles.backgroundImg}></Image>
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
              paddingVertical: 2,
            }}
          >
            <Text style={{ fontSize: 13, fontWeight: 700, color: "#498553" }}>
              {name}
            </Text>
            <Text style={{ fontSize: 11, color: "#6F6A61" }}>
              {t("voucherCode")}:{" "}
              <Text style={{ color: "#498553", fontWeight: "bold" }}>{id}</Text>
            </Text>
            <Text style={{ fontSize: 11, color: "#6F6A61" }}>
              {t("reduce")} <Text style={{ color: "red" }}>{value}%</Text>{" "}
              {t("forAllOrders")}
            </Text>
            <Text style={{ fontSize: 11, color: "#6F6A61" }}>
              {t("from")}{" "}
              <Text style={{ fontWeight: "bold" }}>
                {formatDate(dateBegin)}
              </Text>{" "}
              {t("to")}{" "}
              <Text style={{ fontWeight: "bold" }}>{formatDate(dateEnd)}</Text>
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

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
      <ScrollView showsVerticalScrollIndicator={false}>
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
            {t("promotionList")}
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
            <TextInput
              style={{
                color: "#498553",
                fontSize: 15,
                width: "100%",
                paddingLeft: 40,
              }}
              placeholder={t("search")}
              value={searchValue}
              onChangeText={(e) => setSearchValue(e)}
            ></TextInput>
            <Feather
              style={{ position: "absolute", marginLeft: 5 }}
              name="search"
              size={25}
              color="#498553"
              onPress={() => HandleSearch(searchValue)}
            />
          </View>
          <TouchableOpacity style={{ marginLeft: 15 }}>
            <FontAwesome6 name="filter" size={24} color="#498553" />
          </TouchableOpacity>
        </View>
        {/* Content */}
        <View style={{ marginTop: 25, gap: 10 }}>
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
                  img={
                    item.voucherType.voucherTypeName === "Gold"
                      ? couponImg.gold
                      : item.voucherType.voucherTypeName === "Silver"
                      ? couponImg.silver
                      : item.voucherType.voucherTypeName === "Diamond"
                      ? couponImg.diamond
                      : couponImg.all
                  }
                  value={item.value}
                  dateBegin={item.dateBegin}
                  dateEnd={item.dateEnd}
                  onPress={() => HandleDetailVoucher(item.id)}
                />
              )}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
          )}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 10,
          right: 15,
          flexDirection: "row",
          paddingHorizontal: 12,
          paddingVertical: 12,
          alignItems: "center",
          backgroundColor: "#498553",
          borderRadius: 10,
        }}
        onPress={HandleAddNew}
      >
        <Ionicons name="add" size={18} color="white" />
        <Text
          style={{
            fontWeight: "700",
            fontSize: 16,
            color: "white",
            marginLeft: 3,
          }}
        >
          {t("new")}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PromotionList;
