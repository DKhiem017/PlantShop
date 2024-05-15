import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Pagetitle from "../../../components/pagetitle";

const styles = StyleSheet.create({
  itembackground: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
    width: "100%",
    padding: 9,
  },
});

const MyAddress = () => {
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
        <Pagetitle title={"My Address"}></Pagetitle>
        {/* add address */}
        <View style={{ marginTop: 15, width: "100%", alignItems: "flex-end" }}>
          <TouchableOpacity
            style={{
              height: 25,
              width: 110,
              backgroundColor: "#498553",
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              //   position: "absolute",
              //   right: 0,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 11, fontWeight: 500 }}>
              Add new Address
            </Text>
          </TouchableOpacity>
        </View>
        {/* item */}
        <View style={{ marginTop: 20, gap: 15 }}>
          {/* item default */}
          <View style={styles.itembackground}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              {/* Text Container */}
              <View style={{ gap: 5 }}>
                <View style={{ flexDirection: "row", gap: 3 }}>
                  <Text style={{ fontSize: 12, color: "#498553" }}>
                    Hoàng Phúc
                  </Text>
                  <Text style={{ fontSize: 12, color: "#498553" }}>|</Text>
                  <Text style={{ fontSize: 12, color: "#498553" }}>
                    0961826917
                  </Text>
                </View>
                <View style={{ flexDirection: "row", gap: 3 }}>
                  <Text style={{ fontSize: 12, color: "#498553" }}>
                    Tân Lập, Đông Hoà, Dĩ An, Bình Dương
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
                  <Text style={{ color: "#EAC100", fontSize: 10 }}>
                    Default
                  </Text>
                </View>
              </View>
              {/* edit button */}
              <TouchableOpacity>
                <Text
                  style={{ fontSize: 12, fontWeight: 500, color: "#627FE7" }}
                >
                  Edit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* item new */}
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
                    <Text style={{ fontSize: 12, color: "#498553" }}>
                      Hoàng Phúc
                    </Text>
                    <Text style={{ fontSize: 12, color: "#498553" }}>|</Text>
                    <Text style={{ fontSize: 12, color: "#498553" }}>
                      0961826917
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", gap: 3 }}>
                    <Text style={{ fontSize: 12, color: "#498553" }}>
                      45b, đường số 8, Linh Trung, Thủ Đức
                    </Text>
                  </View>
                </View>
                {/* edit button */}
                <TouchableOpacity>
                  <Text
                    style={{ fontSize: 12, fontWeight: 500, color: "#627FE7" }}
                  >
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ width: "100%", alignItems: "flex-end" }}>
                <TouchableOpacity
                  style={{
                    width: 96,
                    height: 20,
                    borderRadius: 5,
                    backgroundColor: "#498553",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ color: "#fff", fontSize: 11, fontWeight: 500 }}
                  >
                    Set as default
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyAddress;
