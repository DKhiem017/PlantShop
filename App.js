import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./fe/components/tabs";
import DetailAddress from "./fe/pages/user/DetailAddress/DetailAddress";


const App = () => (
  <NavigationContainer>
    <MyTabs></MyTabs>
  </NavigationContainer>
  // <DetailAddress></DetailAddress>
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
