import React, { useState } from "react";
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
import axios from "axios";
import productApi from "../../../../../Api/ProductApi";
import ApiURL from "../../../../../constants/baseURL";
import { useTranslation } from "react-i18next";

const Result = ({ route, navigation }) => {
  const { t } = useTranslation();

  const { photo, filename, type } = route.params;

  const apiUrl = `${ApiURL}/api/Product/predict-by-image`;

  const [hasResult, setHasResult] = useState(false);

  const [product, setProduct] = useState({});

  const handleGoback = () => {
    navigation.goBack();
  };

  const handleDetailProduct = (id) => {
    navigation.navigate("Product Info", { id: id });
  };

  const handleCameraScreen = () => {
    navigation.navigate("Camera");
  };

  console.log(photo);
  console.log(type);
  console.log(filename);

  const handleSearchByImg = async () => {
    const imgData = new FormData();
    imgData.append("Image", {
      uri: photo,
      type: type,
      name: filename,
    });
    try {
      const response = await axios.post(apiUrl, imgData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.percentage < 0.01) {
        setHasResult(false);
      } else {
        const getProduct = await productApi.searchByName(
          response.data.plantName
        );
        setProduct(getProduct[0]);
        setHasResult(true);
      }
      console.log("Success: ", response.data);
    } catch (error) {
      console.log("Error: ", error);
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
            <TouchableOpacity
              style={styles.cameraButton}
              onPress={handleCameraScreen}
            >
              <Entypo name="camera" size={24} color="#498553" />
              <Text
                style={{ fontSize: 15, fontWeight: "bold", color: "#498553" }}
              >
                Green Lens
              </Text>
            </TouchableOpacity>
          </View>
          {/* khung kết quả */}
          <Text style={{ fontSize: 16, fontWeight: 600 }}>{t("Result")}</Text>
          <View>
            {hasResult ? (
              <TouchableOpacity
                style={styles.itemBackground}
                onPress={() => handleDetailProduct(product.productID)}
              >
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.imgBorder}>
                    <Image
                      source={{ uri: `${product.images[0].imageURL}` }}
                      style={styles.image}
                    ></Image>
                  </View>
                  <View
                    style={{ justifyContent: "space-between", marginLeft: 10 }}
                  >
                    <Text style={{ color: "#000", fontWeight: 600 }}>
                      {product.productName}
                    </Text>
                    <Text
                      style={{
                        color: "#498553",
                        fontWeight: 400,
                        fontSize: 11,
                      }}
                    >
                      $ {product.price}
                    </Text>
                    <View>
                      <Rating
                        ratingCount={5}
                        readonly
                        startingValue={product.reviewPoint}
                        imageSize={14}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ) : (
              <View>
                <Text>{t("NoResultFound")}</Text>
              </View>
            )}
          </View>
          {/* Thư viện ảnh và nút tìm kiếm */}
          <View style={styles.libraryAndSearch}>
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
    alignItems: "center",
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
