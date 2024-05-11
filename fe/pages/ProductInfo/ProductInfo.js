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
const backgroundImage = require("../../../assets/images/Monstera.jpg");
import { FontAwesome } from "@expo/vector-icons";

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 2, // Adjust as needed
  },
});

const ProductInfo = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <StatusBar></StatusBar>
      <View style={{ height: 400, width: "100%" }}>
        <Image source={backgroundImage} style={styles.backgroundImage}></Image>
        <View
          style={{
            width: 160,
            height: "100%",
            backgroundColor: "#E9F3ED",
            position: "absolute",
            right: 0,
            opacity: 0.65,
          }}
        ></View>
        <View
          style={{
            width: 160,
            height: "100%",
            backgroundColor: "transparent",
            position: "absolute",
            right: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 40,
          }}
        >
          <Text style={{ fontSize: 12 }}>Size</Text>
          <Text style={{ fontWeight: 500 }}>Small</Text>
          <Text style={{ fontSize: 12 }}>Weight</Text>
          <Text style={{ fontWeight: 500 }}>4kg</Text>
          <Text style={{ fontSize: 12 }}>Height</Text>
          <Text style={{ fontWeight: 500 }}>60cm</Text>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          backgroundColor: "#fff",
          width: "100%",
          height: "50%",
          bottom: 0,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          display: "flex",
          alignItems: "center",
          paddingLeft: 40,
          paddingRight: 40,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 500,
            left: 40,
            top: 20,
            position: "absolute",
          }}
        >
          Monstera
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            left: 40,
            top: 50,
          }}
        >
          <Text
            style={{
              color: "#498553",
              fontWeight: 500,
              fontSize: 18,
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
            <AntDesign name="star" size={17} color="yellow" />
            <AntDesign
              name="star"
              size={17}
              color="yellow"
              style={{ marginLeft: 5 }}
            />
            <AntDesign
              name="star"
              size={17}
              color="yellow"
              style={{ marginLeft: 5 }}
            />
            <AntDesign
              name="star"
              size={17}
              color="yellow"
              style={{ marginLeft: 5 }}
            />
          </View>
        </View>
        <Text
          style={{
            fontWeight: 500,
            fontSize: 16,
            top: 90,
          }}
        >
          Monstera deliciosa, commonly called split-leaf philodendron or swiss
          cheese plant, is native to Central America. It is a climbing,
          evergreen perennial vine that is perhaps most noted for its large
          perforated leaves on thick plant stems and its long cord-like aerial
          roots.
        </Text>
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
              height: 50,
              backgroundColor: "#498553",
              borderRadius: 5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: 500 }}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 60,
              height: 50,
              borderWidth: 1,
              borderRadius: 5,
              borderColor: "#498553",
              marginLeft: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome name="trash" size={27} color="#498553" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductInfo;
