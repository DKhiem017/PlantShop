import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import WebView from "react-native-webview";

const WebViewScreen = ({ uri }) => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: `<${uri}>` }}
        style={styles.webview}
        startInLoadingState={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default WebViewScreen;
