import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/user/Home/Home";
import Cart from "../pages/user/Cart/Cart";
import Profilemanage from "../pages/user/ProfileManage/Profilemanage";
import Wishlist from "../pages/user/WishList/Wishlist";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import Imagesearch from "../pages/user/ImageSearch/Imagesearch";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
};

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              {focused ? (
                <Ionicons name="home" size={24} color="#498553" /> // Icon khi focused
              ) : (
                <Ionicons name="home-outline" size={24} color="#498553" /> // Icon khi không focused
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              {focused ? (
                <Ionicons name="heart" size={25} color="#498553" /> // Icon khi focused
              ) : (
                <Ionicons name="heart-outline" size={25} color="#498553" /> // Icon khi không focused
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Imagesearch"
        component={Imagesearch}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: "#498553",
                  borderRadius: 50,
                  position: "absolute",
                }}
              ></View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              {focused ? (
                <Ionicons name="cart" size={26} color="#498553" /> // Icon khi focused
              ) : (
                <Ionicons name="cart-outline" size={26} color="#498553" /> // Icon khi không focused
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profilemanage"
        component={Profilemanage}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              {focused ? (
                <Ionicons name="person" size={26} color="#498553" /> // Icon khi focused
              ) : (
                <Ionicons name="person-outline" size={26} color="#498553" /> // Icon khi không focused
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
