import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  ActivityIndicator,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import productApi from "../../../../Api/ProductApi";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Rating } from "react-native-ratings";
import feedbackApi from "../../../../Api/FeedbackApi";
import { LogBox } from "react-native";
import cartApi from "../../../../Api/CartApi";
import wishListAPI from "../../../../Api/WishListApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
LogBox.ignoreAllLogs();

const backgroundImage = require("../../../../assets/images/DetailProductBackground.png");

const ProductDetail = ({ navigation, route }) => {
  //format Date
  const formatDate = (date) => {
    const inputDate = new Date(date);

    const year = inputDate.getUTCFullYear();
    const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
    const day = inputDate.getDate().toString().padStart(2, "0");

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };

  const { id } = route.params;

  const HandleCheckout = async () => {
    try {
      const user = await AsyncStorage.getItem("CustomerID");
      await cartApi.addToCart(user, id, value);
      navigation.navigate("CartScreen");
    } catch (error) {
      console.log("Lỗi", error);
    }
  };

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  //fetchAPI
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const feedbackapi = await feedbackApi.getAll(id);
        const response = await productApi.getItem(id);
        console.log("success", response);
        console.log("success", feedbackapi);
        setProduct(response);
        setFeedback(feedbackapi);
        setLoading(false);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchApi();
  }, []);

  //thêm vào wishList

  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = async () => {
    const user = await AsyncStorage.getItem("CustomerID");
    return await wishListAPI
      .addWishList(user, id)
      .then(() => {
        setIsFavourite(!isFavourite);
      })
      .catch(() => {
        Alert.alert("Product has been in WishList before");
      });
  };

  // tăng giảm giá trị sản phẩm

  const [value, SetValue] = useState(1);

  const handleMinus = () => {
    if (value > 0) {
      SetValue(value - 1);
    }
  };

  const handlePlus = () => {
    if (value < 50) {
      SetValue(value + 1);
    }
  };

  //toggle
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [sidebarWidth] = useState(new Animated.Value(0));
  const [contentRight] = useState(new Animated.Value(0));

  const toggleSidebar = () => {
    if (isCollapsed) {
      Animated.timing(sidebarWidth, {
        toValue: 150,
        duration: 300,
        useNativeDriver: false,
      }).start();
      Animated.timing(contentRight, {
        toValue: -200,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(sidebarWidth, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
      Animated.timing(contentRight, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
    setIsCollapsed(!isCollapsed);
  };

  const FeedbackItem = ({ avt, name, date, rating, comment, id }) => (
    <View style={{ flexDirection: "row", marginTop: 5, alignItems:'center', marginRight:10 }}>
      <View style={styles.avtContainer}>
        <Image source={{ uri: `${avt}` }} style={styles.avt_girl}></Image>
      </View>
      <View style={styles.commentContainer}>
        <Text style={{ fontSize: 12, fontWeight: 500 }}>{name}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Rating
            startingValue={rating}
            ratingCount={5}
            readonly
            imageSize={12}
          ></Rating>
          <Text style={{ fontSize: 12, marginLeft: 5 }}>
            {formatDate(date)}
          </Text>
        </View>
        <Text style={{ fontSize: 12, color: "#6F6A61" }}>{comment}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#00ff00"></ActivityIndicator>
      ) : (
        <>
          <StatusBar></StatusBar>
          <Image
            style={styles.backgroundImage}
            source={backgroundImage}
          ></Image>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View
                style={{
                  left: 15,
                }}
              >
                <AntDesign name="arrowleft" size={28} color="#498553" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wishButton}
              onPress={toggleFavourite}
            >
              <AntDesign
                name={!isFavourite ? "hearto" : "heart"}
                size={12}
                color="#498553"
              />
            </TouchableOpacity>
          </View>
          {/* Thông tin chi tiết của sản phẩm */}
          <View style={styles.inforContainer}>
            <TouchableOpacity
              onPress={toggleSidebar}
              style={styles.toggleButton}
            >
              <Ionicons
                name={isCollapsed ? "information" : "close"}
                size={17}
                color="#498553"
              />
            </TouchableOpacity>
            <Animated.View style={[styles.sidebar, { width: sidebarWidth }]}>
              {!isCollapsed && (
                <View style={styles.menuItems}>
                  <Text style={{ fontSize: 12, color: "#6F6A61" }}>Size</Text>
                  <Text
                    style={{
                      fontWeight: "500",
                      color: "#498533",
                      marginTop: 10,
                    }}
                  >
                    {product.size}
                  </Text>
                  <Text
                    style={{ fontSize: 12, color: "#6F6A61", marginTop: 10 }}
                  >
                    Height
                  </Text>
                  <Text
                    style={{
                      fontWeight: "500",
                      color: "#498533",
                      marginTop: 10,
                    }}
                  >
                    {product.height}
                  </Text>
                  <Text
                    style={{ fontSize: 12, color: "#6F6A61", marginTop: 10 }}
                  >
                    Temperature
                  </Text>
                  <Text
                    style={{
                      fontWeight: "500",
                      color: "#498533",
                      marginTop: 10,
                    }}
                  >
                    {product.temperature} C
                  </Text>
                </View>
              )}
            </Animated.View>
          </View>
          {/* thông tin */}
          <View style={styles.DetailContainer}>
            <View style={styles.con1}>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: 500,
                }}
              >
                {product.productName}
              </Text>
              <View style={styles.addOrMinus}>
                <TouchableOpacity style={styles.minusBut} onPress={handleMinus}>
                  <AntDesign name="minus" size={12} color="#fff" />
                </TouchableOpacity>
                <Text style={{ fontSize: 15, fontWeight: 500, marginRight: 8 }}>
                  {value}
                </Text>
                <TouchableOpacity style={styles.plusBut} onPress={handlePlus}>
                  <AntDesign name="plus" size={10} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
              }}
            >
              <Text
                style={{
                  color: "#498553",
                  fontWeight: 500,
                  fontSize: 16,
                }}
              >
                $ {product.price}
              </Text>
              <View style={styles.ratingContainer}>
                <Rating
                  ratingCount={5}
                  startingValue={product.reviewPoint}
                  imageSize={15}
                  readonly
                ></Rating>
              </View>
            </View>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
              {/* Comment */}
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  width: "100%",
                }}
              >
                Description
              </Text>
              <View style={{ width: "100%" }}>
                <Text style={{ color: "#6F6A61", fontSize: 14 }}>
                  {product.description}
                </Text>
              </View>
              <Text
                style={{
                  width: "100%",
                  fontSize: 15,
                  fontWeight: 600,
                  marginTop: 6,
                }}
              >
                Reviews
              </Text>
              <View style={styles.flatlistContainer}>
                <FlatList
                  style={{ paddingBottom: 20 }}
                  showsHorizontalScrollIndicator={false}
                  data={feedback}
                  horizontal={true}
                  renderItem={({ item }) => (
                    <FeedbackItem
                      avt={item.customer.avatar}
                      name={item.customer.name}
                      rating={item.point}
                      comment={item.comment}
                      date={item.feedbackTime}
                    />
                  )}
                ></FlatList>
              </View>
            </ScrollView>
            <View style={styles.addtoCartButContainer}>
              <TouchableOpacity
                style={styles.addtoCartBut}
                onPress={HandleCheckout}
              >
                <Text
                  style={{ color: "#fff", fontWeight: 500, marginRight: 10 }}
                >
                  Add to Cart
                </Text>
                <FontAwesome name="opencart" size={15} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
          {/* Ảnh sản phẩm */}
          <View style={styles.plantImgContainer}>
            <Image
              source={{ uri: `${product.images[0].imageURL}` }}
              style={styles.plantImg}
            ></Image>
          </View>
        </>
      )}
      {/* Thông tin cơ bản của sản phẩm */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  plantImgContainer: {
    height: 270,
    width: 200,
    top: 35,
    left: 0,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  plantImg: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  DetailContainer: {
    position: "absolute",
    backgroundColor: "#fff",
    width: "100%",
    height: "53%",
    bottom: 0,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 40,
  },
  wishButton: {
    height: 30,
    width: 30,
    backgroundColor: "#B7E1A1",
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 20,
  },
  avt_girl: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    borderRadius: 50,
  },
  header: {
    width: "100%",
    height: 40,
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  addOrMinus: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 8,
  },
  minusBut: {
    height: 15,
    width: 15,
    backgroundColor: "#D9D9D9",
    borderRadius: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  plusBut: {
    height: 15,
    width: 15,
    backgroundColor: "#498553",
    borderRadius: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  addtoCartBut: {
    width: 300,
    height: 40,
    backgroundColor: "#498553",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  addtoCartButContainer: {
    flexDirection: "row",
    bottom: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  inforContainer: {
    flexDirection: "row",
    position: "absolute",
    right: 10,
    marginTop: 65,
  },
  toggleButton: {
    position: "absolute",
    top: 5,
    right: 10,
    backgroundColor: "#fff",
    height: 26,
    width: 26,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    zIndex: 2,
  },
  sidebar: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1,
    overflow: "hidden",
  },
  menuItems: {
    marginTop: 10,
    paddingLeft: 10,
  },
  con1: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    gap: 5,
  },
  avtContainer: {
    height: 35,
    width: 35,
    borderRadius: 35,
  },
  commentContainer: {
    paddingVertical: 5,
    marginLeft: 10,
    display: "flex",
    flexDirection: "column",
  },
  flatlistContainer: {
    width: "100%",
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
  },
});

export default ProductDetail;
