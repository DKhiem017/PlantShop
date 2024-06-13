import { TouchableOpacity, View, Text, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

const Searchbar = ({ placeholder, onPress, onChangeText, searchCharacter }) => {

  return (
    <View
      style={{
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <TextInput
        placeholder={placeholder}
        style={{
          backgroundColor: "#fff",
          height: 40,
          width: "100%",
          borderRadius: 10,
          paddingLeft: 13,
          color: "#000000",
          fontWeight: "600",
          paddingRight: 30,
          borderWidth: 0.5,
          borderColor: '#6F6A61'
        }}
        value={searchCharacter}
        onChangeText={onChangeText}
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
        onPress={onPress}
      />
    </View>
  );
};

export default Searchbar;
