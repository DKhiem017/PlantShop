import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const PromotionList = () => {
  return (
    // View tổng quát
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f5f5f5",
        height: "100%",
      }}
    >
      <StatusBar></StatusBar>
      {/* Tiêu đề với search */}
      <View
        style={{
          height: 130,
          backgroundColor: "#fff",
          elevation: 8,
          shadowColor: "#000000",
          shadowOpacity: 0.5,
          shadowOffset: { width: 0, height: 5 },
          shadowRadius: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 25,
        }}
      >
        <Text
          style={{
            fontSize: 17,
            fontWeight: 600,
            color: "#498553",
          }}
        >
          Promotion
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingTop: 10,
            alignItems: "center",
          }}
        >
          {/* Searchbar */}
          <View
            style={{
              backgroundColor: "#DCE1D2",
              height: 45,
              width: 270,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Feather
              style={{ position: "absolute", marginLeft: 2 }}
              name="search"
              size={25}
              color="#498553"
            />
            <TextInput
              style={{
                color: "#498553",
                fontSize: 15,
                width: "100%",
                paddingLeft: 33,
              }}
              placeholder="Search"
            ></TextInput>
          </View>
          <TouchableOpacity style={{ marginLeft: 15 }}>
            <FontAwesome6 name="filter" size={24} color="#498553" />
          </TouchableOpacity>
        </View>
      </View>
      {/* Content */}
      <View
        style={{
          // paddingLeft: 15,
          // paddingRight: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* item khuyến mãi */}
        <View
          style={{
            width: 350,
            height: 120,
            backgroundColor: "#fff",
            marginTop: 30,
            borderRadius: 2,
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
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 160,
              height: 70,
              backgroundColor: "#B7E1A1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: 26,
                height: 26,
                backgroundColor: "#fff",
                borderRadius: 50,
                position: "absolute",
                left: -13,
              }}
            ></View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 13, fontWeight: 500 }}>
                Super Sale 08.05
              </Text>
              <Text style={{ fontSize: 12, fontWeight: 500, color: "#498553" }}>
                30% Off
              </Text>
            </View>
            <View
              style={{
                width: 26,
                height: 26,
                backgroundColor: "#fff",
                borderRadius: 50,
                position: "absolute",
                right: -13,
              }}
            ></View>
          </View>
          <Text style={{ marginLeft: 10, fontWeight: "normal" }}>
            08/05-09-5
          </Text>
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <MaterialIcons name="edit-square" size={23} color="#498553" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 10, marginTop: -2 }}>
            <FontAwesome5 name="trash" size={21} color="#498553" />
          </TouchableOpacity>
        </View>
        {/* item khuyến mãi */}
        <View
          style={{
            width: 350,
            height: 120,
            backgroundColor: "#fff",
            marginTop: 30,
            borderRadius: 2,
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
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 160,
              height: 70,
              backgroundColor: "#B7E1A1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: 26,
                height: 26,
                backgroundColor: "#fff",
                borderRadius: 50,
                position: "absolute",
                left: -13,
              }}
            ></View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 13, fontWeight: 500 }}>
                Super Sale 08.05
              </Text>
              <Text style={{ fontSize: 12, fontWeight: 500, color: "#498553" }}>
                30% Off
              </Text>
            </View>
            <View
              style={{
                width: 26,
                height: 26,
                backgroundColor: "#fff",
                borderRadius: 50,
                position: "absolute",
                right: -13,
              }}
            ></View>
          </View>
          <Text style={{ marginLeft: 10, fontWeight: "normal" }}>
            08/05-09-5
          </Text>
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <MaterialIcons name="edit-square" size={23} color="#498553" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 10, marginTop: -2 }}>
            <FontAwesome5 name="trash" size={21} color="#498553" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PromotionList;
