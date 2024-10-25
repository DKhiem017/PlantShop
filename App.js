import { NavigationContainer } from "@react-navigation/native";
import CustomerNavigator from "./fe/navigation/CustomerNav";
import { AppProvider } from "./contexts/appContext";
import i18n from "./fe/multilingual/i18n";

export default function App() {
  
  return (
    <NavigationContainer>
      <AppProvider>
        <CustomerNavigator />
      </AppProvider>
    </NavigationContainer>
  );
}
