import React, { useEffect } from "react";
import { View, Button, StyleSheet, Image, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";

const CameraScreen = () => {
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
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setPhoto(result.uri);
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
