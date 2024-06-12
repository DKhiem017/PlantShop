import React, { useState, useCallback, useEffect } from "react";
import { View, StyleSheet, Platform, Alert } from "react-native";
import { GiftedChat, Send, Actions } from "react-native-gifted-chat";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { HubConnectionBuilder } from "@microsoft/signalr";
import chatAPI from "../../../Api/ChatApi";
import axios from "axios";

const ChatBox = () => {
  const apiURL = "https://f364-171-250-164-111.ngrok-free.app/api/Chat/send-message";

  const [messages, setMessages] = useState([]);
  const [connection, setConnection] = useState(null);

  useEffect(() => {
    const connect = new HubConnectionBuilder()
      .withUrl("https://f364-171-250-164-111.ngrok-free.app/chathub")
      .withAutomaticReconnect()
      .build();

    setConnection(connect);
  }, []);

  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then(() => {
          console.log("SignalR connected");
          connection.on("ReceiveMessageAdmin", async (message) => {
            const customMessage = [{
              _id: message.messageID,
              text: message.content,
              image: message.image ? message.image : undefined,
              createdAt: new Date(message.sendTime).toISOString(),
              user: {
                _id: message.isCustomerSend === true ? 1 : 0,
                name: message.isCustomerSend === true ? 'You' : 'Customer'
              }
            }]
            setMessages((prevMessage) => GiftedChat.append(prevMessage, customMessage))
          });
        })
        .catch((error) => {
          console.error("Error starting SignalR connection:", error);
        });
    }
  }, [connection]);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await chatAPI.getMessages("CS0003");
        console.log("Res: ", res)
        setMessages([
          ...res.map((msg) => {
            return {
              _id: msg.messageID,
              text: msg.content,
              createdAt: new Date(msg.sendTime),
              user: {
                _id: msg.isCustomerSend === true ? 1 : 0,
                name: msg.isCustomerSend === true ? 'You' : 'Customer'
              },
              image: msg.image ? msg.image : undefined,
            }
          })])
      }
      catch (error) {
        console.log("Error: ", error);
      }
    }

    fetchAPI();
  }, []);

  const handleSendMessage = async (imgChoose, imgURL, type, fileName, content) => {
    const formData = new FormData();
    formData.append("CustomerID", "CS0003");
    formData.append("Content", content);
    formData.append("IsCustomerSend", true);
    if (imgChoose) {
      formData.append("Image", {
        uri: imgURL,
        type: type,
        name: fileName,
      });
    } else {
      formData.append("Image", "");
    }

    console.log("Form: ", formData)
    try {
      const updatedata = await axios.post(apiURL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const onSend = useCallback((messages = []) => {
    handleSendMessage(false, "", "", "", messages[0].text);
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <MaterialIcons name="send" size={28} color="#498553" />
        </View>
      </Send>
    );
  };

  const renderActions = (props) => {
    return (
      <Actions
        {...props}
        options={{
          ["Send Image"]: handleImagePicker,
        }}
        icon={() => <MaterialIcons name="photo" size={28} color="#498553" />}
        onSend={(args) => console.log(args)}
      />
    );
  };

  const handleImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Permission to access camera roll is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const message = {
        _id: Math.round(Math.random() * 1000000),
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "Developer",
        },
        image: result.assets[0].uri,
      };
      handleSendMessage(
        true,
        result.assets[0].uri,
        result.assets[0].mimeType,
        result.assets[0].fileName,
        "");
      onSend([message]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
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

export default ChatBox;
