import { StatusBar } from "expo-status-bar";
import {
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
import { useState } from "react";

const avt = require("../../../../assets/images/Monstera.jpg");
const plant_img = require("../../../../assets/images/Monstera_tran.png");
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
    backgroundColor: "#fff",
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
  const DetailProductNavigation = () => {
    navigation.navigate("Product Info");
  };

  const items = [
    { image: require("../../../../assets/images/Voucher1.png") },
    { image: require("../../../../assets/images/Voucher2.jpg") },
    { image: require("../../../../assets/images/Voucher3.jpg") },
  ];

  const products = [
    {
      id: "01",
      name: "Monstera",
      rating: "4.5",
      price: "$30.55",
    },
    {
      id: "02",
      name: "Monstera",
      rating: "4.5",
      price: "$30.55",
    },
    {
      id: "02",
      name: "Monstera",
      rating: "4.5",
      price: "$30.55",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handlePress = (index) => {
    setActiveIndex(index);
  };

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
        <Searchbar></Searchbar>
        {/* carousel */}
        <Carousel items={items}></Carousel>
        <View style={styles.tagsContainer}>
          {/* Lối tắt */}
          <TouchableOpacity
            onPress={() => handlePress(null)}
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
            onPress={() => handlePress(0)}
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
            onPress={() => handlePress(1)}
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
            onPress={() => handlePress(2)}
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
          <ScrollView
            horizontal
            style={{ paddingVertical: 10 }}
            showsHorizontalScrollIndicator={false}
          >
            {/* item sản phẩm */}
            {products.map((product, index) => (
              <TouchableOpacity
                style={{
                  width: 130,
                  height: 170,
                  marginRight: 15,
                }}
                onPress={DetailProductNavigation}
              >
                {/* Ảnh nền */}
                <Image
                  source={product_background}
                  style={styles.backgroundImage}
                ></Image>
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
                    source={plant_img}
                    style={styles.backgroundImage}
                  ></Image>
                </View>
                {/* Text Container */}
                <View style={styles.textContainer}>
                  <Text
                    style={{ fontSize: 13, fontWeight: 600, color: "#498553" }}
                  >
                    {product.name}
                  </Text>
                  <Text
                    style={{ fontSize: 12, fontWeight: 600, color: "#000" }}
                  >
                    {product.price}
                  </Text>
                  <View style={styles.productRating}>
                    <FontAwesome
                      marginRight={3}
                      name="star"
                      size={12}
                      color="#498553"
                    />
                    <Text style={{ fontSize: 12, color: "#498553" }}>
                      {product.rating}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Recommend */}
        <Text style={{ fontSize: 15, color: "#498553", fontWeight: 600 }}>
          Recommend for you
        </Text>
        <View>
          <ScrollView
            horizontal
            style={{ paddingVertical: 10 }}
            showsHorizontalScrollIndicator={false}
          >
            {/* item sản phẩm */}
            {products.map((product, index) => (
              <TouchableOpacity
                style={{
                  width: 130,
                  height: 170,
                  marginRight: 15,
                }}
                onPress={DetailProductNavigation}
              >
                {/* Ảnh nền */}
                <Image
                  source={product_background}
                  style={styles.backgroundImage}
                ></Image>
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
                    source={plant_img}
                    style={styles.backgroundImage}
                  ></Image>
                </View>
                {/* Text Container */}
                <View style={styles.textContainer}>
                  <Text
                    style={{ fontSize: 13, fontWeight: 600, color: "#498553" }}
                  >
                    {product.name}
                  </Text>
                  <Text
                    style={{ fontSize: 12, fontWeight: 600, color: "#000" }}
                  >
                    {product.price}
                  </Text>
                  <View style={styles.productRating}>
                    <FontAwesome
                      marginRight={3}
                      name="star"
                      size={12}
                      color="#498553"
                    />
                    <Text style={{ fontSize: 12, color: "#498553" }}>
                      {product.rating}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
