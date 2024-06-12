import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
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
import DetailAddress from "../pages/user/DetailAddress/DetailAddress";
import ProductList from "../pages/admin/ProductList/ProductList";
import AddProduct from "../pages/admin/AddProduct/AddProduct";
import DetailProduct from "../pages/admin/DetailProduct/DetailProduct";
import BillList from "../pages/admin/BillList/BillList";
import ChatRoomAdmin from "../pages/admin/ChatRoomAdmin/ChatRoomAdmin";
import Report from "../pages/admin/Report/Report";
import PromotionList from "../pages/admin/PromotionList/PromotionList";
import PromotionDetail from "../pages/admin/Promotion Detail/PromotionDetail";
import DetailBill from "../pages/admin/DetailBill/DetailBill";
import ChatBox from "../pages/ChatBox/ChatBox";
import Imagesearch from "../pages/user/ImageSearch/Imagesearch";
import CameraScreen from "../pages/user/ImageSearch/CameraScreen/CameraScreen";
import Result from "../pages/user/ImageSearch/Result/Result";
import AddAddress from "../pages/user/AddAddress/AddAddress";
import ChatBoxAdmin from "../pages/ChatBoxAdmin/ChatBoxAdmin";
import AdminAccount from "../pages/admin/AdminAccount/AdminAccount";
import AddPromotion from "../pages/admin/AddPromtion/AddPromotion";


const Stack = createStackNavigator();

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

const ImagesearchNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ImageSearchScreen"
        component={Imagesearch}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResultScreen"
        component={Result}
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
        name="MyAddress"
        component={MyAddress}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailAddress"
        component={DetailAddress}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddAddressScreen"
        component={AddAddress}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VoucherScreen"
        component={VoucherWallet}
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
        name="DetailAddress"
        component={DetailAddress}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddAddressScreen"
        component={AddAddress}
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
      <Stack.Screen
        name="ChatBoxScreen"
        component={ChatBox}
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
        name="MyAddress"
        component={MyAddress}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailAddress"
        component={DetailAddress}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddAddressScreen"
        component={AddAddress}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VoucherScreen"
        component={VoucherWallet}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const ProductAdminNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductAdmin"
        component={ProductList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddProductAdmin"
        component={AddProduct}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailProductAdmin"
        component={DetailProduct}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const OrderAdminNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OrderAdmin"
        component={BillList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailOrderAdmin"
        component={DetailBill}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const ChatAdminNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountAdmin"
        component={AdminAccount}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatAdmin"
        component={ChatRoomAdmin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatBoxAdminScreen"
        component={ChatBoxAdmin}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const ReportAdminNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ReportAdmin"
        component={Report}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const PromotionAdminNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PromotionAdmin"
        component={PromotionList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PromotionDetailAdmin"
        component={PromotionDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewPromotionAdmin"
        component={AddPromotion}
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
  ProductAdminNavigator,
  OrderAdminNavigator,
  ChatAdminNavigator,
  ReportAdminNavigator,
  PromotionAdminNavigator,
  ImagesearchNavigator,
};
