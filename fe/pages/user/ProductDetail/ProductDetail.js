import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const backgroundImage = require("../../../../assets/images/DetailProductBackground.png");
const plant_img = require("../../../../assets/images/Monstera_tran.png");
const avt_girl = require("../../../../assets/images/avt_girl.jpg");

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  plantImgContainer: {
    height: 290,
    width: 200,
    top: 35,
    left: 0,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    // backgroundColor: "#000",
  },
  plantImg: {
    // position: "absolute",
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
});

const ProductDetail = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        // height: "100%",
        flex: 1,
      }}
    >
      <StatusBar></StatusBar>
      <Image style={styles.backgroundImage} source={backgroundImage}></Image>
      <View
        style={{
          width: "100%",
          height: 40,
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          //   backgroundColor: "#fff",
          top: 25,
        }}
      >
        <TouchableOpacity>
          <View
            style={{
              left: 5,
            }}
          >
            <AntDesign name="arrowleft" size={28} color="#498553" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wishButton}>
          <AntDesign name="hearto" size={12} color="#498553" />
        </TouchableOpacity>
      </View>

      {/* Thông tin chi tiết của sản phẩm */}
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
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              position: "absolute",
              right: 8,
            }}
          >
            <TouchableOpacity
              style={{
                height: 15,
                width: 15,
                backgroundColor: "#D9D9D9",
                borderRadius: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 5,
              }}
            >
              <AntDesign name="minus" size={12} color="#fff" />
            </TouchableOpacity>
            <Text style={{ fontSize: 15, fontWeight: 500, marginRight: 5 }}>
              1
            </Text>
            <TouchableOpacity
              style={{
                height: 15,
                width: 15,
                backgroundColor: "#498553",
                borderRadius: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign name="plus" size={10} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            display: "flex",
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
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <AntDesign name="star" size={15} color="yellow" />
            <AntDesign
              name="star"
              size={15}
              color="yellow"
              style={{ marginLeft: 5 }}
            />
            <AntDesign
              name="star"
              size={15}
              color="yellow"
              style={{ marginLeft: 5 }}
            />
            <AntDesign
              name="star"
              size={15}
              color="yellow"
              style={{ marginLeft: 5 }}
            />
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
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            bottom: 20,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
          }}
        >
          <TouchableOpacity
            style={{
              width: 220,
              height: 40,
              backgroundColor: "#498553",
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
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
      <View
        style={{
          width: 140,
          height: 300,
          position: "absolute",
          right: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: 40,
          top: 65,
        }}
      >
        <Text style={{ fontSize: 12, color: "#6F6A61" }}>Size</Text>
        <Text style={{ fontWeight: 500, color: "#498533", marginTop: 10 }}>
          Small
        </Text>
        <Text style={{ fontSize: 12, color: "#6F6A61", marginTop: 10 }}>
          Weight
        </Text>
        <Text style={{ fontWeight: 500, color: "#498533", marginTop: 10 }}>
          4kg
        </Text>
        <Text style={{ fontSize: 12, color: "#6F6A61", marginTop: 10 }}>
          Height
        </Text>
        <Text style={{ fontWeight: 500, color: "#498533", marginTop: 10 }}>
          60cm
        </Text>
        <Text style={{ fontSize: 12, color: "#6F6A61", marginTop: 10 }}>
          Temperature
        </Text>
        <Text style={{ fontWeight: 500, color: "#498533", marginTop: 10 }}>
          18-24 C
        </Text>
      </View>
    </View>
  );
};

export default ProductDetail;
