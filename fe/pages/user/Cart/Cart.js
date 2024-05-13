import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import Pagetitle from "../../../components/pagetitle";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const backgroundImage = require("../../../../assets/images/Monstera_tran.png");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f3f3",
    height: "100%",
    paddingLeft: 15,
    paddingRight: 15,
  },
  itembackground: {
    backgroundColor: "#fff",
    borderRadius: 5,
    width: 330,
    height: 80,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 15,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  totalBackground: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
    height: 90,
    backgroundColor: "#fff",
    bottom: 40,
    position: "relative",
    borderRadius: 5,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: "center",
  },
});

const Cart = () => {
  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <Pagetitle title={"My Cart"}></Pagetitle>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          paddingLeft: 10,
          marginTop: 10,
        }}
      >
        <TouchableOpacity>
          <Text style={{ fontSize: 15, color: "#498553", fontWeight: 600 }}>
            All Items
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ position: "absolute", right: 0 }}>
          <Text style={{ fontSize: 15, color: "#6F6A61", fontWeight: 600 }}>
            Delete All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ marginTop: 20 }}>
        <View
          style={{
            height: 400,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 10,
            overflow: "scroll",
          }}
        >
          <View style={styles.itembackground}>
            <View
              style={{
                width: 50,
                height: 60,
                backgroundColor: "#DAF1D4",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <Image
                source={backgroundImage}
                style={styles.backgroundImage}
              ></Image>
            </View>
            {/* Thông tin sản phẩm */}
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 10,
                height: "100%",
                width: 150,
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  position: "absolute",
                  top: 10,
                }}
              >
                Monstera
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#498553",
                  position: "absolute",
                  bottom: 10,
                }}
              >
                $ 30.55
              </Text>
            </View>
            <View
              style={{
                height: "100%",
                width: 60,
                position: "absolute",
                right: 5,
              }}
            >
              <TouchableOpacity
                style={{ position: "absolute", top: 10, right: 5 }}
              >
                <MaterialCommunityIcons
                  name="trash-can"
                  size={20}
                  color="#498553"
                />
              </TouchableOpacity>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  position: "absolute",
                  bottom: 10,
                  right: 8,
                }}
              >
                <TouchableOpacity
                  style={{
                    height: 15,
                    width: 15,
                    backgroundColor: "#D9D9D9",
                    borderRadius: 3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 5,
                  }}
                >
                  <AntDesign name="minus" size={12} color="#fff" />
                </TouchableOpacity>
                <Text style={{ fontSize: 15, fontWeight: 500, marginRight: 5 }}>
                  1
                </Text>
                <TouchableOpacity
                  style={{
                    height: 15,
                    width: 15,
                    backgroundColor: "#498553",
                    borderRadius: 3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AntDesign name="plus" size={10} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.itembackground}>
            <View
              style={{
                width: 50,
                height: 60,
                backgroundColor: "#DAF1D4",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <Image
                source={backgroundImage}
                style={styles.backgroundImage}
              ></Image>
            </View>
            {/* Thông tin sản phẩm */}
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 10,
                height: "100%",
                width: 150,
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  position: "absolute",
                  top: 10,
                }}
              >
                Monstera
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#498553",
                  position: "absolute",
                  bottom: 10,
                }}
              >
                $ 30.55
              </Text>
            </View>
            <View
              style={{
                height: "100%",
                width: 60,
                position: "absolute",
                right: 5,
              }}
            >
              <TouchableOpacity
                style={{ position: "absolute", top: 10, right: 5 }}
              >
                <MaterialCommunityIcons
                  name="trash-can"
                  size={20}
                  color="#498553"
                />
              </TouchableOpacity>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  position: "absolute",
                  bottom: 10,
                  right: 8,
                }}
              >
                <TouchableOpacity
                  style={{
                    height: 15,
                    width: 15,
                    backgroundColor: "#D9D9D9",
                    borderRadius: 3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 5,
                  }}
                >
                  <AntDesign name="minus" size={12} color="#fff" />
                </TouchableOpacity>
                <Text style={{ fontSize: 15, fontWeight: 500, marginRight: 5 }}>
                  1
                </Text>
                <TouchableOpacity
                  style={{
                    height: 15,
                    width: 15,
                    backgroundColor: "#498553",
                    borderRadius: 3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AntDesign name="plus" size={10} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.itembackground}>
            <View
              style={{
                width: 50,
                height: 60,
                backgroundColor: "#DAF1D4",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <Image
                source={backgroundImage}
                style={styles.backgroundImage}
              ></Image>
            </View>
            {/* Thông tin sản phẩm */}
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 10,
                height: "100%",
                width: 150,
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  position: "absolute",
                  top: 10,
                }}
              >
                Monstera
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#498553",
                  position: "absolute",
                  bottom: 10,
                }}
              >
                $ 30.55
              </Text>
            </View>
            <View
              style={{
                height: "100%",
                width: 60,
                position: "absolute",
                right: 5,
              }}
            >
              <TouchableOpacity
                style={{ position: "absolute", top: 10, right: 5 }}
              >
                <MaterialCommunityIcons
                  name="trash-can"
                  size={20}
                  color="#498553"
                />
              </TouchableOpacity>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  position: "absolute",
                  bottom: 10,
                  right: 8,
                }}
              >
                <TouchableOpacity
                  style={{
                    height: 15,
                    width: 15,
                    backgroundColor: "#D9D9D9",
                    borderRadius: 3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 5,
                  }}
                >
                  <AntDesign name="minus" size={12} color="#fff" />
                </TouchableOpacity>
                <Text style={{ fontSize: 15, fontWeight: 500, marginRight: 5 }}>
                  1
                </Text>
                <TouchableOpacity
                  style={{
                    height: 15,
                    width: 15,
                    backgroundColor: "#498553",
                    borderRadius: 3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AntDesign name="plus" size={10} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.itembackground}>
            <View
              style={{
                width: 50,
                height: 60,
                backgroundColor: "#DAF1D4",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <Image
                source={backgroundImage}
                style={styles.backgroundImage}
              ></Image>
            </View>
            {/* Thông tin sản phẩm */}
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 10,
                height: "100%",
                width: 150,
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  position: "absolute",
                  top: 10,
                }}
              >
                Monstera
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#498553",
                  position: "absolute",
                  bottom: 10,
                }}
              >
                $ 30.55
              </Text>
            </View>
            <View
              style={{
                height: "100%",
                width: 60,
                position: "absolute",
                right: 5,
              }}
            >
              <TouchableOpacity
                style={{ position: "absolute", top: 10, right: 5 }}
              >
                <MaterialCommunityIcons
                  name="trash-can"
                  size={20}
                  color="#498553"
                />
              </TouchableOpacity>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  position: "absolute",
                  bottom: 10,
                  right: 8,
                }}
              >
                <TouchableOpacity
                  style={{
                    height: 15,
                    width: 15,
                    backgroundColor: "#D9D9D9",
                    borderRadius: 3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 5,
                  }}
                >
                  <AntDesign name="minus" size={12} color="#fff" />
                </TouchableOpacity>
                <Text style={{ fontSize: 15, fontWeight: 500, marginRight: 5 }}>
                  1
                </Text>
                <TouchableOpacity
                  style={{
                    height: 15,
                    width: 15,
                    backgroundColor: "#498553",
                    borderRadius: 3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AntDesign name="plus" size={10} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.totalBackground}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text style={{ color: "#6F6A61", fontWeight: 600 }}>Total:</Text>
          <Text
            style={{
              color: "#498553",
              fontWeight: 600,
              position: "absolute",
              right: 0,
            }}
          >
            $ 80
          </Text>
        </View>
        <TouchableOpacity
          style={{
            height: 35,
            width: 265,
            backgroundColor: "#498553",
            marginTop: 10,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: 600 }}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
