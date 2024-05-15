import { TouchableOpacity, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Pagetitle = ({title}) => {
  return (
    <View>
      <TouchableOpacity>
        <View
          style={{
            marginLeft: 10,
            position: "absolute",
          }}
        >
          <AntDesign name="arrowleft" size={28} color="#498553" />
        </View>
      </TouchableOpacity>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 700, color: "#498553" }}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Pagetitle;
