import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Pagetitle from "../../../components/pagetitle";
import { useEffect, useState } from "react";
import addressAPI from "../../../../Api/AddressApi";

const styles = StyleSheet.create({
  itembackground: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "100%",
    padding: 9,
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    color: "#498553",
  },
});

const MyAddress = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await addressAPI.getAll("CS0001")
        console.log("success: ", response);
        setData(response);
        setLoading(false);
      }
      catch (error) {
        console.log("Error: ", error);
        setLoading(false);
      }
    }

    fetchAPI()
  }, [])

  const HandleDetailAddress = (addressID) => {
    navigation.navigate("DetailAddress", {
      id: addressID,
    })
  }

  const Item = ({ name, phone, address, isDefault, id }) => {
    if (isDefault) {
      return (
        <View style={styles.itembackground}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {/* Text Container */}
            <View style={{ gap: 5 }}>
              <View style={{ flexDirection: "row", gap: 3 }}>
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.text}>|</Text>
                <Text style={styles.text}>{phone}</Text>
              </View>
              <View style={{ flexDirection: "row", gap: 3 }}>
                <Text style={styles.text}>
                  {address}
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "#EAC100",
                  width: 85,
                  height: 20,
                }}
              >
                <Text style={{ color: "#EAC100", fontSize: 11 }}>
                  Default
                </Text>
              </View>
            </View>
            {/* edit button */}
            <TouchableOpacity onPress={() => HandleDetailAddress(id)}>
              <Text
                style={{ fontSize: 13, fontWeight: 500, color: "#627FE7" }}
              >
                Edit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
    else {
      return (
        <View style={styles.itembackground}>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {/* Text Container */}
              <View style={{ gap: 5 }}>
                <View style={{ flexDirection: "row", gap: 3 }}>
                  <Text style={styles.text}>{name}</Text>
                  <Text style={styles.text}>|</Text>
                  <Text style={styles.text}>{phone}</Text>
                </View>
                <View style={{ flexDirection: "row", gap: 3 }}>
                  <Text style={styles.text}>
                    {address}
                  </Text>
                </View>
              </View>
              {/* edit button */}
              <TouchableOpacity>
                <Text
                  style={{ fontSize: 13, fontWeight: 500, color: "#627FE7" }}
                >
                  Edit
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: "100%", alignItems: "flex-end" }}>
              <TouchableOpacity
                style={{
                  width: 96,
                  paddingVertical: 5,
                  borderRadius: 5,
                  backgroundColor: "#498553",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ color: "#fff", fontSize: 12, fontWeight: 500 }}
                >
                  Set as default
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingLeft: 15,
        paddingRight: 15,
      }}
    >
      <View>
        <StatusBar></StatusBar>
        <Pagetitle title={"My Address"} navigation={navigation}></Pagetitle>
        {/* add address */}
        <View style={{ marginTop: 15, width: "100%", alignItems: "flex-end" }}>
          <TouchableOpacity
            style={{
              padding: 5,
              width: 110,
              backgroundColor: "#498553",
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              //   position: "absolute",
              //   right: 0,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 12, fontWeight: 500 }}>
              Add new Address
            </Text>
          </TouchableOpacity>
        </View>
        {/* item */}
        <View style={{ marginTop: 20, gap: 15 }}>
          {/* item default */}
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Item id={item.id}
                name={item.receiverName}
                phone={item.phone}
                address={item.address}
                isDefault={item.isDefault} />
            )}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyAddress;
