import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Pagetitle from "../../../components/pagetitle";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import chatAPI from "../../../../Api/ChatApi";

const avt = require("../../../../assets/images/avt_girl.jpg");
const chatBotImg = require("../../../../assets/images/chatBot.png");

const styles = StyleSheet.create({
  chatBackground: {
    paddingVertical: 8,
    paddingLeft: 20,
    backgroundColor: "#fff",
    marginBottom: 5,
    borderTopColor: "#cdcdcd",
    borderBottomColor: "#cdcdcd",
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
    borderWidth: 0.5,
  },
  backgroundImg: {
    position: "absolute",
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: 50,
  },
});

const ChatRoomAdmin = ({ navigation }) => {
  const [chatRoom, setChatRoom] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await chatAPI.getAll();
        console.log("response: ", response);
        setChatRoom(response);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchApi();
  }, []);
  //item
  const Item = ({ avt, name, onPress }) => (
    <TouchableOpacity style={styles.chatBackground} onPress={onPress}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {/* avt */}
        <View style={{ height: 40, width: 40, borderRadius: 50 }}>
          <Image
            source={{ uri: `${avt}` }}
            style={styles.backgroundImg}
          ></Image>
        </View>
        <View style={{ justifyContent: "space-between", marginLeft: 15 }}>
          <Text style={{ fontWeight: 600 }}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const handleChatboxNavigation = (id) => {
    navigation.navigate("ChatBoxAdminScreen", { customerID: id });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <StatusBar></StatusBar>
      <View>
        <View style={{ paddingHorizontal: 10 }}>
          <Pagetitle title={"Chat"} navigation={navigation}></Pagetitle>
        </View>
        {/* Chat Container */}
        <View style={{ marginTop: 20, paddingTop: 5 }}>
          <FlatList
            data={chatRoom}
            renderItem={({ item }) => (
              <Item
                name={item.customer.name}
                avt={item.customer.avatar}
                onPress={() => handleChatboxNavigation(item.customerID)}
              />
            )}
            keyExtractor={(item) => item.id}
          ></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatRoomAdmin;
