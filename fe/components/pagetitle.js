import { TouchableOpacity, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Pagetitle = ({ title }) => {
  return (
    <View
      style={{ justifyContent: "center", flexDirection: "row", width: "100%" }}
    >
      <TouchableOpacity
        style={{
          position: "absolute",
          left: 10,
        }}
      >
        <AntDesign name="arrowleft" size={28} color="#498553" />
      </TouchableOpacity>
      <Text style={{ fontSize: 18, fontWeight: 700, color: "#498553" }}>
        {title}
      </Text>
    </View>
  );
};

export default Pagetitle;
