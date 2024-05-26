import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const backgroundImage = require("../../../../assets/images/DetailProductBackground.png");
const plant_img = require("../../../../assets/images/Monstera_tran.png");
const avt_girl = require("../../../../assets/images/avt_girl.jpg");

const ProductDetail = ({ navigation }) => {
  const HandleCheckout = () => {
    navigation.navigate("AddtoCart");
  };

  //thêm vào wishList

  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  // tăng giảm giá trị sản phẩm

  const [value, SetValue] = useState(0);

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

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <StatusBar></StatusBar>
      <Image style={styles.backgroundImage} source={backgroundImage}></Image>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View
            style={{
              left: 5,
            }}
          >
            <AntDesign name="arrowleft" size={28} color="#498553" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wishButton} onPress={toggleFavourite}>
          <AntDesign
            name={!isFavourite ? "hearto" : "heart"}
            size={12}
            color="#498553"
          />
        </TouchableOpacity>
      </View>
      {/* Thông tin chi tiết của sản phẩm */}
      <View style={styles.inforContainer}>
        <TouchableOpacity onPress={toggleSidebar} style={styles.toggleButton}>
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
                style={{ fontWeight: "500", color: "#498533", marginTop: 10 }}
              >
                Small
              </Text>
              <Text style={{ fontSize: 12, color: "#6F6A61", marginTop: 10 }}>
                Weight
              </Text>
              <Text
                style={{ fontWeight: "500", color: "#498533", marginTop: 10 }}
              >
                4kg
              </Text>
              <Text style={{ fontSize: 12, color: "#6F6A61", marginTop: 10 }}>
                Height
              </Text>
              <Text
                style={{ fontWeight: "500", color: "#498533", marginTop: 10 }}
              >
                60cm
              </Text>
              <Text style={{ fontSize: 12, color: "#6F6A61", marginTop: 10 }}>
                Temperature
              </Text>
              <Text
                style={{ fontWeight: "500", color: "#498533", marginTop: 10 }}
              >
                18-24 C
              </Text>
            </View>
          )}
        </Animated.View>
      </View>
      {/* thông tin */}
      <View style={styles.DetailContainer}>
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: 19,
              fontWeight: 500,
            }}
          >
            Monstera
          </Text>
          <View style={styles.addOrMinus}>
            <TouchableOpacity style={styles.minusBut} onPress={handleMinus}>
              <AntDesign name="minus" size={12} color="#fff" />
            </TouchableOpacity>
            <Text style={{ fontSize: 15, fontWeight: 500, marginRight: 5 }}>
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
            $ 30.55
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
              gap: 5,
            }}
          >
            <AntDesign name="star" size={15} color="yellow" />
            <AntDesign name="star" size={15} color="yellow" />
            <AntDesign name="star" size={15} color="yellow" />
            <AntDesign name="star" size={15} color="yellow" />
          </View>
        </View>
        <Text
          style={{
            fontWeight: 600,
            fontSize: 15,
            marginTop: 6,
            width: "100%",
          }}
        >
          Description
        </Text>
        <Text style={{ color: "#6F6A61", fontSize: 14 }}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
          porttitor congue massa. Fusce posuere, magna sed
        </Text>
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
        {/* Comment */}
        <View
          style={{
            height: 55,
            width: "100%",
            marginTop: 10,
            display: "flex",
            flexDirection: "row",
          }}
        >
          {/* khung avt */}
          <View
            style={{
              height: 35,
              width: 35,
              borderRadius: 35,
            }}
          >
            <Image source={avt_girl} style={styles.avt_girl}></Image>
          </View>
          {/* khung đánh giá */}
          <View
            style={{
              width: 200,
              height: 55,
              // backgroundColor: "#000",
              marginLeft: 10,
              display: "flex",
              flexDirection: "column",
              // justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: 500 }}>Kratos</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Entypo marginRight={2} name="star" size={11} color="yellow" />
              <Entypo marginRight={2} name="star" size={11} color="yellow" />
              <Entypo marginRight={2} name="star" size={11} color="yellow" />
              <Entypo marginRight={2} name="star" size={11} color="yellow" />
              <Entypo marginRight={2} name="star" size={11} color="yellow" />
              <Text style={{ fontSize: 12, marginLeft: 5 }}>04/04/2024</Text>
            </View>
            <Text style={{ fontSize: 12, color: "#6F6A61" }}>Very Good</Text>
          </View>
        </View>
        <View style={styles.addtoCartButContainer}>
          <TouchableOpacity
            style={styles.addtoCartBut}
            onPress={HandleCheckout}
          >
            <Text style={{ color: "#fff", fontWeight: 500, marginRight: 10 }}>
              Add to Cart
            </Text>
            <FontAwesome name="opencart" size={15} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      {/* Ảnh sản phẩm */}
      <View style={styles.plantImgContainer}>
        <Image source={plant_img} style={styles.plantImg}></Image>
      </View>
      {/* Thông tin cơ bản của sản phẩm */}
    </View>
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
    top: 25,
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
    marginRight: 5,
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
    position: "absolute",
  },
  inforContainer: {
    flexDirection: "row",
    position: "absolute",
    right: 10,
    marginTop: 65,
  },
  toggleButton: {
    position: "absolute",
    top: 20,
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
});

export default ProductDetail;
