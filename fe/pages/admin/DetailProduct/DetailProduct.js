import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Pagetitle from "../../../components/pagetitle";
import { Entypo } from "@expo/vector-icons";
import { useState, useEffect, useCallback } from "react";
import productApi from "../../../../Api/ProductApi";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import ApiURL from "../../../../constants/baseURL";

const styles = StyleSheet.create({
  plantImgContainer: {
    height: 170,
    width: 170,
    backgroundColor: "#B7E1A1",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
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
    height: 35,
    width: 35,
    backgroundColor: "#498553",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: -10,
    bottom: -10,
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
    height: "50%",
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
    marginBottom: 5,
  },
});

const DetailProduct = ({ navigation, route }) => {
  const { id } = route.params;

  const [type, setType] = useState();
  const [fileName, setFileName] = useState();

  const apiUrl = `${ApiURL}/api/Product/update-product/${id}`;

  //fetchAPI

  useFocusEffect(
    useCallback(() => {
      const fetchApi = async () => {
        try {
          const response = await productApi.getItem(id);
          setName(response.productName);
          setSize(response.size);
          setHeight(response.height);
          setTemperature(response.temperature);
          setQuantity(response.quantity);
          setimgURL(response.images[0].imageURL);
          setCategory(response.categoryName);
          setPrice(response.price);
          setDescription(response.description);
          console.log("success", response);
        } catch (error) {
          console.log("Error", error);
        }
      };
      fetchApi();
      return () => {
        // Cleanup function (optional)
      };
    }, []) // Dependency array để đảm bảo callback chỉ được gọi khi component được mount lần đầu tiên
  );

  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [size, setSize] = useState("");
  const [temperature, setTemperature] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imgURL, setimgURL] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [Images, setImages] = useState([]);
  const [imgChoose, setImgChoose] = useState(false);

  const handleChoosePicture = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({ base64: true });

    if (!result.canceled) {
      setimgURL(result.assets[0].uri);
      setFileName(result.assets[0].fileName);
      setType(result.assets[0].mimeType);
      setImgChoose(true);
    }
  };

  const handleUpdateProduct = async () => {
    const formData = new FormData();

    formData.append("ProductName", name);
    formData.append("CategoryName", category);
    formData.append("Height", height);
    formData.append("Temperature", temperature);
    formData.append("Size", size);
    formData.append("Quantity", quantity);
    formData.append("Price", price);
    formData.append("Description", description);
    if (imgChoose) {
      formData.append("Images", {
        uri: imgURL,
        type: type,
        name: fileName,
      });
    } else {
      formData.append("Images", Images);
    }
    try {
      const updatedata = await axios.put(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      Alert.alert("Succesfully update product information");
      navigation.navigate("ProductAdmin");
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#f5f5f5", paddingHorizontal: 15 }}
    >
      <StatusBar></StatusBar>
      <View style={{ height: "100%" }}>
        <Pagetitle title={"Product Detail"} navigation={navigation}></Pagetitle>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: "50%",
          }}
        >
          <View style={styles.plantImgContainer}>
            <Image
              source={{ uri: `${imgURL}` }}
              style={styles.backgroundImg}
            ></Image>
            <TouchableOpacity
              style={styles.plusbackground}
              onPress={handleChoosePicture}
            >
              <Entypo name="plus" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        {/* form */}
        <View style={styles.FormBackground}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ paddingHorizontal: 20, paddingTop: 8, marginBottom: 10 }}
          >
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
              <TextInput
                style={styles.TextInputContent}
                onChangeText={(e) => setName(e)}
              >
                {name}
              </TextInput>
            </View>
            <View style={styles.TextInput}>
              <Text
                style={{
                  fontSize: 15,
                  color: "#498553",
                  fontWeight: 600,
                }}
              >
                Category
              </Text>
              <TextInput
                style={styles.TextInputContent}
                onChangeText={(e) => setCategory(e)}
              >
                {category}
              </TextInput>
            </View>
            <View style={styles.TextInput}>
              <Text
                style={{
                  fontSize: 15,
                  color: "#498553",
                  fontWeight: 600,
                }}
              >
                Price
              </Text>
              <TextInput
                style={styles.TextInputContent}
                onChangeText={(e) => setPrice(e)}
              >
                {price}
              </TextInput>
            </View>
            <View style={styles.TextInput}>
              <Text
                style={{
                  fontSize: 15,
                  color: "#498553",
                  fontWeight: 600,
                }}
              >
                Description
              </Text>
              <TextInput
                style={styles.TextInputContent}
                onChangeText={(e) => setDescription(e)}
              >
                {description}
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
              <TextInput
                style={styles.TextInputContent}
                onChangeText={(e) => setSize(e)}
              >
                {size}
              </TextInput>
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
              <TextInput
                style={styles.TextInputContent}
                onChangeText={(e) => setHeight(e)}
              >
                {height}
              </TextInput>
            </View>
            <View style={styles.TextInput}>
              <Text
                style={{
                  fontSize: 15,
                  color: "#498553",
                  fontWeight: 600,
                }}
              >
                Temperature
              </Text>
              <TextInput
                style={styles.TextInputContent}
                onChangeText={(e) => setTemperature(e)}
              >
                {temperature}
              </TextInput>
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
              <TextInput
                style={styles.TextInputContent}
                onChangeText={(e) => setQuantity(e)}
              >
                {quantity}
              </TextInput>
            </View>
          </ScrollView>
          <View style={{ alignItems: "center", marginBottom: 10 }}>
            <TouchableOpacity
              style={{
                width: 250,
                paddingVertical: 10,
                backgroundColor: "#498553",
                borderRadius: 10,
                alignItems: "center",
              }}
              onPress={handleUpdateProduct}
            >
              <Text style={{ fontSize: 16, fontWeight: "600", color: "#fff" }}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailProduct;
