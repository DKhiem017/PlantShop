import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Pagetitle from "../../../components/pagetitle";

const plant_img = require("../../../../assets/images/Monstera_tran.png");

const styles = StyleSheet.create({
  itemBackground: {
    borderRadius: 5,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
    backgroundColor: "#fff",
    paddingHorizontal: 5,
    paddingVertical: 7,
  },
  backgroundImg: {
    position: "absolute",
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
});

const MyFeedback = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <View>
        <StatusBar></StatusBar>
        <Pagetitle title={"My Feedback"} navigation={navigation}></Pagetitle>
        <View
          style={{ flexDirection: "row", marginTop: 10, paddingHorizontal: 10 }}
        >
          {/* Unreview */}
          <TouchableOpacity style={{ width: "50%", alignItems: "center" }}>
            <Text style={{ color: "#498553", fontWeight: 600, fontSize: 16 }}>
              Unreviewed
            </Text>
            <View
              style={{
                backgroundColor: "#498553",
                height: 2,
                width: "100%",
                marginTop: 3,
              }}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: "50%", alignItems: "center" }}>
            <Text style={{ color: "#6F6A61", fontWeight: 600, fontSize: 16 }}>
              Reviewed
            </Text>
            {/* <View
              style={{
                backgroundColor: "#498553",
                height: 2,
                width: "100%",
                marginTop: 3,
              }}
            ></View> */}
          </TouchableOpacity>
        </View>
        {/* list item */}
        <View style={{ paddingHorizontal: 15, marginTop: 20, gap: 15 }}>
          <View style={styles.itemBackground}>
            <View style={{ flexDirection: "row" }}>
              {/* ảnh sp */}
              <View
                style={{
                  backgroundColor: "#DAF1D4",
                  height: 60,
                  width: 49,
                  borderRadius: 5,
                }}
              >
                <Image source={plant_img} style={styles.backgroundImg}></Image>
              </View>
              <View style={{ justifyContent: "space-between", marginLeft: 10 }}>
                <Text style={{ color: "#000", fontWeight: 600 }}>Monstera</Text>
                <Text style={{ color: "#498553", fontWeight: 600 }}>
                  $30.55
                </Text>
              </View>
              {/* feedbackbutton */}
              <TouchableOpacity
                style={{
                  height: 20,
                  width: 90,
                  backgroundColor: "#498553",
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                }}
              >
                <Text style={{ color: "#fff", fontWeight: 400, fontSize: 11 }}>
                  Feedback
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* item sp */}
          <View style={styles.itemBackground}>
            <View style={{ flexDirection: "row" }}>
              {/* ảnh sp */}
              <View
                style={{
                  backgroundColor: "#DAF1D4",
                  height: 60,
                  width: 49,
                  borderRadius: 5,
                }}
              >
                <Image source={plant_img} style={styles.backgroundImg}></Image>
              </View>
              <View style={{ justifyContent: "space-between", marginLeft: 10 }}>
                <Text style={{ color: "#000", fontWeight: 600 }}>Monstera</Text>
                <Text style={{ color: "#498553", fontWeight: 600 }}>
                  $30.55
                </Text>
              </View>
              {/* feedbackbutton */}
              <TouchableOpacity
                style={{
                  height: 20,
                  width: 90,
                  backgroundColor: "#498553",
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                }}
              >
                <Text style={{ color: "#fff", fontWeight: 400, fontSize: 11 }}>
                  Feedback
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyFeedback;
