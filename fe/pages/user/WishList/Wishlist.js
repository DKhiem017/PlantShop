import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator, FlatList } from "react-native";
import Searchbar from "../../../components/search";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import wishListAPI from "../../../../Api/WishListApi";

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
    flex: 1,
    width: "100%",
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
    resizeMode: "contain",
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
  textContainer: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    bottom: 15,
    paddingLeft: 10,
  },
});

const Wishlist = ({ navigation }) => {
  const HandleDetailProduct = (productID) => {
    navigation.navigate("Product Info", {
      id: productID,
    });
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await wishListAPI.getAll('CS0001');
        console.log("success: ", response);
        setData(response);
        setLoading(false);
      }
      catch (error) {
        console.log("Error: ", error);
        setLoading(false);
      }
    }

    fetchAPI()
  }, [])

  const Item = ({ image, name, price, reviewPoint, id }) => {
    return (
      <View style={styles.gridItem}>
        <TouchableOpacity
          style={styles.plant_item}
          onPress={() => HandleDetailProduct(id)}
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
            <TouchableOpacity style={styles.wishButton}>
              <AntDesign name="hearto" size={12} color="#498553" />
            </TouchableOpacity>
            <Image source={{ uri: `${image}` }} style={styles.backgroundImage}></Image>
          </View>
          {/* Text Container */}
          <View style={styles.textContainer}>
            <Text style={{ fontSize: 13, fontWeight: 600, color: "#498553" }}>
              {name}
            </Text>
            <Text style={{ fontSize: 12, fontWeight: 600, color: "#000" }}>
              ${price}
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
              <Text style={{ fontSize: 12, color: "#498553" }}>{reviewPoint}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

    )
  }

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
        {
          loading ? <ActivityIndicator size="large"
            color="#498553"
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }} />
            : <FlatList
              columnWrapperStyle={{ justifyContent: 'center' }}
              horizontal={false}
              numColumns={2}
              data={data}
              renderItem={
                ({ item }) => <Item id={item.product.productID}
                  name={item.product.productName}
                  price={item.product.price}
                  reviewPoint={item.product.reviewPoint}
                  image={item.product.images[0].imageURL}
                />
              }
              keyExtractor={item => item.id}
            />
        }
      </View>
    </View>
  );
};

export default Wishlist;
