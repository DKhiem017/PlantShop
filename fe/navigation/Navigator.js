import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Register from "../pages/register";
import Login from "../pages/login";
import Home from "../pages/user/Home/Home";
import Wishlist from "../pages/user/WishList/Wishlist";
import Cart from "../pages/user/Cart/Cart";
import Checkout from "../pages/user/Checkout/Checkout";
import ProductDetail from "../pages/user/ProductDetail/ProductDetail";
import Order from "../pages/user/Order/Order";
import OrderDetail from "../pages/user/OrderDetail/OrderDetail";
import MyAccount from "../pages/user/MyAccount/Myaccount";
import UserInformation from "../pages/user/UserInformation/Userinfo";
import MyAddress from "../pages/user/MyAddress/MyAddress";
import MyFeedback from "../pages/user/MyFeedback/MyFeedback";
import VoucherWallet from "../pages/user/VoucherWallet/VoucherWallet";
import ChatRoom from "../pages/user/ChatRoom/ChatRoom";

const Stack = createStackNavigator();

const LoginNavigator = () => {
  <Stack.Navigator>
    <Stack.Screen
      name="Register"
      component={Register}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>;
};

const WishListNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WishlistScreen"
        component={Wishlist}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Product Info"
        component={ProductDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const CartNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CartScreen"
        component={Cart}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecepientInfo"
        component={MyAddress}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const MyAccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyAccount"
        component={MyAccount}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserInfo"
        component={UserInformation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyAddress"
        component={MyAddress}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Order"
        component={Order}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrderDetail"
        component={OrderDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyFeedback"
        component={MyFeedback}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Voucher Wallet"
        component={VoucherWallet}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chat Room"
        component={ChatRoom}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Product Info"
        component={ProductDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddtoCart"
        component={CartNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export {
  HomeNavigator,
  WishListNavigator,
  CartNavigator,
  MyAccountNavigator,
  LoginNavigator,
};
