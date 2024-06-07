import { NavigationContainer } from "@react-navigation/native";
import CustomerNavigator from "./fe/navigation/CustomerNav";
import { AppProvider } from "./contexts/appContext";

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <CustomerNavigator />
      </AppProvider>
    </NavigationContainer>
  )
}

