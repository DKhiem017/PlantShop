import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Pagetitle from "../../../components/pagetitle";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const tree = require("../../../../assets/images/TayninhTree.png");

const styles = StyleSheet.create({
  backgroundImg: {
    position: "absolute",
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  nextImgContainer: {
    height: 45,
    width: 45,
    backgroundColor: "#B7E1A1",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  plusbackground: {
    height: 45,
    width: 45,
    backgroundColor: "#498553",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 0,
    bottom: -20,
  },
  dot: {
    height: 20,
    width: 20,
    backgroundColor: "#B7E1A1",
    borderRadius: 50,
  },
  dotActive: {
    height: 20,
    width: 20,
    backgroundColor: "#498553",
    borderRadius: 50,
  },
  FormBackground: {
    backgroundColor: "#fff",
    width: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: "absolute",
    bottom: 0,
    height: 300,
  },
  TextInput: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  TextInputContent: {
    marginTop: 5,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#498553",
    paddingStart: 10,
    fontSize: 14,
    color: "#498553",
  },
});

const DetailProduct = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <StatusBar></StatusBar>
      <View style={{ height: "100%" }}>
        <Pagetitle title={"Product Detail"} navigation={navigation}></Pagetitle>
        <View
          style={{
            alignItems: "center",
            marginTop: 60,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#D9D9D9",
              width: "80%",
              height: 170,
              borderRadius: 10,
            }}
          ></View>
          <View
            style={{
              height: 245,
              width: "65%",
              borderRadius: 10,
              //   backgroundColor:'#000',
              position: "absolute",
            }}
          >
            <Image source={tree} style={styles.backgroundImg}></Image>
            <TouchableOpacity style={styles.plusbackground}>
              <Entypo name="plus" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              position: "absolute",
              width: "90%",
              justifyContent: "space-between",
            }}
          >
            {/* left */}
            <TouchableOpacity style={styles.nextImgContainer}>
              <AntDesign name="arrowleft" size={24} color="#498553" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextImgContainer}>
              <AntDesign name="arrowright" size={24} color="#498553" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 60,
            alignItems: "center",
            justifyContent: "center",
            gap: 15,
          }}
        >
          <TouchableOpacity style={styles.dot}></TouchableOpacity>
          <TouchableOpacity style={styles.dotActive}></TouchableOpacity>
          <TouchableOpacity style={styles.dot}></TouchableOpacity>
          <TouchableOpacity style={styles.dot}></TouchableOpacity>
        </View>
        {/* form */}
        <View style={styles.FormBackground}>
          <ScrollView style={{ paddingHorizontal: 20, paddingTop: 8, marginBottom: 10 }}>
            {/* name */}
            <View style={styles.TextInput}>
              <Text
                style={{
                  fontSize: 15,
                  color: "#498553",
                  fontWeight: 600,
                }}
              >
                Product Name
              </Text>
              <TextInput style={styles.TextInputContent}>
                Monstera
              </TextInput>
            </View>
            {/* size */}
            <View style={styles.TextInput}>
              <Text
                style={{
                  fontSize: 15,
                  color: "#498553",
                  fontWeight: 600,
                }}
              >
                Size
              </Text>
              <TextInput style={styles.TextInputContent}>Small</TextInput>
            </View>
            {/* weight */}
            <View style={styles.TextInput}>
              <Text
                style={{
                  fontSize: 15,
                  color: "#498553",
                  fontWeight: 600,
                }}
              >
                Weight
              </Text>
              <TextInput style={styles.TextInputContent}>4kg</TextInput>
            </View>
            {/* height */}
            <View style={styles.TextInput}>
              <Text
                style={{
                  fontSize: 15,
                  color: "#498553",
                  fontWeight: 600,
                }}
              >
                Height
              </Text>
              <TextInput style={styles.TextInputContent}>60cm</TextInput>
            </View>
            <View style={styles.TextInput}>
              <Text
                style={{
                  fontSize: 15,
                  color: "#498553",
                  fontWeight: 600,
                }}
              >
                Quantity
              </Text>
              <TextInput style={styles.TextInputContent}>30</TextInput>
            </View>
          </ScrollView>
          <View style={{alignItems: "center", marginBottom: 10}}>
            <TouchableOpacity
              style={{
                width: 250,
                paddingVertical: 10,
                backgroundColor: "#498553",
                borderRadius: 10,
                alignItems: 'center',
              }}
            >
              <Text style={{fontSize: 16, fontWeight: "600", color: "#fff"}}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailProduct;
