import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Rating } from "react-native-ratings";
import imageSearchApi from "../../../../../Api/ImageSearchApi";

const Result = ({ route, navigation }) => {
  const { photo, base64 } = route.params;

  const handleGoback = () => {
    navigation.goBack();
  };

  const handleSearchByImg = async () => {
    try {
      const response = await imageSearchApi.predictByImg(base64);
      console.log("Success", response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: "100%" }}>
        {/* ảnh */}
        <View style={styles.imgContainer}>
          <Image source={{ uri: `${photo}` }} style={styles.image} />
        </View>
        {/* gobackButton */}
        <View style={styles.closeContainer}>
          <TouchableOpacity style={styles.closeBut} onPress={handleGoback}>
            <AntDesign name="close" size={30} color="#498553" />
          </TouchableOpacity>
        </View>
        <View style={styles.resultItemContainer}>
          <View style={{ marginLeft: 10 }}>
            <TouchableOpacity style={styles.cameraButton}>
              <Entypo name="camera" size={24} color="#498553" />
              <Text
                style={{ fontSize: 15, fontWeight: "bold", color: "#498553" }}
              >
                Green Lens
              </Text>
            </TouchableOpacity>
          </View>
          {/* khung kết quả */}
          <Text style={{ fontSize: 16, fontWeight: 600 }}>Result</Text>
          <View>
            <View style={styles.itemBackground}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.imgBorder}>
                  {/* <Image
                    source={plant_img}
                    style={styles.backgroundImg}
                  ></Image> */}
                </View>
                <View
                  style={{ justifyContent: "space-between", marginLeft: 10 }}
                >
                  <Text style={{ color: "#000", fontWeight: 600 }}>
                    Monstera
                  </Text>
                  <Text
                    style={{ color: "#498553", fontWeight: 400, fontSize: 11 }}
                  >
                    $ 30.55
                  </Text>
                  <View>
                    <Rating
                      ratingCount={5}
                      readonly
                      startingValue={5}
                      imageSize={14}
                      ratingColor="#498553"
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* Thư viện ảnh và nút tìm kiếm */}
          <View style={styles.libraryAndSearch}>
            <TouchableOpacity style={styles.photolibraryButton}>
              <MaterialIcons name="insert-photo" size={60} color="#498553" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.searchButton}
              onPress={handleSearchByImg}
            >
              <FontAwesome name="search" size={33} color="#498553" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    height: "50%",
    width: "100%",
    position: "absolute",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  resultItemContainer: {
    height: "55%",
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 20,
    paddingTop: 15,
    gap: 10,
  },
  closeContainer: {
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    marginTop: 15,
  },
  closeBut: {
    position: "absolute",
    left: 10,
  },
  cameraButton: {
    flexDirection: "row",
    gap: 5,
    width: 110,
  },
  searchButton: {
    width: 60,
    height: 60,
    borderWidth: 3,
    borderRadius: 50,
    borderColor: "#498553",
    alignItems: "center",
    justifyContent: "center",
  },
  photolibraryButton: {
    position: "absolute",
    left: 0,
  },
  libraryAndSearch: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 25,
    width: "100%",
    alignSelf: "center",
  },
  itemContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  itemImgContainer: {
    backgroundColor: "#DAF1D4",
    height: 65,
    width: 55,
  },
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
    marginBottom: 15,
  },
  imgBorder: {
    backgroundColor: "#DAF1D4",
    height: 65,
    width: 55,
    borderRadius: 5,
  },
});
