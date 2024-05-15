import { TouchableOpacity, View, Text, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const Searchbar = () => {
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
  );
};

export default Searchbar;
