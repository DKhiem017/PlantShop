import React, { useState, useCallback } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { GiftedChat, Send, Actions } from "react-native-gifted-chat";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import chatBotApi from "../../../Api/ChatBotApi"; // Import API
import ApiURL from "../../../constants/baseURL";
import axios from "axios";

const chatBotImg = require("../../../assets/images/greeny.png");
const avt = require("../../../assets/images/Logo.png");

const ChatBot = () => {
  const apiUrl = `${ApiURL}/api/Chatbot/sendImage`;

  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: "Hi, what can I help u?",
      createdAt: new Date(),
      user: {
        _id: 0,
        name: "Bot",
        avatar: chatBotImg,
      },
    },
  ]);

  const onSend = useCallback(async (newMessages = []) => {
    const updatedMessages = newMessages.map((message) => ({
      ...message,
      user: {
        ...message.user,
        avatar: avt,
      },
    }));
    setMessages((prevMessages) =>
      GiftedChat.append(prevMessages, updatedMessages)
    );

    // Gửi tin nhắn đến API và xử lý phản hồi
    const userMessage = newMessages[0];
    try {
      const response = await chatBotApi.sendText(userMessage.text);
      const botMessage = {
        _id: Math.round(Math.random() * 1000000),
        text: response.chatbotContent, // Giả sử API trả về phản hồi dưới dạng replyText
        createdAt: new Date(),
        user: {
          _id: 0,
          name: "Bot",
          avatar: chatBotImg,
        },
      };
      setMessages((prevMessages) =>
        GiftedChat.append(prevMessages, botMessage)
      );
    } catch (error) {
    //   Alert.alert("Error", "Failed to send message.");
    }
  }, []);

  const renderSend = (props) => (
    <Send {...props}>
      <View style={styles.sendingContainer}>
        <MaterialIcons name="send" size={28} color="#498553" />
      </View>
    </Send>
  );

  const renderActions = (props) => (
    <Actions
      {...props}
      options={{ ["Send Image"]: handleImagePicker }}
      icon={() => <MaterialIcons name="photo" size={28} color="#498553" />}
    />
  );

  const handleImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Permission to access camera roll is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      const imgData = new FormData();
      imgData.append("Image", {
        uri: result.assets[0].uri,
        type: result.assets[0].mimeType,
        name: result.assets[0].fileName,
      });
      try {
        const response = await axios.post(apiUrl, imgData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        const message = {
          _id: Math.round(Math.random() * 1000000),
          createdAt: new Date(),
          user: {
            _id: 1,
            name: "Developer",
            avatar: avt,
          },
          image: result.assets[0].uri,
        };
        onSend([message]);
        const botMessage = {
          _id: Math.round(Math.random() * 1000000),
          text: response.data.chatbotContent,
          createdAt: new Date(),
          user: {
            _id: 0,
            name: "Bot",
            avatar: chatBotImg,
          },
        };
        setMessages((prevMessages) =>
          GiftedChat.append(prevMessages, botMessage)
        );
        console.log("Success: ", response.data);
      } catch (error) {}
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{ _id: 1, avatar: avt }}
        renderSend={renderSend}
        renderActions={renderActions}
        showUserAvatar
        alwaysShowSend
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sendingContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
});

export default ChatBot;
