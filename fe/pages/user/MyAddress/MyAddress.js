import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Pagetitle from "../../../components/pagetitle";
import { useCallback, useState } from "react";
import addressAPI from "../../../../Api/AddressApi";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";

const MyAddress = ({ navigation, route }) => {
  const { t } = useTranslation();

  const { ProductList } = route.params;
  console.log(ProductList);
  //dữ liệu
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  //load danh sách
  useFocusEffect(
    useCallback(() => {
      const fetchAPI = async () => {
        try {
          const user = await AsyncStorage.getItem("CustomerID");
          const response = await addressAPI.getAll(user);
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
        // Cleanup function (optional)
      };
    }, []) // Dependency array để đảm bảo callback chỉ được gọi khi component được mount lần đầu tiên
  );

  //navigation

  const HandleDetailAddress = (addressID) => {
    navigation.navigate("DetailAddress", {
      id: addressID,
    });
  };

  const handleAddAddress = () => {
    navigation.navigate("AddAddressScreen", { ProductList: ProductList });
  };

  //hàm set default
  const handleSetDefault = async (id) => {
    try {
      const user = await AsyncStorage.getItem("CustomerID");
      const setdefault = await addressAPI.setDefault(user, id);
      setData((prevData) =>
        prevData.map((item) => ({
          ...item,
          isDefault: item.id === id,
        }))
      );
      console.log("Thành công");
    } catch (error) {
      console.log(error);
    }
  };

  //xoá item
  const handleDelete = async (id) => {
    try {
      const deleteitem = await addressAPI.deleteAddress(id);
      console.log("Xoá thành công");
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.log("Có lỗi xảy ra khi xoá", error);
    }
  };

  //item UI
  const Item = ({
    name,
    phone,
    address,
    isDefault,
    id,
    onDelete,
    onSetDefault,
  }) => {
    if (isDefault) {
      return (
        <View>
          <View style={styles.itembackground}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              {/* Text Container */}
              <View style={{ gap: 5 }}>
                <View style={{ flexDirection: "row", gap: 3 }}>
                  <Text style={styles.text}>{name}</Text>
                  <Text style={styles.text}>|</Text>
                  <Text style={styles.text}>{phone}</Text>
                </View>
                <View style={{ flexDirection: "row", gap: 3 }}>
                  <Text style={styles.text}>{address}</Text>
                </View>
                <View style={styles.defaultContainer}>
                  <Text style={{ color: "#EAC100", fontSize: 11 }}>
                    {t("Default")}
                  </Text>
                </View>
              </View>
              {/* edit button */}
              <TouchableOpacity onPress={() => HandleDetailAddress(id)}>
                <Text
                  style={{ fontSize: 13, fontWeight: 500, color: "#627FE7" }}
                >
                  {t("edit")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.itembackground}>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {/* Text Container */}
              <View style={{ gap: 5 }}>
                <View style={{ flexDirection: "row", gap: 3 }}>
                  <Text style={styles.text}>{name}</Text>
                  <Text style={styles.text}>|</Text>
                  <Text style={styles.text}>{phone}</Text>
                </View>
                <View style={{ flexDirection: "row", gap: 3 }}>
                  <Text style={styles.text}>{address}</Text>
                </View>
              </View>
              {/* edit button */}
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => HandleDetailAddress(id)}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#627FE7",
                      marginRight: 20,
                    }}
                  >
                    {t("edit")}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDelete(id)}>
                  <Text
                    style={{ fontSize: 13, fontWeight: 500, color: "#cd5c5c" }}
                  >
                    {t("Delete")}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ width: "100%", alignItems: "flex-end" }}>
              <TouchableOpacity
                style={styles.setDefaultButton}
                onPress={() => onSetDefault(id)}
              >
                <Text style={{ color: "#fff", fontSize: 12, fontWeight: 500 }}>
                  {t("SetAsDefault")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar></StatusBar>
        <Pagetitle title={t("MyAddress")} navigation={navigation}></Pagetitle>
        {/* add address */}
        <View style={{ marginTop: 15, width: "100%", alignItems: "flex-end" }}>
          <TouchableOpacity
            style={styles.addAddressButton}
            onPress={handleAddAddress}
          >
            <Text style={{ color: "#fff", fontSize: 12, fontWeight: 500 }}>
              {t("add")} {t("newAddress")}
            </Text>
          </TouchableOpacity>
        </View>
        {/* item */}
        <View style={{ marginTop: 20, gap: 15 }}>
          {/* item default */}
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Item
                id={item.id}
                name={item.receiverName}
                phone={item.phone}
                address={item.address}
                isDefault={item.isDefault}
                onDelete={handleDelete}
                onSetDefault={handleSetDefault}
              />
            )}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyAddress;

const styles = StyleSheet.create({
  itembackground: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "100%",
    padding: 9,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#498553",
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    color: "#498553",
  },
  defaultContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EAC100",
    width: 85,
    height: 20,
  },
  setDefaultButton: {
    paddingHorizontal:10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: "#498553",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingLeft: 15,
    paddingRight: 15,
  },
  addAddressButton: {
    padding: 5,
    width: 110,
    backgroundColor: "#498553",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
