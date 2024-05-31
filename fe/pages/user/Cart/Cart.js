import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import cartApi from "../../../../Api/CartApi";
import CheckBox from "../../../components/checkbox";

const backgroundImage = require("../../../../assets/images/Monstera_tran.png");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f3f3",
    flex: 1,
  },
  itembackground: {
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingVertical: 5,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
    flexDirection: "row",
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 15,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  totalBackground: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: "center",
    paddingBottom: 20,
    position: "relative",
    bottom: 25,
  },
  header: {
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
  },
  tagContainer: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 10,
    marginTop: 10,
  },
  imageContainer: {
    width: 50,
    height: 60,
    backgroundColor: "#DAF1D4",
    borderRadius: 5,
  },
  plantInfo: {
    flexDirection: "column",
    marginLeft: 10,
    justifyContent: "space-between",
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
  minusAndPlus: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  butContainer: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    position: "absolute",
    right: 5,
    marginTop: 5,
    height: "100%",
  },
  checkoutBut: {
    paddingVertical: 8,
    width: "90%",
    backgroundColor: "#498553",
    marginTop: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  totalText: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
});

const Cart = ({ navigation }) => {
  //chọn số lượng sp
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
  //checkbox
  const [ischecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckAll = () => {
    const newCheckedItems = {};
    cart.forEach((item) => {
      newCheckedItems[item.productID] = true;
    });
    setCheckedItems(newCheckedItems);
  };

  const handleCheckboxPress = (id) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  //render flatlist
  const Item = ({ name, price, img, isChecked, onPress, id }) => (
    <View style={styles.itembackground}>
      <CheckBox onPress={() => onPress(id)} isChecked={isChecked}></CheckBox>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: `${img}` }}
          style={styles.backgroundImage}
        ></Image>
      </View>
      {/* Thông tin sản phẩm */}
      <View style={styles.plantInfo}>
        <Text
          style={{
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: 500,
            color: "#498553",
          }}
        >
          $ {price}
        </Text>
      </View>
      <View style={styles.butContainer}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="trash-can" size={20} color="#498553" />
        </TouchableOpacity>
        <View style={styles.minusAndPlus}>
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
    </View>
  );
  const HandleCheckout = () => {
    navigation.navigate("Checkout");
  };
  //fetch Api
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await cartApi.getAll("CS0001");
        console.log("success", response);
        setCart(response);
        setLoading(false);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchApi();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingLeft: 15, paddingRight: 15, height: "100%" }}>
        <StatusBar></StatusBar>
        <View style={styles.header}>
          <Text style={{ fontSize: 18, fontWeight: 700, color: "#498553" }}>
            My Cart
          </Text>
        </View>
        <View style={styles.tagContainer}>
          <TouchableOpacity onPress={handleCheckAll}>
            <Text style={{ fontSize: 15, color: "#498553", fontWeight: 600 }}>
              All Items
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ position: "absolute", right: 0 }}>
            <Text style={{ fontSize: 15, color: "#6F6A61", fontWeight: 600 }}>
              Delete All
            </Text>
          </TouchableOpacity>
        </View>
        {/* Danh sách sp */}
        <View style={{ marginTop: 10, paddingHorizontal: 15, flex: 1 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={cart}
            renderItem={({ item }) => (
              <Item
                name={item.product.productName}
                price={item.product.price}
                img={item.product.images[0].imageURL}
                id={item.product.productID}
                isChecked={!!checkedItems[item.productID]}
                onPress={handleCheckboxPress}
              />
            )}
            keyExtractor={(item) => item.id}
          ></FlatList>
        </View>
        <View style={styles.totalBackground}>
          <View style={styles.totalText}>
            <Text style={{ color: "#6F6A61", fontWeight: 600 }}>Total:</Text>
            <Text
              style={{
                color: "#498553",
                fontWeight: 600,
                position: "absolute",
                right: 0,
              }}
            >
              $ 80
            </Text>
          </View>
          <TouchableOpacity style={styles.checkoutBut} onPress={HandleCheckout}>
            <Text style={{ color: "#fff", fontWeight: 600 }}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
