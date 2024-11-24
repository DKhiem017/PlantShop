import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Modal,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Pagetitle from "../../../components/pagetitle";
import { FontAwesome } from "@expo/vector-icons";
import { useState, useEffect, useCallback } from "react";
import "react-native-gesture-handler";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import feedbackApi from "../../../../Api/FeedbackApi";
import { Rating } from "react-native-ratings";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";

const plant_img = require("../../../../assets/images/Monstera_tran.png");

const MyFeedback = ({ navigation }) => {
  const { t } = useTranslation();
  //format Date
  const formatDate = (date) => {
    const inputDate = new Date(date);

    const year = inputDate.getUTCFullYear();
    const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
    const day = inputDate.getDate().toString().padStart(2, "0");

    const time =
      inputDate.getHours().toString().padStart(2, "0") +
      ":" +
      inputDate.getMinutes().toString().padStart(2, "0");

    const formattedDate = `${day}/${month}/${year}  ${time}  `;
    return formattedDate;
  };
  //fetch Api
  const [loading, setLoading] = useState(true);
  const [unreviewed, setUnreviewed] = useState([]);
  const [plantReviewed, setPlantReviewed] = useState([]);
  //thêm Feeback APi
  const [orderID, setOrderID] = useState("");
  const [productID, setProductID] = useState("");

  const handleAddFeedback = (orderID, productID) => {
    setOrderID(orderID);
    setProductID(productID);
    setshowFeedback(true);
  };
  const fetchApi = async () => {
    try {
      const user = await AsyncStorage.getItem("CustomerID");
      const reviewedList = await feedbackApi.getReviewedFeedback(user);
      const unreviewedList = await feedbackApi.getUnreviewedProduct(user);
      setPlantReviewed(reviewedList);
      setUnreviewed(unreviewedList);
      console.log("success", reviewedList);
      setLoading(false);
    } catch (error) {
      console.log("Error", error);
    }
  };
  useFocusEffect(
    useCallback(() => {
      fetchApi();
      return () => {
        // Cleanup function (optional)
      };
    }, []) // Dependency array để đảm bảo callback chỉ được gọi khi component được mount lần đầu tiên
  );
  useEffect(() => {}, []);

  const [comment, setComment] = useState("");

  const handleSaveFeedback = async () => {
    console.log(orderID);
    console.log(productID);
    console.log(comment);
    console.log(defaultRating);
    try {
      const user = await AsyncStorage.getItem("CustomerID");
      const addFeedback = await feedbackApi.newFeedback(
        orderID,
        user,
        productID,
        comment,
        defaultRating,
        null
      );
      Alert.alert("Add feedback successfully");
      setdefaultRating(0);
      setComment("");
      setshowFeedback(false);
      fetchApi();
    } catch (error) {
      console.log("Lỗi không thêm được feedback", error);
    }
  };

  const handleCancelFeedback = () => {
    setComment("");
    setdefaultRating(0);
    setshowFeedback(false);
  };

  //rating function
  const [defaultRating, setdefaultRating] = useState(0);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);
  //show Feedback Form
  const [showFeedback, setshowFeedback] = useState(false);
  const ItemReviewed = ({ name, rating, date, comment, img }) => (
    <View style={styles.itemBackground}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.imgBorder}>
          <Image
            source={{ uri: `${img}` }}
            style={styles.backgroundImg}
          ></Image>
        </View>
        <View
          style={{
            gap: 5,
            marginLeft: 10,
            flex: 1,
          }}
        >
          <Text style={{ color: "#000", fontWeight: 600 }}>{name}</Text>
          <View style={{ flexDirection: "row", gap: 7, alignItems: "center" }}>
            <Rating
              ratingCount={5}
              readonly
              startingValue={rating}
              imageSize={14}
            />
            <Text style={{ fontSize: 12 }}>{date}</Text>
          </View>
          <View style={{ flexShrink: 1 }}>
            <Text
              style={{
                color: "#498553",
                fontWeight: "400",
                fontSize: 11,
                flexShrink: 1,
              }}
            >
              {comment}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );

  const ItemUnreviewed = ({
    orderID,
    customerID,
    productID,
    img,
    name,
    price,
  }) => (
    <View style={styles.itemBackground}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.imgBorder}>
          <Image
            source={{ uri: `${img}` }}
            style={styles.backgroundImg}
          ></Image>
        </View>
        <View style={{ justifyContent: "space-between", marginLeft: 10 }}>
          <Text style={{ color: "#000", fontWeight: 600 }}>{name}</Text>
          <Text style={{ color: "#498553", fontWeight: 600 }}>${price}</Text>
        </View>
        <TouchableOpacity
          style={styles.feedBackBut}
          onPress={() => handleAddFeedback(orderID, productID)}
        >
          <Text style={{ color: "#fff", fontWeight: 400, fontSize: 11 }}>
            {t("Feedback")}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  //renderItem
  const renderItemUnreviewed = ({ item }) => (
    <ItemUnreviewed
      img={item.product.images[0].imageURL}
      name={item.product.productName}
      price={item.product.price}
      orderID={item.orderID}
      productID={item.product.productID}
    />
  );

  const renderItemReviewed = ({ item }) => (
    <ItemReviewed
      name={item.product.productName}
      comment={item.comment}
      rating={item.point}
      date={formatDate(item.feedbackTime)}
      img={item.product.images[0].imageURL}
    />
  );

  //set View
  const [reviewed, setReviewed] = useState(false);

  //chuyển đổi view giữa unreviewed và reviewed
  const handleUnreviewed = () => {
    if (reviewed == true) {
      setReviewed(false);
    }
  };

  const handleReviewed = () => {
    if (reviewed == false) {
      setReviewed(true);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <View style={{ paddingHorizontal: 15 }}>
        <StatusBar></StatusBar>
        <Pagetitle title={t("MyFeedback")} navigation={navigation}></Pagetitle>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          {/* Unreview */}
          <TouchableOpacity
            style={styles.tagContainer}
            onPress={handleUnreviewed}
          >
            <Text
              style={[
                styles.tagTitle,
                { color: reviewed === true ? "#6F6A61" : "#498553" },
              ]}
            >
              {t("Unreviewed")}
            </Text>
            {!reviewed && <View style={styles.underline}></View>}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tagContainer}
            onPress={handleReviewed}
          >
            <Text
              style={[
                styles.tagTitle,
                { color: reviewed === false ? "#6F6A61" : "#498553" },
              ]}
            >
              {t("Reviewed")}
            </Text>
            {reviewed && <View style={styles.underline}></View>}
          </TouchableOpacity>
        </View>
        {/* list item */}
        {!reviewed && (
          <View
            style={{
              paddingTop: 5,
              width: "100%",
              marginTop: 10,
            }}
          >
            <FlatList
              data={unreviewed}
              renderItem={renderItemUnreviewed}
              keyExtractor={(item) => item.id}
              style={{ width: "100%" }}
            ></FlatList>
          </View>
        )}
        {reviewed && (
          <View
            style={{
              paddingTop: 5,
              width: "100%",
              marginTop: 10,
            }}
          >
            <FlatList
              data={plantReviewed}
              renderItem={renderItemReviewed}
              keyExtractor={(item) => item.id}
              style={{ width: "100%" }}
            ></FlatList>
          </View>
        )}
      </View>
      {showFeedback && (
        <Modal animationType="fade" transparent={true}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <View style={styles.Formcontainer}>
              <View style={styles.feedbackForm}>
                <Text
                  style={{ fontSize: 16, color: "#498553", fontWeight: "600" }}
                >
                  {" "}
                  {t("Review")}
                </Text>
                <View style={styles.customRatingbar}>
                  {maxRating.map((item, key) => {
                    return (
                      <TouchableOpacity
                        activeOpacity={0.7}
                        key={item}
                        onPress={() => setdefaultRating(item)}
                      >
                        <FontAwesome
                          name={item <= defaultRating ? "star" : "star-o"}
                          size={30}
                          color="yellow"
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <View>
                  <TextInput
                    multiline
                    numberOfLines={4}
                    style={styles.inputLabel}
                    value={comment}
                    onChangeText={(e) => setComment(e)}
                  ></TextInput>
                </View>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <TouchableOpacity
                    style={styles.cancelButtonStyle}
                    onPress={handleCancelFeedback}
                  >
                    <Text
                      style={{ fontSize: 12, color: "#fff", fontWeight: 500 }}
                    >
                      {t("Cancel")}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.saveButtonStyle}
                    onPress={() => handleSaveFeedback()}
                  >
                    <Text
                      style={{ fontSize: 12, color: "#fff", fontWeight: 500 }}
                    >
                      {t("save")}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};

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
    marginBottom: 15,
  },
  backgroundImg: {
    position: "absolute",
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  tagContainer: {
    width: "50%",
    alignItems: "center",
  },
  underline: {
    backgroundColor: "#498553",
    height: 2,
    width: "100%",
    marginTop: 3,
  },
  tagTitle: {
    fontWeight: 600,
    fontSize: 16,
  },
  imgBorder: {
    backgroundColor: "#DAF1D4",
    height: 60,
    width: 49,
    borderRadius: 5,
  },
  feedBackBut: {
    height: 20,
    width: 90,
    backgroundColor: "#498553",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  feedbackForm: {
    width: 350,
    height: 320,
    borderWidth: 1,
    borderColor: "#498553",
    backgroundColor: "#fff",
    borderRadius: 20,
    zIndex: 1,
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 20,
    justifyContent: "space-between",
  },
  Formcontainer: {
    position: "absolute",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  customRatingbar: {
    flexDirection: "row",
    gap: 10,
  },
  inputLabel: {
    width: 320,
    height: 185,
    borderWidth: 1,
    borderColor: "#498553",
    borderRadius: 10,
    paddingLeft: 10,
    textAlignVertical: "top",
    paddingTop: 15,
  },
  cancelButtonStyle: {
    height: 30,
    width: 80,
    borderRadius: 10,
    backgroundColor: "#E71818",
    justifyContent: "center",
    alignItems: "center",
  },
  saveButtonStyle: {
    height: 30,
    width: 80,
    borderRadius: 10,
    backgroundColor: "#498553",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MyFeedback;
