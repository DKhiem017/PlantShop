import React, { useEffect } from "react";
import { View, Button, StyleSheet, Image, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";

const CameraScreen = ({ navigation }) => {
  const [photo, setPhoto] = React.useState(null);

  const requestCameraPermission = async () => {
    if (Platform.OS !== "web") {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      return status === "granted";
    }
    return false;
  };

  const openCamera = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
      console.log("Camera permission denied");
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.uri);
      navigation.navigate("ResultScreen", {
        photo: result.assets[0].uri,
        filename: result.assets[0].fileName, // Assuming you are extracting the filename from the URI
        type: result.assets[0].mimeType, // This can be refined based on the result's actual MIME type
      });
    }
  };

  useEffect(() => {
    openCamera();
  }, []);

  return (
    <View style={styles.container}>
      {photo && <Image source={{ uri: photo }} style={styles.image} />}
      <Button title="Open Camera Again" onPress={openCamera} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 400,
    margin: 20,
  },
});

export default CameraScreen;
