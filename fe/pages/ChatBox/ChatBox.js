import React, { useState, useCallback, useEffect } from "react";
import { View, StyleSheet, Platform, Alert } from "react-native";
import { GiftedChat, Send, Actions } from "react-native-gifted-chat";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
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
