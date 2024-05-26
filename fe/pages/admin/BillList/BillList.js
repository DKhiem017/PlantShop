import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { FontAwesome6 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const couponImg = require("../../../../assets/images/Bill.png");

const styles = StyleSheet.create({
  itembackground: {
    width: "100%",
    backgroundColor: "#fff",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
    borderRadius: 5,
    padding: 5,
  },
  backgroundImg: {
    position: "absolute",
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  searchBar: {
    backgroundColor: "#DCE1D2",
    height: 45,
    width: 340,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

const BillList = () => {
  return (
    // View tổng quát
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
              fontWeight: 600,
              color: "#498553",
            }}
          >
            Order List
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Searchbar */}
          <View style={styles.searchBar}>
            <Feather
              style={{ position: "absolute", marginLeft: 5 }}
              name="search"
              size={25}
              color="#498553"
            />
            <TextInput
              style={{
                color: "#498553",
                fontSize: 15,
                width: "100%",
                paddingLeft: 40,
              }}
              placeholder="Search"
            ></TextInput>
          </View>
          <TouchableOpacity style={{ marginLeft: 15 }}>
            <FontAwesome6 name="filter" size={24} color="#498553" />
          </TouchableOpacity>
        </View>
        {/* Content */}
        <View style={{ marginTop: 25, gap: 10 }}>
          {/* item */}
          <View style={styles.itembackground}>
            {/* ảnh bill */}
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ height: 70, width: 70 }}>
                  <Image
                    source={couponImg}
                    style={styles.backgroundImg}
                  ></Image>
                </View>
                <View
                  style={{
                    justifyContent: "space-between",
                    marginLeft: 10,
                    paddingVertical: 5,
                  }}
                >
                  <Text
                    style={{ fontSize: 13, fontWeight: 600, color: "#000" }}
                  >
                    HD0001
                  </Text>
                  <Text
                    style={{
                      fontSize: 11,
                      color: "#6F6A61",
                      fontStyle: "italic",
                    }}
                  >
                    2 items
                  </Text>
                  <Text
                    style={{ fontSize: 13, color: "#498553", fontWeight: 700 }}
                  >
                    $276.00
                  </Text>
                </View>
              </View>
              <Text
                style={{ marginRight: 4, fontWeight: 600, color: "#F4CE14" }}
              >
                Pending
              </Text>
            </View>
          </View>

          <View style={styles.itembackground}>
            {/* ảnh bill */}
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ height: 70, width: 70 }}>
                  <Image
                    source={couponImg}
                    style={styles.backgroundImg}
                  ></Image>
                </View>
                <View
                  style={{
                    justifyContent: "space-between",
                    marginLeft: 10,
                    paddingVertical: 5,
                  }}
                >
                  <Text
                    style={{ fontSize: 13, fontWeight: 600, color: "#000" }}
                  >
                    HD0002
                  </Text>
                  <Text
                    style={{
                      fontSize: 11,
                      color: "#6F6A61",
                      fontStyle: "italic",
                    }}
                  >
                    2 items
                  </Text>
                  <Text
                    style={{ fontSize: 13, color: "#498553", fontWeight: 700 }}
                  >
                    $276.00
                  </Text>
                </View>
              </View>
              <Text
                style={{ marginRight: 4, fontWeight: 600, color: "#627FE7" }}
              >
                Packaged
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BillList;
