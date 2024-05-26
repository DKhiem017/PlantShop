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
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const backgroundImage = require("../../../../assets/images/Monstera.jpg");

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 2, // Adjust as needed
  },
  greenbackgroundProduct: {
    width: 105,
    height: "100%",
    backgroundColor: "#B7E1A1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    right: 0,
    position: "absolute",
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  productItem: {
    width: "100%",
    height: 120,
    backgroundColor: "#fff",
    marginTop: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  searchBar: {
    backgroundColor: "#DCE1D2",
    height: 45,
    width: 330,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

const ProductList = () => {
  return (
    // View tổng quát\
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#f5f5f5", paddingHorizontal: 20 }}
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
            Product List
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
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* item sản phẩm */}
          <View style={styles.productItem}>
            <View style={{ height: 80, width: 80, marginLeft: 15 }}>
              <Image
                source={backgroundImage}
                style={styles.backgroundImage}
              ></Image>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: 15,
                gap: 10,
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: 500 }}>Monstera</Text>
              <Text style={{ fontSize: 14, fontWeight: 500, color: "#498553" }}>
                $ 30.55
              </Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <AntDesign name="star" size={14} color="yellow" />
                <AntDesign name="star" size={14} color="yellow" />
                <AntDesign name="star" size={14} color="yellow" />
                <AntDesign name="star" size={14} color="yellow" />
              </View>
            </View>
            <View style={styles.greenbackgroundProduct}>
              <View
                style={{
                  height: 120,
                  width: 110,
                  position: "absolute",
                  left: -50,
                  backgroundColor: "#B7E1A1",
                  borderRadius: 120,
                }}
              ></View>
              <TouchableOpacity>
                <MaterialIcons name="edit-square" size={23} color="#498553" />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginLeft: 10, marginTop: -2 }}>
                <FontAwesome5 name="trash" size={21} color="#498553" />
              </TouchableOpacity>
            </View>
          </View>
          {/* item sản phẩm */}
          <View style={styles.productItem}>
            <View style={{ height: 80, width: 80, marginLeft: 15 }}>
              <Image
                source={backgroundImage}
                style={styles.backgroundImage}
              ></Image>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: 15,
                gap: 10,
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: 500 }}>Monstera</Text>
              <Text style={{ fontSize: 14, fontWeight: 500, color: "#498553" }}>
                $ 30.55
              </Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <AntDesign name="star" size={14} color="yellow" />
                <AntDesign name="star" size={14} color="yellow" />
                <AntDesign name="star" size={14} color="yellow" />
                <AntDesign name="star" size={14} color="yellow" />
              </View>
            </View>
            <View style={styles.greenbackgroundProduct}>
              <View
                style={{
                  height: 120,
                  width: 110,
                  position: "absolute",
                  left: -50,
                  backgroundColor: "#B7E1A1",
                  borderRadius: 120,
                }}
              ></View>
              <TouchableOpacity>
                <MaterialIcons name="edit-square" size={23} color="#498553" />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginLeft: 10, marginTop: -2 }}>
                <FontAwesome5 name="trash" size={21} color="#498553" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductList;
