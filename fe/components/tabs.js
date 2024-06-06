import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

import {
  HomeNavigator,
  WishListNavigator,
  CartNavigator,
  MyAccountNavigator,
  LoginNavigator,
  ImagesearchNavigator,
} from "../navigation/Navigator";

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
};

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
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
        component={WishListNavigator}
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
        component={ImagesearchNavigator}
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
                  justifyContent: "center",
                  alignItems: "center",
                  bottom: 5,
                }}
              >
                <MaterialCommunityIcons
                  name="image-filter-center-focus"
                  size={24}
                  color="white"
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigator}
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
        component={MyAccountNavigator}
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
