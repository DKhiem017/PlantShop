import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Pagetitle from "../../../components/pagetitle";
import { FontAwesome } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { TextInput } from "react-native-gesture-handler";
import feedbackApi from "../../../../Api/FeedbackApi";
import { Rating } from "react-native-ratings";

const plant_img = require("../../../../assets/images/Monstera_tran.png");

const plantReviewed = [
  {
    id: 1,
    name: "Monstera",
    rating: "4.5",
    date: "05/04/2024",
    comment: "Hàng đẹp, chất lượng",
  },
  {
    id: 2,
    name: "Fiddle Leaf Fig",
    rating: "4",
    date: "05/04/2024",
    comment: "Hàng đẹp, chất lượng",
  },
];

const MyFeedback = ({ navigation }) => {
  //format Date
  const formatDate = (date) => {
    const inputDate = new Date(date);

    const year = inputDate.getUTCFullYear();
    const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
    const day = inputDate.getDate().toString().padStart(2, "0");

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };
  //fetch Api
  const [loading, setLoading] = useState(true);
  const [unreviewed, setUnreviewed] = useState([]);
  const [plantReviewed, setPlantReviewed] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const reviewedList = await feedbackApi.getReviewedFeedback("CS0001");
        console.log("success", reviewedList);
        setPlantReviewed(reviewedList);
        setLoading(false);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchApi();
  }, []);
  //rating function
  const [defaultRating, setdefaultRating] = useState(0);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);
  //show Feedback Form
  const [showFeedback, setshowFeedback] = useState(false);
  const ItemReviewed = ({ name, rating, date, comment }) => (
    <View style={styles.itemBackground}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.imgBorder}>
          <Image source={plant_img} style={styles.backgroundImg}></Image>
        </View>
        <View style={{ justifyContent: "space-between", marginLeft: 10 }}>
          <Text style={{ color: "#000", fontWeight: 600 }}>{name}</Text>
          <View style={{ flexDirection: "row", gap: 2, alignItems: "center" }}>
            <FontAwesome name="star" size={12} color="#498553" />
            <Text style={{ color: "#498553", marginRight: 5, fontSize: 12 }}>
              {rating}
            </Text>
            <Text style={{ fontSize: 12 }}>{date}</Text>
          </View>
          <Text style={{ color: "#498553", fontWeight: 400, fontSize: 11 }}>
            {comment}
          </Text>
        </View>
      </View>
    </View>
  );

  const ItemUnreviewed = ({ name, price }) => (
    <View style={styles.itemBackground}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.imgBorder}>
          <Image source={plant_img} style={styles.backgroundImg}></Image>
        </View>
        <View style={{ justifyContent: "space-between", marginLeft: 10 }}>
          <Text style={{ color: "#000", fontWeight: 600 }}>{name}</Text>
          <Text style={{ color: "#498553", fontWeight: 600 }}>${price}</Text>
        </View>
        <TouchableOpacity
          style={styles.feedBackBut}
          onPress={() => setshowFeedback(true)}
        >
          <Text style={{ color: "#fff", fontWeight: 400, fontSize: 11 }}>
            Feedback
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  //renderItem
  const renderItemUnreviewed = ({ item }) => (
    <ItemUnreviewed name={item.name} price={item.price} />
  );

  const renderItemReviewed = ({ item }) => (
    <ItemReviewed
      name={item.product.productName}
      comment={item.comment}
      rating={item.point}
      date={item.formatDate(feebackTime)}
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
      <View>
        <StatusBar></StatusBar>
        <Pagetitle title={"My Feedback"} navigation={navigation}></Pagetitle>
        <View
          style={{ flexDirection: "row", marginTop: 10, paddingHorizontal: 10 }}
        >
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
              Unreviewed
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
              Reviewed
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
              paddingHorizontal: 15,
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
              paddingHorizontal: 15,
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
        <View style={styles.Formcontainer}>
          <View style={styles.feedbackForm}>
            <Text style={{ fontSize: 16, color: "#498553", fontWeight: "600" }}>
              {" "}
              Review
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
              ></TextInput>
            </View>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <TouchableOpacity
                style={styles.cancelButtonStyle}
                onPress={() => setshowFeedback(false)}
              >
                <Text style={{ fontSize: 12, color: "#fff", fontWeight: 500 }}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveButtonStyle}>
                <Text style={{ fontSize: 12, color: "#fff", fontWeight: 500 }}>
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
