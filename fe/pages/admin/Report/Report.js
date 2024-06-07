import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";

const report = require("../../../../assets/images/Report.png");

const OrangeBackground = require("../../../../assets/images/GradientOrange.jpg");
const VioletBackground = require("../../../../assets/images/GradientViolet.jpg");
const BlueBackground = require("../../../../assets/images/GradientBlue.jpg");
const GreenBackground = require("../../../../assets/images/GradientGreen.jpg");

const styles = StyleSheet.create({
  backgroundItem: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 7,
    height: 170,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  RevenueItem: {
    width: "49%",
    borderRadius: 5,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  backgroundimg: {
    position: "absolute",
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: 5,
  },
  backgroundImg: {
    position: "absolute",
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  topProductContainer: {
    backgroundColor: "#fff",
    paddingBottom: 10,
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
});

const Report = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      {/* Header Title */}
      <View>
        <StatusBar></StatusBar>
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 700, color: "#498553" }}>
            Report
          </Text>
        </View>
      </View>
      {/* <View > */}
      <ScrollView style={{ paddingHorizontal: 8 }}>
        {/* Chart */}
        <View style={styles.backgroundItem}>
          <Image source={report}></Image>
        </View>
        {/* Doanh thu */}
        <View style={{ marginTop: 15, gap: 7 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.RevenueItem}>
              <Image
                source={OrangeBackground}
                style={styles.backgroundimg}
              ></Image>
              <View
                style={{
                  justifyContent: "space-between",
                  paddingVertical: 10,
                  paddingLeft: 20,
                }}
              >
                <Text style={{ color: "#fff" }}>Revenue</Text>
                <Text style={{ fontSize: 17, color: "#fff", fontWeight: 600 }}>
                  $ 270,000
                </Text>
                <Text style={{ color: "#fff", fontSize: 12 }}>January</Text>
              </View>
            </View>
            {/* Bill */}
            <View style={styles.RevenueItem}>
              <Image
                source={GreenBackground}
                style={styles.backgroundimg}
              ></Image>
              <View
                style={{
                  justifyContent: "space-between",
                  paddingVertical: 10,
                  paddingLeft: 20,
                }}
              >
                <Text style={{ color: "#fff" }}>Bills</Text>
                <Text style={{ fontSize: 17, color: "#fff", fontWeight: 600 }}>
                  18
                </Text>
                <Text style={{ color: "#fff", fontSize: 12 }}>Today</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              // gap: 5,
            }}
          >
            <View style={styles.RevenueItem}>
              <Image
                source={BlueBackground}
                style={styles.backgroundimg}
              ></Image>
              <View
                style={{
                  justifyContent: "space-between",
                  paddingVertical: 10,
                  paddingLeft: 20,
                }}
              >
                <Text style={{ color: "#fff" }}>Top Product</Text>
                <Text style={{ fontSize: 17, color: "#fff", fontWeight: 600 }}>
                  Monstera
                </Text>
                <Text style={{ color: "#fff", fontSize: 12 }}>Today</Text>
              </View>
            </View>
            {/* Top Deal */}
            <View style={styles.RevenueItem}>
              <Image
                source={VioletBackground}
                style={styles.backgroundimg}
              ></Image>
              <View
                style={{
                  justifyContent: "space-between",
                  paddingVertical: 10,
                  paddingLeft: 20,
                }}
              >
                <Text style={{ color: "#fff" }}>Top Deal</Text>
                <Text style={{ fontSize: 17, color: "#fff", fontWeight: 600 }}>
                  $ 260
                </Text>
                <Text style={{ color: "#fff", fontSize: 12 }}>Today</Text>
              </View>
            </View>
          </View>
        </View>
        {/* Top Product */}
        <View style={styles.topProductContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 16, fontWeight: 500 }}>Top Products</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>Month</Text>
              <Entypo name="chevron-small-down" size={24} color="black" />
            </View>
          </View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text>Name</Text>
            <Text style={{ marginLeft: 115 }}>Quantity</Text>
            <Text style={{ position: "absolute", right: 0 }}>Revenue</Text>
          </View>
          <ScrollView style={{ marginTop: 5 }}>
            <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <Text>Monstera</Text>
              <Text style={{ marginLeft: 115 }}>20</Text>
              <Text style={{ position: "absolute", right: 0 }}>$ 600</Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <Text>Monstera</Text>
              <Text style={{ marginLeft: 115 }}>20</Text>
              <Text style={{ position: "absolute", right: 0 }}>$ 600</Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <Text>Monstera</Text>
              <Text style={{ marginLeft: 115 }}>20</Text>
              <Text style={{ position: "absolute", right: 0 }}>$ 600</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default Report;
