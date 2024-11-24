import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import statisticAPI from "../../../../Api/StatisticApi";
import productAPI from "../../../../Api/ProductApi";
import { LineChart } from "react-native-chart-kit";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const report = require("../../../../assets/images/Report.png");

const OrangeBackground = require("../../../../assets/images/GradientOrange.jpg");
const VioletBackground = require("../../../../assets/images/GradientViolet.jpg");
const BlueBackground = require("../../../../assets/images/GradientBlue.jpg");
const GreenBackground = require("../../../../assets/images/GradientGreen.jpg");

const styles = StyleSheet.create({
  backgroundItem: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 7,
    height: 170,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  RevenueItem: {
    width: "49%",
    borderRadius: 5,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  backgroundimg: {
    position: "absolute",
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: 5,
  },
  backgroundImg: {
    position: "absolute",
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  topProductContainer: {
    backgroundColor: "#fff",
    paddingBottom: 10,
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
});

const Report = ({ navigation }) => {
  const currentLanguage = i18next.language;

  const [revenueYear, setRevenueYear] = useState([]);
  const [revenueMonth, setRevenueMonth] = useState(0);
  const [revenueToday, setRevenueToday] = useState(0);
  const [bill, setBill] = useState(0);
  const [topDeal, setTopDeal] = useState(0);
  const [topProduct, setTopProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { t } = useTranslation();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const thisMonth = new Date();
  const monthName = monthNames[thisMonth.getMonth()];

  //For chart
  const [months, setMonths] = useState([]);
  const [values, setValues] = useState([]);
  //let months = [];
  //let values = [];

  useFocusEffect(
    useCallback(() => {
      const fetchAPI = async () => {
        try {
          const revenueYearRes = await statisticAPI.getRevenueOfYear();
          separateMonthsAndValues(revenueYearRes);
          setRevenueYear(revenueYearRes);
          console.log("Month: ", months);
          console.log("Value: ", values);

          const revenueRes = await statisticAPI.getRevenueThisMonth();
          setRevenueMonth(revenueRes.revenue);

          const billRes = await statisticAPI.getBillsThisMonth();
          setBill(billRes);

          const revenueTodayRes = await statisticAPI.getRevenueToday();
          setRevenueToday(revenueTodayRes.revenue);

          const dealRes = await statisticAPI.getTopDealToday();
          setTopDeal(dealRes.data);

          const topProductRes = await productAPI.getBestSeller();
          setTopProduct(topProductRes);

          setLoading(false);
        } catch (error) {
          console.log("Error: ", error);
          setLoading(false);
        }
      };

      fetchAPI();

      return () => {};
    }, [])
  );

  const separateMonthsAndValues = (data) => {
    let month = [];
    let value = [];
    // Loop through each item in the data array
    for (const item of data) {
      // Extract the month and value from the item
      month.push(item.month.toString());
      value.push(item.revenue);
    }
    setMonths(month);
    setValues(value);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      {/* Header Title */}
      <View>
        <StatusBar></StatusBar>
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 700, color: "#498553" }}>
            {t("report")}
          </Text>
        </View>
      </View>
      {/* <View > */}
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#498553"
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        />
      ) : (
        <ScrollView style={{ paddingHorizontal: 8 }}>
          {/* Chart */}
          <LineChart
            data={{
              labels: months,
              datasets: [
                {
                  data: values,
                },
              ],
            }}
            width={Dimensions.get("window").width - 16} // from react-native
            height={250}
            yAxisLabel="$"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#41774a",
              backgroundGradientFrom: "#3a6b42",
              backgroundGradientTo: "#7a9f80",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "5",
                strokeWidth: "2",
                stroke: "#41774a",
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
          {/* Doanh thu */}
          <View style={{ marginTop: 10, gap: 7 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.RevenueItem}>
                <Image
                  source={OrangeBackground}
                  style={styles.backgroundimg}
                ></Image>
                <View
                  style={{
                    justifyContent: "space-between",
                    paddingVertical: 10,
                    paddingLeft: 20,
                  }}
                >
                  <Text style={{ color: "#fff" }}>{t("revenue")}</Text>
                  <Text
                    style={{ fontSize: 17, color: "#fff", fontWeight: 700 }}
                  >
                    $ {revenueMonth}
                  </Text>
                  <Text style={{ color: "#fff", fontSize: 12 }}>
                    {monthName}
                  </Text>
                </View>
              </View>
              {/* Bill */}
              <View style={styles.RevenueItem}>
                <Image
                  source={GreenBackground}
                  style={styles.backgroundimg}
                ></Image>
                <View
                  style={{
                    justifyContent: "space-between",
                    paddingVertical: 10,
                    paddingLeft: 20,
                  }}
                >
                  <Text style={{ color: "#fff" }}>{t("bills")}</Text>
                  <Text
                    style={{ fontSize: 17, color: "#fff", fontWeight: 700 }}
                  >
                    {bill}
                  </Text>
                  <Text style={{ color: "#fff", fontSize: 12 }}>
                    {monthName}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                // gap: 5,
              }}
            >
              <View style={styles.RevenueItem}>
                <Image
                  source={BlueBackground}
                  style={styles.backgroundimg}
                ></Image>
                <View
                  style={{
                    justifyContent: "space-between",
                    paddingVertical: 10,
                    paddingLeft: 20,
                  }}
                >
                  <Text style={{ color: "#fff" }}>{t("revenue")}</Text>
                  <Text
                    style={{ fontSize: 17, color: "#fff", fontWeight: 700 }}
                  >
                    $ {revenueToday}
                  </Text>
                  <Text style={{ color: "#fff", fontSize: 12 }}>Today</Text>
                </View>
              </View>
              {/* Top Deal */}
              <View style={styles.RevenueItem}>
                <Image
                  source={VioletBackground}
                  style={styles.backgroundimg}
                ></Image>
                <View
                  style={{
                    justifyContent: "space-between",
                    paddingVertical: 10,
                    paddingLeft: 20,
                  }}
                >
                  <Text style={{ color: "#fff" }}>{t("topDeal")}</Text>
                  <Text
                    style={{ fontSize: 17, color: "#fff", fontWeight: 700 }}
                  >
                    $ {topDeal}
                  </Text>
                  <Text style={{ color: "#fff", fontSize: 12 }}>Today</Text>
                </View>
              </View>
            </View>
          </View>
          {/* Top Product */}
          <View style={styles.topProductContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 16, fontWeight: 700 }}>
                Top 5 {t("products")}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontWeight: 700, color: "#6F6A61" }}>
                {t("name")}
              </Text>
              <Text
                style={{
                  width: "25%",
                  fontWeight: 700,
                  color: "#6F6A61",
                  textAlign: "right",
                }}
              >
                {t("quantity")}
              </Text>
              <Text style={{ fontWeight: 700, color: "#6F6A61" }}>
                {t("revenue")}
              </Text>
            </View>
            <ScrollView style={{ marginTop: 5 }}>
              {topProduct.map((item) => (
                <View
                  style={{
                    flexDirection: "row",
                    marginBottom: 5,
                    justifyContent: "space-between",
                  }}
                >
                  <Text>
                    {currentLanguage === "vi"
                      ? item.productNameVie
                      : item.productName}
                  </Text>
                  <Text>{item.sold}</Text>
                  <Text>$ {item.sold * item.price}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      )}
      {/* </View> */}
    </SafeAreaView>
  );
};

export default Report;
