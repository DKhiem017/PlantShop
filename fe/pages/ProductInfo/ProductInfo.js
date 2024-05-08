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
            display:'flex'
          }}
        ></View>
      </View>
    </View>
  );
};

export default ProductInfo;
