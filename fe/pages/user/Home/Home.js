import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Searchbar from "../../../components/search";
import Carousel from "../../../components/carousel";
import { useCallback, useEffect, useState } from "react";
import productApi from "../../../../Api/ProductApi";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const avt = require("../../../../assets/images/Monstera.jpg");
const product_background = require("../../../../assets/images/Background_Plants.png");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f3f3",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 60,
  },
  avt: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 50,
  },
  avt_container: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  textContainer: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    bottom: 15,
    paddingLeft: 10,
  },
  productRating: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 10,
    bottom: 5,
  },
  addtoWishListButton: {
    height: 23,
    width: 23,
    backgroundColor: "#B7E1A1",
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 5,
    top: 5,
  },
  tagsContainer: {
    height: 35,
    width: "100%",
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
  },
  allTagBut: {
    height: 33,
    width: 55,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderWidth: 0.5,
    borderColor: "#DCE1D2",
  },
  tagsText: {
    fontWeight: 600,
    fontSize: 15,
  },
  bestSellerTag: {
    height: 33,
    width: 115,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderWidth: 0.5,
    borderColor: "#DCE1D2",
  },
  inOutTag: {
    height: 33,
    width: 85,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderWidth: 0.5,
    borderColor: "#DCE1D2",
  },
});

const Home = ({ navigation }) => {
  const DetailProductNavigation = (productID) => {
    navigation.navigate("Product Info", {
      id: productID,
    });
  };

  //get product data
  const [loading, setLoading] = useState(true);
  const [products, setProduct] = useState([]);
  const [recommendProducts, setRecommendProduct] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [param, setParam] = useState("");

  useFocusEffect(
    useCallback(() => {
      const fetchApi = async () => {
        try {
          const user = await AsyncStorage.getItem("CustomerID");
          const response = await productApi.getAll();
          const recommend = await productApi.getRecommend(user);
          console.log("recommend", recommend);
          setProduct(response);
          setRecommendProduct(recommend);
          setLoading(false);
        } catch (error) {
          console.log("Error", error);
        }
      };
      fetchApi();

      return () => {};
    }, [])
  );

  const HandleBestSeller = async () => {
    setLoading(true);
    return await productApi
      .getBestSeller()
      .then((res) => {
        setProduct(res);
        setLoading(false);
      })
      .catch((error) => {
        Alert.alert("Cannot load data");
      });
  };

  const HandleGetAll = async () => {
    setLoading(true);
    return await productApi
      .getAll()
      .then((res) => {
        setProduct(res);
        setLoading(false);
      })
      .catch((error) => {
        Alert.alert("Cannot load data");
      });
  };

  const HandleGetIndoor = async (category) => {
    setLoading(true);
    return await productApi
      .getCategory(category)
      .then((res) => {
        setProduct(res);
        setLoading(false);
      })
      .catch((error) => {
        Alert.alert("Cannot load data");
      });
  };

  const HandleSearchProduct = async () => {
    return await productApi
      .searchByName(param)
      .then((res) => {
        setSearchResult(res);
        console.log("Search: ", res);
        setShowResult(true);
      })
      .catch(() => {
        Alert.alert("Please enter keyword to search");
      });
  };

  const items = [
    { image: require("../../../../assets/images/Voucher1.png") },
    { image: require("../../../../assets/images/Voucher2.jpg") },
    { image: require("../../../../assets/images/Voucher3.jpg") },
  ];

  const handlePress = (index) => {
    setActiveIndex(index);
  };

  const Item = ({ name, rating, price, id, img }) => (
    <TouchableOpacity
      style={{
        width: 130,
        height: 170,
        marginRight: 15,
      }}
      onPress={() => DetailProductNavigation(id)}
    >
      {/* Ảnh nền */}
      <Image source={product_background} style={styles.backgroundImage}></Image>
      <View
        style={{
          height: 127,
          position: "absolute",
          top: 0,
          width: "100%",
        }}
      >
        <TouchableOpacity style={styles.addtoWishListButton}>
          <AntDesign name="hearto" size={12} color="#498553" />
        </TouchableOpacity>
        <Image
          source={{ uri: `${img}` }}
          style={styles.backgroundImage}
        ></Image>
      </View>
      {/* Text Container */}
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 13, fontWeight: 600, color: "#498553" }}>
          {name}
        </Text>
        <Text style={{ fontSize: 12, fontWeight: 600, color: "#000" }}>
          $ {price}
        </Text>
        <View style={styles.productRating}>
          <FontAwesome marginRight={3} name="star" size={12} color="#498553" />
          <Text style={{ fontSize: 12, color: "#498553" }}>{rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#f3f3f3",
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        horizontal={false}
      >
        <StatusBar></StatusBar>
        <View style={styles.header}>
          <TouchableOpacity style={styles.avt_container}>
            <Image source={avt} style={styles.avt} />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: 10,
            }}
          >
            <Text style={{ color: "#6F6A61", opacity: 80, fontSize: 12 }}>
              Welcome to our Store
            </Text>
            <Text
              style={{ color: "#498553", fontWeight: "bold", fontSize: 15 }}
            >
              Hoàng Phúc
            </Text>
          </View>
        </View>
        {/* Searchbar */}
        <Searchbar
          placeholder="Search for plants..."
          searchCharacter={param}
          onChangeText={(e) => setParam(e)}
          onPress={HandleSearchProduct}
        ></Searchbar>
        {showResult ? (
          <View
            style={{
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontStyle: "italic",
                color: "#6F6A61",
                fontWeight: "700",
              }}
            >
              Found {searchResult.length !== null ? searchResult.length : 0}{" "}
              results
            </Text>
            <FlatList
              horizontal={true}
              style={{ paddingVertical: 10 }}
              data={searchResult}
              renderItem={({ item }) => (
                <Item
                  name={item.productName}
                  price={item.price}
                  rating={item.reviewPoint}
                  id={item.productID}
                  img={item.images[0].imageURL}
                />
              )}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            ></FlatList>
          </View>
        ) : null}
        {/* carousel */}
        <Carousel items={items}></Carousel>
        <View style={styles.tagsContainer}>
          {/* Lối tắt */}
          <TouchableOpacity
            onPress={() => {
              handlePress(null);
              HandleGetAll();
            }}
            style={[
              styles.allTagBut,
              { backgroundColor: activeIndex === null ? "#498553" : "#fff" },
            ]}
          >
            <Text
              style={[
                styles.tagsText,
                { color: activeIndex === null ? "#fff" : "#6F6A61" },
              ]}
            >
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handlePress(0);
              HandleBestSeller();
            }}
            style={[
              styles.bestSellerTag,
              { backgroundColor: activeIndex === 0 ? "#498553" : "#fff" },
            ]}
          >
            <Text
              style={[
                styles.tagsText,
                { color: activeIndex === 0 ? "#fff" : "#6F6A61" },
              ]}
            >
              Best-seller
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handlePress(1);
              HandleGetIndoor("Indoor");
            }}
            style={[
              styles.inOutTag,
              { backgroundColor: activeIndex === 1 ? "#498553" : "#fff" },
            ]}
          >
            <Text
              style={[
                styles.tagsText,
                { color: activeIndex === 1 ? "#fff" : "#6F6A61" },
              ]}
            >
              Indoor
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handlePress(2);
              HandleGetIndoor("Outdoor");
            }}
            style={[
              styles.inOutTag,
              { backgroundColor: activeIndex === 2 ? "#498553" : "#fff" },
            ]}
          >
            <Text
              style={[
                styles.tagsText,
                { color: activeIndex === 2 ? "#fff" : "#6F6A61" },
              ]}
            >
              Outdoor
            </Text>
          </TouchableOpacity>
        </View>
        {/* danh sách sản phẩm */}
        <View>
          {loading ? (
            <ActivityIndicator size="small" color="#00ff00" />
          ) : (
            <FlatList
              horizontal={true}
              style={{ paddingVertical: 10 }}
              data={products}
              renderItem={({ item }) => (
                <Item
                  name={item.productName}
                  price={item.price}
                  rating={item.reviewPoint}
                  id={item.productID}
                  img={item.images[0].imageURL}
                />
              )}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            ></FlatList>
          )}
        </View>
        {/* Recommend */}
        <Text style={{ fontSize: 16, color: "#498553", fontWeight: 700 }}>
          Recommend for you
        </Text>
        <View>
          {loading ? (
            <ActivityIndicator size="small" color="#00ff00" />
          ) : (
            <FlatList
              horizontal={true}
              style={{ paddingVertical: 10 }}
              data={recommendProducts}
              renderItem={({ item }) => (
                <Item
                  name={item.product.productName}
                  price={item.product.price}
                  rating={item.product.reviewPoint}
                  id={item.product.productID}
                  img={item.product.images[0].imageURL}
                />
              )}
              keyExtractor={(item) => item.product.productID}
              showsHorizontalScrollIndicator={false}
            ></FlatList>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
