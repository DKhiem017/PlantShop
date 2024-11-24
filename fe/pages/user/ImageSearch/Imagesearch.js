import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useTranslation } from "react-i18next";

const Imagesearch = ({ navigation }) => {
  const { t } = useTranslation();
  const handleCameraNavigation = () => {
    navigation.navigate("Camera");
  };

  const handleChoosePicture = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({ base64: true });

    if (!result.canceled) {
      navigation.navigate("ResultScreen", {
        photo: result.assets[0].uri,
        filename: result.assets[0].fileName,
        type: result.assets[0].mimeType,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "#498553" }}>
        {t("ChooseYourOption")}
      </Text>
      <View style={styles.optionContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={handleCameraNavigation}
        >
          <Entypo name="camera" size={70} color="#498553" />
          <Text style={{ color: "#498553", fontSize: 15, fontWeight: "bold" }}>
            {t("TakeAPhoto")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={handleChoosePicture}
        >
          <MaterialIcons name="insert-photo" size={70} color="#498553" />
          <Text style={{ color: "#498553", fontSize: 15, fontWeight: "bold" }}>
            {t("ChooseAPic")}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Imagesearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: "#f3f3f3",
    justifyContent: "center",
    gap: 10,
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonStyle: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    borderRadius: 10,
    height: 170,
    width: "48%",
    minHeight: 150,
    justifyContent: "center",
    alignItems: "center",
  },
});
