import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
  FlatList,
  Alert,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Rating } from "react-native-ratings";
import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import productApi from "../../../../Api/ProductApi";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

const styles = StyleSheet.create({
  imgContainer: {
    height: 65,
    width: 65,
    borderRadius: 5,
    backgroundColor: "#B7E1A1",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 5, // Adjust as needed
  },
  greenbackgroundProduct: {
    width: 105,
    height: 81,
    backgroundColor: "#B7E1A1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    right: 0,
    position: "absolute",
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  productItem: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginBottom: 10,
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
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20,
    paddingBottom: 65,
  },
  headerTextStyle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#498553",
  },
  searchBarContainer: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  searchText: {
    color: "#498553",
    fontSize: 15,
    width: "100%",
    paddingLeft: 40,
  },
});

const ProductList = ({ navigation }) => {
  //get data
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);
  const [products, setProduct] = useState([]);

  const HandleAddNew = () => {
    navigation.navigate("AddProductAdmin");
  };
  // xoá 1 sản phẩm
  const handleDeleteItem = async (id) => {
    try {
      const deleteItem = await productApi.deleteItem(id);
      setProduct((prevProducts) =>
        prevProducts.filter((product) => product.productID !== id)
      );
      Alert.alert(t("successfullyDeleteProduct"));
    } catch (error) {
      Alert.alert(t("cannotDeleteThisProduct"));
    }
  };

  useFocusEffect(
    useCallback(() => {
      const fetchApi = async () => {
        try {
          const response = await productApi.getAll();
          console.log("success", response);
          setProduct(response);
          setLoading(false);
        } catch (error) {
          console.log("Error", error);
        }
      };
      fetchApi();
    }, [])
  );

  //navigation
  const handleNavigateDetailProduct = (id) => {
    navigation.navigate("DetailProductAdmin", { id: id });
  };

  const Item = ({ name, rating, price, id, img, onDelete }) => (
    <View style={styles.productItem}>
      <View style={styles.imgContainer}>
        <Image
          source={{ uri: `${img}` }}
          style={styles.backgroundImage}
        ></Image>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          marginLeft: 10,
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: 500 }}>{name}</Text>
        <Text style={{ fontSize: 14, fontWeight: 500, color: "#498553" }}>
          $ {price}
        </Text>
        <Rating
          style={{ alignItems: "flex-start" }}
          type="custom"
          ratingBackgroundColor="#c8c7c8"
          ratingCount={5}
          imageSize={13}
          startingValue={rating}
          readonly
        />
      </View>
      <View style={styles.greenbackgroundProduct}>
        <View
          style={{
            height: "100%",
            width: 100,
            position: "absolute",
            left: -50,
            backgroundColor: "#B7E1A1",
            borderRadius: 50,
          }}
        ></View>
        <TouchableOpacity onPress={() => handleNavigateDetailProduct(id)}>
          <MaterialIcons name="edit-square" size={23} color="#498553" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginLeft: 10, marginTop: -2 }}
          onPress={onDelete}
        >
          <FontAwesome5 name="trash" size={21} color="#498553" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    // View tổng quát\
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <StatusBar />
        {/* Tiêu đề với search */}
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text style={styles.headerTextStyle}>{t("productList")}</Text>
        </View>
        {/* search container */}
        <View style={styles.searchBarContainer}>
          {/* Searchbar */}
          <View style={styles.searchBar}>
            <Feather
              style={{ position: "absolute", marginLeft: 5 }}
              name="search"
              size={25}
              color="#498553"
            />
            <TextInput
              style={styles.searchText}
              placeholder={t("search")}
            ></TextInput>
          </View>
        </View>
        {/* Content */}
        {/* list sp */}
        <View style={{ flex: 1, marginTop: 10 }}>
          {loading ? (
            <ActivityIndicator size="small" color="#00ff00" />
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={products}
              renderItem={({ item }) => (
                <Item
                  name={item.productName}
                  price={item.price}
                  rating={item.reviewPoint}
                  id={item.productID}
                  img={item.images[0].imageURL}
                  onDelete={() => handleDeleteItem(item.productID)}
                />
              )}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            ></FlatList>
          )}
        </View>
      </View>
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 10,
          right: 20,
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

export default ProductList;
