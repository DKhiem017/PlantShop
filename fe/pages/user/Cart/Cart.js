import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import { useCallback, useEffect, useState } from "react";
import cartApi from "../../../../Api/CartApi";
import CheckBox from "../../../components/checkbox";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

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
  const currentLanguage = i18next.language;
  const { t } = useTranslation();
  //chọn số lượng sp
  // Lưu trữ giá trị value cho mỗi mặt hàng
  const [itemValues, setItemValues] = useState({});

  //tổng giá trị
  const [totalPrice, settotalPrice] = useState(0);
  //hàm xử lý update giá trị giỏ hàng
  const updateTotalPrice = (newCheckedItems) => {
    let newTotalPrice = 0;
    cart.forEach((item) => {
      if (newCheckedItems[item.product.productID]) {
        newTotalPrice +=
          item.product.price * itemValues[item.product.productID];
      }
    });
    settotalPrice(newTotalPrice);
  };

  // Hàm xử lý giảm số lượng cho một mặt hàng cụ thể
  const handleMinus = (id) => {
    setItemValues((prevItemValues) => {
      if (prevItemValues[id] > 1) {
        const newValue = prevItemValues[id] - 1;
        const newItemValues = { ...prevItemValues, [id]: newValue };
        if (checkedItems[id]) {
          // Update total price if the item is checked
          let newTotalPrice = 0;
          cart.forEach((item) => {
            if (checkedItems[item.product.productID]) {
              newTotalPrice +=
                item.product.price * newItemValues[item.product.productID];
            }
          });
          settotalPrice(newTotalPrice);
        }
        return newItemValues;
      }
      return prevItemValues; // Return the original values if the item quantity is 1
    });
  };

  // Hàm xử lý tăng số lượng cho một mặt hàng cụ thể
  const handlePlus = (id) => {
    setItemValues((prevItemValues) => {
      if (prevItemValues[id] < 50) {
        const newValue = prevItemValues[id] + 1;
        const newItemValues = { ...prevItemValues, [id]: newValue };
        if (checkedItems[id]) {
          // Update total price if the item is checked
          let newTotalPrice = 0;
          cart.forEach((item) => {
            if (checkedItems[item.product.productID]) {
              newTotalPrice +=
                item.product.price * newItemValues[item.product.productID];
            }
          });
          settotalPrice(newTotalPrice);
        }
        return newItemValues;
      }
      return prevItemValues; // Return the original values if the item quantity is 50
    });
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
    updateTotalPrice(newCheckedItems);
  };

  const handleCheckboxPress = (id) => {
    setCheckedItems((prevState) => {
      const newCheckedItems = {
        ...prevState,
        [id]: !prevState[id],
      };
      updateTotalPrice(newCheckedItems);
      return newCheckedItems;
    });
  };
  //delete Item
  const handleDelete = async (id) => {
    try {
      const user = await AsyncStorage.getItem("CustomerID");
      const deleteItem = await cartApi.deleteItem(user, id);

      // Cập nhật danh sách mặt hàng mà không bao gồm mặt hàng đã được xóa
      setCart((prevCart) =>
        prevCart.filter((item) => item.product.productID !== id)
      );

      // Cập nhật giá trị của itemValues bằng cách loại bỏ giá trị của mặt hàng đã xóa
      setItemValues((prevItemValues) => {
        const newItemValues = { ...prevItemValues };
        delete newItemValues[id];
        return newItemValues;
      });

      // Cập nhật checkedItems và totalPrice
      setCheckedItems((prevCheckedItems) => {
        const newCheckedItems = { ...prevCheckedItems };
        delete newCheckedItems[id];
        updateTotalPrice(newCheckedItems);
        return newCheckedItems;
      });

      console.log("Item deleted successfully");
    } catch (error) {
      console.log("Lỗi", error);
    }
  };
  //xoá tất cả
  const handleDeleteAll = async () => {
    try {
      const user = await AsyncStorage.getItem("CustomerID");
      await cartApi.deleteAll(user);
      console.log("Xoá thành công");
      setCart([]);
      setItemValues({});
      setCheckedItems({});
      settotalPrice(0);
    } catch (error) {
      console.log("Xoá không thành công", error);
    }
  };
  //render flatlist
  const Item = ({
    name,
    price,
    img,
    isChecked,
    onPress,
    id,
    value,
    onMinus,
    onPlus,
    onDelete,
  }) => (
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
        <TouchableOpacity onPress={() => onDelete(id)}>
          <MaterialCommunityIcons name="trash-can" size={20} color="#498553" />
        </TouchableOpacity>
        <View style={styles.minusAndPlus}>
          <TouchableOpacity style={styles.minusBut} onPress={() => onMinus(id)}>
            <AntDesign name="minus" size={12} color="#fff" />
          </TouchableOpacity>
          <Text style={{ fontSize: 15, fontWeight: 500, marginRight: 5 }}>
            {value}
          </Text>
          <TouchableOpacity style={styles.plusBut} onPress={() => onPlus(id)}>
            <AntDesign name="plus" size={10} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  //điều hướng checkout
  const HandleCheckout = () => {
    // Lọc ra các item đã được check
    const checkedItemsData = cart.filter(
      (item) => checkedItems[item.product.productID]
    );

    // Điều hướng đến trang Checkout với dữ liệu của các mục đã được check
    navigation.navigate("Checkout", {
      data: checkedItemsData,
      subTotal: totalPrice,
    });

    // Nếu không có item nào được check, cũng điều hướng đến trang Checkout
    if (checkedItemsData.length === 0) {
      // Điều hướng đến trang Checkout với dữ liệu rỗng
      navigation.navigate("Checkout", { data: [], subTotal: 0 });
    }
  };
  //fetch Api
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      const fetchApi = async () => {
        try {
          const user = await AsyncStorage.getItem("CustomerID");
          const response = await cartApi.getAll(user);
          console.log("success", response);
          setCart(response);
          setLoading(false);

          // Khởi tạo giá trị value cho mỗi mặt hàng
          const initialValues = {};
          response.forEach((item) => {
            initialValues[item.product.productID] = item.quantity; // Giá trị mặc định là 1
          });
          setItemValues(initialValues);
        } catch (error) {
          console.log("Error", error);
        }
      };

      fetchApi();

      return () => {
        // Cleanup function (optional)
      };
    }, []) // Dependency array để đảm bảo callback chỉ được gọi khi component được mount lần đầu tiên
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingLeft: 15, paddingRight: 15, height: "100%" }}>
        <StatusBar></StatusBar>
        <View style={styles.header}>
          <Text style={{ fontSize: 18, fontWeight: 700, color: "#498553" }}>
            {t("MyCart")}
          </Text>
        </View>
        <View style={styles.tagContainer}>
          <TouchableOpacity onPress={handleCheckAll}>
            <Text style={{ fontSize: 15, color: "#498553", fontWeight: 600 }}>
              {t("AllItems")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ position: "absolute", right: 0 }}
            onPress={handleDeleteAll}
          >
            <Text style={{ fontSize: 15, color: "#6F6A61", fontWeight: 600 }}>
              {t("DeleteAll")}
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
                name={
                  currentLanguage === "vi"
                    ? item.product.productNameVie
                    : item.product.productName
                }
                price={item.product.price}
                img={item.product.images[0].imageURL}
                id={item.product.productID}
                isChecked={!!checkedItems[item.productID]}
                onPress={handleCheckboxPress}
                value={itemValues[item.product.productID] || 1} // Sử dụng giá trị từ itemValues
                onMinus={handleMinus} // Truyền hàm handleMinus
                onPlus={handlePlus} // Truyền hàm handlePlus
                onDelete={() => handleDelete(item.product.productID)}
              />
            )}
            keyExtractor={(item) => item.id}
          ></FlatList>
        </View>
        <View style={styles.totalBackground}>
          <View style={styles.totalText}>
            <Text style={{ color: "#6F6A61", fontWeight: 600 }}>
              {t("total")}:
            </Text>
            <Text
              style={{
                color: "#498553",
                fontWeight: 600,
                position: "absolute",
                right: 0,
              }}
            >
              $ {totalPrice}
            </Text>
          </View>
          <TouchableOpacity style={styles.checkoutBut} onPress={HandleCheckout}>
            <Text style={{ color: "#fff", fontWeight: 600 }}>
              {t("Checkout")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
