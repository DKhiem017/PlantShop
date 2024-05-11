import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { SearchBar } from "react-native-screens";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const avt = require("../../../../assets/images/Monstera.jpg");
const voucher = require("../../../../assets/images/Vouchers.png");
const plant_img = require("../../../../assets/images/Monstera_tran.png");
const product_background = require("../../../../assets/images/Background_Plants.png");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f3f3",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    // overflow: "scroll",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    height: 60,
  },
  avt: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 50,
  },
  avt_container: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  voucher: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  carousel_dot: {
    backgroundColor: "#d9d9d9",
    height: 11,
    width: 11,
    borderRadius: 50,
    marginRight: 5,
  },
  carousel_dot_active: {
    backgroundColor: "#498553",
    height: 11,
    width: 11,
    borderRadius: 50,
    marginRight: 5,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.header}>
        <TouchableOpacity style={styles.avt_container}>
          <Image source={avt} style={styles.avt} />
        </TouchableOpacity>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: 10,
          }}
        >
          <Text style={{ color: "#6F6A61", opacity: 80, fontSize: 12 }}>
            Welcome to our Store
          </Text>
          <Text style={{ color: "#498553", fontWeight: "bold", fontSize: 15 }}>
            Hoàng Phúc
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#B7E1A1",
            height: 50,
            width: 50,
            borderRadius: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            right: 0,
            position: "absolute",
          }}
        >
          <Feather name="shopping-bag" size={24} color="#498553" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Search for plants..."
          style={{
            backgroundColor: "#fff",
            height: 40,
            width: "100%",
            borderRadius: 10,
            paddingLeft: 13,
            color: "#000000",
            fontWeight: "600",
            paddingRight: 30,
          }}
        ></TextInput>
        <Feather
          style={{
            position: "absolute",
            right: 15,
            transform: [{ scaleX: -1 }],
          }}
          name="search"
          size={24}
          color="grey"
        />
      </View>
      <View
        style={{
          width: "100%",
          height: 130,
          marginTop: 15,
        }}
      >
        <Image source={voucher} style={styles.voucher}></Image>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <TouchableOpacity style={styles.carousel_dot}></TouchableOpacity>
        <TouchableOpacity style={styles.carousel_dot_active}></TouchableOpacity>
        <TouchableOpacity style={styles.carousel_dot}></TouchableOpacity>
      </View>
      <View
        horizontal={true}
        style={{
          height: 35,
          width: "100%",
          marginTop: 10,
          backgroundColor: "#fff",
          overflow: "scroll",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* Lối tắt */}
        <TouchableOpacity
          style={{
            height: 33,
            width: 55,
            backgroundColor: "#498553",
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <Text style={{ fontWeight: 600, color: "#fff", fontSize: 15 }}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 33,
            width: 115,
            backgroundColor: "#fff",
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
            borderWidth: 0.5,
            borderColor: "#DCE1D2",
          }}
        >
          <Text
            style={{
              fontWeight: 600,
              color: "#6F6A61",
              fontSize: 15,
              opacity: 0.8,
            }}
          >
            Best-seller
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 33,
            width: 85,
            backgroundColor: "#fff",
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
            borderWidth: 0.5,
            borderColor: "#DCE1D2",
          }}
        >
          <Text
            style={{
              fontWeight: 600,
              color: "#6F6A61",
              fontSize: 15,
              opacity: 0.8,
            }}
          >
            Indoor
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 33,
            width: 85,
            backgroundColor: "#fff",
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
            borderWidth: 0.5,
            borderColor: "#DCE1D2",
          }}
        >
          <Text
            style={{
              fontWeight: 600,
              color: "#6F6A61",
              fontSize: 15,
              opacity: 0.8,
            }}
          >
            Outdoor
          </Text>
        </TouchableOpacity>
      </View>
      {/* danh sách sản phẩm */}
      <View
        style={{
          marginTop: 10,
          display: "flex",
          flexDirection: "row",
          height: 175,
          width: "100%",
          alignItems: "center",
        }}
      >
        {/* item sản phẩm */}
        <TouchableOpacity
          style={{
            width: 130,
            height: 170,
            marginRight: 15,
          }}
        >
          {/* Ảnh nền */}
          <Image
            source={product_background}
            style={styles.backgroundImage}
          ></Image>
          <View
            style={{ height: 127, position: "absolute", top: 0, width: "100%" }}
          >
            <TouchableOpacity
              style={{
                height: 23,
                width: 23,
                backgroundColor: "#B7E1A1",
                borderRadius: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                right: 5,
                top: 5,
              }}
            >
              <AntDesign name="hearto" size={12} color="#498553" />
            </TouchableOpacity>
            <Image source={plant_img} style={styles.backgroundImage}></Image>
          </View>
          {/* Text Container */}
          <View
            style={{
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              bottom: 10,
              paddingLeft: 5,
            }}
          >
            <Text style={{ fontSize: 13, fontWeight: 600, color: "#498553" }}>
              Monstera
            </Text>
            <Text style={{ fontSize: 12, fontWeight: 600, color: "#000" }}>
              $30.55
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                position: "absolute",
                right: 10,
                bottom: 5,
              }}
            >
              <FontAwesome
                marginRight={3}
                name="star"
                size={12}
                color="#498553"
              />
              <Text style={{ fontSize: 12, color: "#498553" }}>4.5</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 130,
            height: 170,
          }}
        >
          {/* Ảnh nền */}
          <Image
            source={product_background}
            style={styles.backgroundImage}
          ></Image>
          <View
            style={{ height: 127, position: "absolute", top: 0, width: "100%" }}
          >
            <TouchableOpacity
              style={{
                height: 23,
                width: 23,
                backgroundColor: "#B7E1A1",
                borderRadius: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                right: 5,
                top: 5,
              }}
            >
              <AntDesign name="hearto" size={12} color="#498553" />
            </TouchableOpacity>
            <Image source={plant_img} style={styles.backgroundImage}></Image>
          </View>
          {/* Text Container */}
          <View
            style={{
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              bottom: 10,
              paddingLeft: 5,
            }}
          >
            <Text style={{ fontSize: 13, fontWeight: 600, color: "#498553" }}>
              Monstera
            </Text>
            <Text style={{ fontSize: 12, fontWeight: 600, color: "#000" }}>
              $30.55
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                position: "absolute",
                right: 10,
                bottom: 5,
              }}
            >
              <FontAwesome
                marginRight={3}
                name="star"
                size={12}
                color="#498553"
              />
              <Text style={{ fontSize: 12, color: "#498553" }}>4.5</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      {/* Recommend */}
      <Text style={{ fontSize: 15, color: "#498553", fontWeight: 600 }}>
        Recommend for you
      </Text>
      <View
        style={{
          marginTop: 10,
          display: "flex",
          flexDirection: "row",
          height: 175,
          width: "100%",
          alignItems: "center",
        }}
      >
        {/* item sản phẩm */}
        <TouchableOpacity
          style={{
            width: 130,
            height: 170,
            marginRight: 15,
          }}
        >
          {/* Ảnh nền */}
          <Image
            source={product_background}
            style={styles.backgroundImage}
          ></Image>
          <View
            style={{ height: 127, position: "absolute", top: 0, width: "100%" }}
          >
            <TouchableOpacity
              style={{
                height: 23,
                width: 23,
                backgroundColor: "#B7E1A1",
                borderRadius: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                right: 5,
                top: 5,
              }}
            >
              <AntDesign name="hearto" size={12} color="#498553" />
            </TouchableOpacity>
            <Image source={plant_img} style={styles.backgroundImage}></Image>
          </View>
          {/* Text Container */}
          <View
            style={{
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              bottom: 10,
              paddingLeft: 5,
            }}
          >
            <Text style={{ fontSize: 13, fontWeight: 600, color: "#498553" }}>
              Monstera
            </Text>
            <Text style={{ fontSize: 12, fontWeight: 600, color: "#000" }}>
              $30.55
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                position: "absolute",
                right: 10,
                bottom: 5,
              }}
            >
              <FontAwesome
                marginRight={3}
                name="star"
                size={12}
                color="#498553"
              />
              <Text style={{ fontSize: 12, color: "#498553" }}>4.5</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 130,
            height: 170,
          }}
        >
          {/* Ảnh nền */}
          <Image
            source={product_background}
            style={styles.backgroundImage}
          ></Image>
          <View
            style={{ height: 127, position: "absolute", top: 0, width: "100%" }}
          >
            <TouchableOpacity
              style={{
                height: 23,
                width: 23,
                backgroundColor: "#B7E1A1",
                borderRadius: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                right: 5,
                top: 5,
              }}
            >
              <AntDesign name="hearto" size={12} color="#498553" />
            </TouchableOpacity>
            <Image source={plant_img} style={styles.backgroundImage}></Image>
          </View>
          {/* Text Container */}
          <View
            style={{
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              bottom: 10,
              paddingLeft: 5,
            }}
          >
            <Text style={{ fontSize: 13, fontWeight: 600, color: "#498553" }}>
              Monstera
            </Text>
            <Text style={{ fontSize: 12, fontWeight: 600, color: "#000" }}>
              $30.55
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                position: "absolute",
                right: 10,
                bottom: 5,
              }}
            >
              <FontAwesome
                marginRight={3}
                name="star"
                size={12}
                color="#498553"
              />
              <Text style={{ fontSize: 12, color: "#498553" }}>4.5</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;
