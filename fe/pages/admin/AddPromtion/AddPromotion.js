import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ActivityIndicator,
  Modal,
  ScrollView,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Fontisto } from "@expo/vector-icons";
import Pagetitle from "../../../components/pagetitle";
import { SafeAreaView } from "react-native-safe-area-context";
import voucherAPI from "../../../../Api/VoucherApi";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useTranslation } from "react-i18next";

const avt = require("../../../../assets/images/Logo.png");

const AddPromotion = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  const { t } = useTranslation();

  const [voucher, setVoucher] = useState({});
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [showDP, setShowDP] = useState(false);
  const [mode, setMode] = useState("date");

  const [selectedDateEnd, setSelectedDateEnd] = useState(new Date());
  const [selectedTimeEnd, setSelectedTimeEnd] = useState(null);
  const [showDPEnd, setShowDPEnd] = useState(false);
  const [modeEnd, setModeEnd] = useState("date");

  const [dateBegin, setDateBegin] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  const formatDate = (date) => {
    const inputDate = new Date(date);

    const year = inputDate.getUTCFullYear();
    const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
    const day = inputDate.getDate().toString().padStart(2, "0");

    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate;
  };

  const onChange = (event, date) => {
    let currentDate = date || selectedDate; // Use the newly selected date/time or keep the existing one
    setSelectedDate(currentDate); // Update the selected date
    setDateBegin(currentDate);
    setShowDP(false);
  };

  const onChangeEnd = (event, dateEnd) => {
    let currentDate = dateEnd || selectedDateEnd; // Use the newly selected date/time or keep the existing one
    setSelectedDateEnd(currentDate); // Update the selected date
    setDateEnd(currentDate);
    setShowDPEnd(false);
  };

  const HandleUpdate = async () => {
    const customerType =
      selectedType === "All"
        ? 1
        : selectedType === "Silver"
        ? 2
        : selectedType === "Gold"
        ? 3
        : selectedType === "Diamond"
        ? 4
        : 1;
    return await voucherAPI
      .newVoucher(name, dateBegin, dateEnd, value, customerType)
      .then((res) => {
        navigation.navigate("PromotionAdmin");
        Alert.alert("Add voucher successfully");
      })
      .catch((error) => {
        Alert.alert("Cannot add voucher");
        console.log("Error: ", error);
      });
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#F5F5F5",
        flex: 1,
        paddingHorizontal: 15,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="dark"></StatusBar>
        <Pagetitle
          title={t("newPromotion")}
          navigation={navigation}
        ></Pagetitle>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 30,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "#498553",
              fontWeight: 700,
            }}
          >
            {t("promotionName")}
          </Text>
          <TextInput
            style={{
              marginTop: 5,
              height: 55,
              backgroundColor: "#fff",
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#498553",
              paddingStart: 10,
              fontSize: 16,
              color: "#498553",
            }}
            value={name}
            onChangeText={(e) => setName(e)}
          ></TextInput>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "#498553",
              fontWeight: 700,
            }}
          >
            {t("startDate")}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextInput
              style={{
                marginTop: 5,
                height: 55,
                backgroundColor: "#fff",
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#498553",
                paddingStart: 10,
                paddingEnd: 50,
                fontSize: 15,
                color: "#498553",
                width: "100%",
              }}
            >
              {formatDate(dateBegin)}
            </TextInput>
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 10,
              }}
              onPress={() => setShowDP(true)}
            >
              <FontAwesome name="calendar" size={28} color="#498553" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "#498553",
              fontWeight: 700,
            }}
          >
            {t("expiredDate")}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextInput
              style={{
                marginTop: 5,
                height: 55,
                backgroundColor: "#fff",
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#498553",
                paddingStart: 10,
                paddingEnd: 50,
                fontSize: 15,
                color: "#498553",
                width: "100%",
              }}
            >
              {formatDate(dateEnd)}
            </TextInput>
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 10,
              }}
              onPress={() => setShowDPEnd(true)}
            >
              <FontAwesome name="calendar" size={28} color="#498553" />
            </TouchableOpacity>
          </View>
        </View>
        {/* vị trí này */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "#498553",
              fontWeight: 700,
            }}
          >
            {t("AppliedCustomer")}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextInput
              style={{
                marginTop: 5,
                height: 55,
                backgroundColor: "#fff",
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#498553",
                paddingStart: 10,
                paddingEnd: 50,
                fontSize: 15,
                color: "#498553",
                width: "100%",
              }}
              value={selectedType} // Hiển thị giá trị đã chọn
              editable={false}
            />
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 10,
              }}
              onPress={() => setModalVisible(true)} // Hiển thị modal
            >
              <Text style={{ color: "#498553", fontWeight: 600 }}>Chọn</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "#498553",
              fontWeight: 700,
            }}
          >
            {t("discountValue")} (%)
          </Text>
          <TextInput
            style={{
              marginTop: 5,
              height: 55,
              backgroundColor: "#fff",
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#498553",
              paddingStart: 10,
              fontSize: 15,
              color: "#498553",
            }}
            value={value.toString()}
            onChangeText={(e) => setValue(e)}
          ></TextInput>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 80,
          }}
        >
          <TouchableOpacity
            style={{
              height: 50,
              backgroundColor: "#498553",
              width: 250,
              borderRadius: 5,
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={HandleUpdate}
          >
            <Text
              style={{
                fontWeight: 700,
                color: "#fff",
                fontSize: 16,
              }}
            >
              {t("add")}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              width: "80%",
              padding: 20,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#498553",
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 15,
              }}
            >
              {t("selectType")}
            </Text>
            {["All", "Silver", "Gold", "Diamond"].map((type) => (
              <TouchableOpacity
                key={type}
                style={{
                  padding: 10,
                  marginVertical: 5,
                  backgroundColor: "#fff",
                  borderColor: selectedType === type ? "#498553" : "#000", // Thay đổi borderColor
                  borderWidth: 1,
                  borderRadius: 10,
                  width: "100%",
                  alignItems: "center",
                }}
                onPress={() => setSelectedType(type)} // Cập nhật loại chọn
              >
                <Text
                  style={{
                    color: selectedType === type ? "#498553" : "#000",
                    fontWeight: "600",
                  }}
                >
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={{
                marginTop: 15,
                padding: 10,
                backgroundColor: "#498553",
                borderRadius: 5,
                width: "100%",
                alignItems: "center",
              }}
              onPress={() => setModalVisible(false)} // Đóng modal
            >
              <Text style={{ color: "#fff", fontWeight: "600" }}>
                {t("submit")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {showDP && (
        <RNDateTimePicker
          mode={mode}
          display={mode === "date" ? "calendar" : "spinner"}
          value={selectedDate}
          onChange={onChange}
        />
      )}
      {showDPEnd && (
        <RNDateTimePicker
          mode={modeEnd}
          display={modeEnd === "date" ? "calendar" : "spinner"}
          value={selectedDateEnd}
          onChange={onChangeEnd}
        />
      )}
    </SafeAreaView>
  );
};

export default AddPromotion;
