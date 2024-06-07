import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView,
    Image,
    FlatList,
    ActivityIndicator,
} from "react-native";
import { ProgressStep, ProgressSteps } from "react-native-progress-steps";
import { SafeAreaView } from "react-native-safe-area-context";


const DetailBill = ({ navigation, route }) => {
    const { orderID } = route.params;

    const [status, setStatus] = useState([
        { label: "Pending", content: 'Pending' },
        { label: "Packaging", content: 'Packaging' },
        { label: "Delivering", content: 'Delivering' },
        { label: "Completed", content: 'Completed' },
    ])

    return (
        <SafeAreaView
            style={{
                display: "flex",
                backgroundColor: "#f5f5f5",
                flex: 1,
                paddingHorizontal: 15,
            }}
        >
            <View>
                <StatusBar />
                {/* Tiêu đề với search */}
                <View
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 17,
                            fontWeight: 700,
                            color: "#498553",
                        }}
                    >
                        Detail Order
                    </Text>
                </View>
            </View>
            <View>
                <ProgressSteps>
                    <ProgressStep label="Pending"
                        nextBtnTextStyle={{ color: "#498553" }}
                        previousBtnTextStyle={{ color: "#498553" }} />

                    <ProgressStep label="Packaging"
                        nextBtnTextStyle={{ color: "#498553" }}
                        previousBtnTextStyle={{ color: "#498553" }} />

                    <ProgressStep label="Delivering"
                        nextBtnTextStyle={{ color: "#498553" }}
                        previousBtnTextStyle={{ color: "#498553" }} />

                    <ProgressStep label="Completed"
                        nextBtnTextStyle={{ color: "#498553" }}
                        previousBtnTextStyle={{ color: "#498553" }} />

                </ProgressSteps>
            </View>
        </SafeAreaView>
    )
}

export default DetailBill;
