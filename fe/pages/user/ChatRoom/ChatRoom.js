import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Pagetitle from "../../../components/pagetitle";
import { TouchableOpacity } from "react-native-gesture-handler";

const avt = require("../../../../assets/images/avt_girl.jpg");
const chatBotImg = require("../../../../assets/images/chatBot.png");

const styles = StyleSheet.create({
  chatBackground: {
    paddingVertical: 8,
    paddingLeft: 20,
    backgroundColor: "#fff",
  },
  backgroundImg: {
    position: "absolute",
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: 50,
  },
});

const ChatRoom = ({ navigation }) => {
  const ChatNavigator = () => {
    navigation.navigate("ChatBoxScreen", {});
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <StatusBar></StatusBar>
      <View>
        <Pagetitle title={"Chat"} navigation={navigation}></Pagetitle>
        {/* Chat Container */}
        <View style={{ marginTop: 20, gap: 5 }}>
          <TouchableOpacity
            style={styles.chatBackground}
            onPress={ChatNavigator}
          >
            <View style={{ flexDirection: "row" }}>
              {/* avt */}
              <View style={{ height: 40, width: 40, borderRadius: 50 }}>
                <Image source={avt} style={styles.backgroundImg}></Image>
              </View>
              <View style={{ justifyContent: "space-between", marginLeft: 15 }}>
                <Text style={{ fontWeight: 600 }}>Admin</Text>
                <Text style={{ color: "#6F6A61" }}>
                  Bạn: Shop ơi cho em hỏi...
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatBackground}>
            <View style={{ flexDirection: "row" }}>
              {/* avt */}
              <View style={{ height: 40, width: 40, borderRadius: 50 }}>
                <Image source={chatBotImg} style={styles.backgroundImg}></Image>
              </View>
              <View style={{ justifyContent: "space-between", marginLeft: 15 }}>
                <Text style={{ fontWeight: 600 }}>Greeny</Text>
                <Text style={{ color: "#6F6A61" }}>
                  Hi, what can i help you?
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatRoom;
