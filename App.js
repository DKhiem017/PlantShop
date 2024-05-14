import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MyTabs from "./fe/components/tabs";
import Home from "./fe/pages/user/Home/Home";
import Register from "./fe/pages/register";
import Login from "./fe/pages/login";
import MyAccount from "./fe/pages/user/MyAccount/Myaccount";
import UserInformation from "./fe/pages/user/UserInformation/Userinfo";
import PromotionDetail from "./fe/pages/admin/Promotion Detail/PromotionDetail";
import ProductList from "./fe/pages/admin/ProductList/ProductList";
import ProductInfo from "./fe/pages/ProductInfo/ProductInfo";
import PromotionList from "./fe/pages/PromotionList/PromotionList";
import Cart from "./fe/pages/user/Cart/Cart";
import Wishlist from "./fe/pages/user/WishList/Wishlist";
import Checkout from "./fe/pages/user/Checkout/Checkout";
import ProductDetail from "./fe/pages/user/ProductDetail/ProductDetail";

const Stack = createStackNavigator();

const App = () => (
  // <NavigationContainer>
  //   <MyTabs></MyTabs>
  // </NavigationContainer>
  <ProductDetail></ProductDetail>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
