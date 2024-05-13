import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Searchbar from "../../../components/search";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const product_background = require("../../../../assets/images/Background_Plants.png");
const plant_img = require("../../../../assets/images/Monstera_tran.png");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f3f3",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  gridContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
    height: 400,
    width: "100%",
    // flex: 1,
    // flexDirection: "row",
  },
  gridItem: {
    height: 200,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  plant_item: {
    width: 130,
    height: 170,
    margin: 25,
  },
  wishButton: {
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
});

const Wishlist = () => {
  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 28,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 700, color: "#498553" }}>
          WishList
        </Text>
      </View>
      <Searchbar></Searchbar>
      <View style={styles.gridContainer}>
        <View style={styles.gridItem}>
          <TouchableOpacity style={styles.plant_item}>
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
              <TouchableOpacity style={styles.wishButton}>
                <AntDesign name="hearto" size={12} color="#498553" />
              </TouchableOpacity>
              <Image source={plant_img} style={styles.backgroundImage}></Image>
            </View>
            {/* Text Container */}
            <View
              style={{
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
                bottom: 10,
                paddingLeft: 5,
              }}
            >
              <Text style={{ fontSize: 13, fontWeight: 600, color: "#498553" }}>
                Monstera
              </Text>
              <Text style={{ fontSize: 12, fontWeight: 600, color: "#000" }}>
                $30.55
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  position: "absolute",
                  right: 10,
                  bottom: 5,
                }}
              >
                <FontAwesome
                  marginRight={3}
                  name="star"
                  size={12}
                  color="#498553"
                />
                <Text style={{ fontSize: 12, color: "#498553" }}>4.5</Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* item  */}
          <TouchableOpacity style={styles.plant_item}>
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
              <TouchableOpacity style={styles.wishButton}>
                <AntDesign name="hearto" size={12} color="#498553" />
              </TouchableOpacity>
              <Image source={plant_img} style={styles.backgroundImage}></Image>
            </View>
            {/* Text Container */}
            <View
              style={{
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
                bottom: 10,
                paddingLeft: 5,
              }}
            >
              <Text style={{ fontSize: 13, fontWeight: 600, color: "#498553" }}>
                Monstera
              </Text>
              <Text style={{ fontSize: 12, fontWeight: 600, color: "#000" }}>
                $30.55
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  position: "absolute",
                  right: 10,
                  bottom: 5,
                }}
              >
                <FontAwesome
                  marginRight={3}
                  name="star"
                  size={12}
                  color="#498553"
                />
                <Text style={{ fontSize: 12, color: "#498553" }}>4.5</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.gridItem}>
          <TouchableOpacity style={styles.plant_item}>
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
              <TouchableOpacity style={styles.wishButton}>
                <AntDesign name="hearto" size={12} color="#498553" />
              </TouchableOpacity>
              <Image source={plant_img} style={styles.backgroundImage}></Image>
            </View>
            {/* Text Container */}
            <View
              style={{
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
                bottom: 10,
                paddingLeft: 5,
              }}
            >
              <Text style={{ fontSize: 13, fontWeight: 600, color: "#498553" }}>
                Monstera
              </Text>
              <Text style={{ fontSize: 12, fontWeight: 600, color: "#000" }}>
                $30.55
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  position: "absolute",
                  right: 10,
                  bottom: 5,
                }}
              >
                <FontAwesome
                  marginRight={3}
                  name="star"
                  size={12}
                  color="#498553"
                />
                <Text style={{ fontSize: 12, color: "#498553" }}>4.5</Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* item  */}
          <TouchableOpacity style={styles.plant_item}>
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
              <TouchableOpacity style={styles.wishButton}>
                <AntDesign name="hearto" size={12} color="#498553" />
              </TouchableOpacity>
              <Image source={plant_img} style={styles.backgroundImage}></Image>
            </View>
            {/* Text Container */}
            <View
              style={{
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
                bottom: 10,
                paddingLeft: 5,
              }}
            >
              <Text style={{ fontSize: 13, fontWeight: 600, color: "#498553" }}>
                Monstera
              </Text>
              <Text style={{ fontSize: 12, fontWeight: 600, color: "#000" }}>
                $30.55
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  position: "absolute",
                  right: 10,
                  bottom: 5,
                }}
              >
                <FontAwesome
                  marginRight={3}
                  name="star"
                  size={12}
                  color="#498553"
                />
                <Text style={{ fontSize: 12, color: "#498553" }}>4.5</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Wishlist;
