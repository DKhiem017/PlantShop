import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./fe/components/tabs";


const App = () => (
  <NavigationContainer>
    <MyTabs></MyTabs>
  </NavigationContainer>
  // <DetailProduct></DetailProduct>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
