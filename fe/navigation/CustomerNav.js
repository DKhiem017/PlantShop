import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login";
import Register from "../pages/register";
import MyTabs from "../components/tabs";

const Stack = createStackNavigator();

function CustomerNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Main"
                component={MyTabs}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
};

export default CustomerNavigator;