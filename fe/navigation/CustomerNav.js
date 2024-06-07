import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login";
import Register from "../pages/register";
import MyTabs from "../components/tabs";
import { AppContext } from "../../contexts/appContext";
import AdminTabs from "../components/adminTabs";

const Stack = createStackNavigator();

function CustomerNavigator() {
    const { role } = useContext(AppContext);
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
            {
                role === "Customer"
                    ? <Stack.Screen
                        name="Main"
                        component={MyTabs}
                        options={{ headerShown: false }}
                    />
                    : <Stack.Screen
                        name="Main Admin"
                        component={AdminTabs}
                        options={{ headerShown: false }}
                    />
            }

        </Stack.Navigator>
    )
};

export default CustomerNavigator;