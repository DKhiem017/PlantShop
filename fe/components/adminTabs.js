import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

import {
    ProductAdminNavigator,
    OrderAdminNavigator,
    ChatAdminNavigator,
    ReportAdminNavigator,
    PromotionAdminNavigator
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
    tabBarHideOnKeyboard: true
};

function AdminTabs() {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name="Product"
                component={ProductAdminNavigator}
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
                name="Order"
                component={OrderAdminNavigator}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            {focused ? (
                                <Ionicons name="reader" size={24} color="#498553" /> // Icon khi focused
                            ) : (
                                <Ionicons name="reader-outline" size={24} color="#498553" /> // Icon khi không focused
                            )}
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Report"
                component={ReportAdminNavigator}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            {focused ? (
                                <Ionicons name="bar-chart" size={24} color="#498553" /> // Icon khi focused
                            ) : (
                                <Ionicons name="bar-chart-outline" size={24} color="#498553" /> // Icon khi không focused
                            )}
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Promotion"
                component={PromotionAdminNavigator}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            {focused ? (
                                <Ionicons name="gift" size={24} color="#498553" /> // Icon khi focused
                            ) : (
                                <Ionicons name="gift-outline" size={24} color="#498553" /> // Icon khi không focused
                            )}
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Chat"
                component={ChatAdminNavigator}
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

export default AdminTabs;