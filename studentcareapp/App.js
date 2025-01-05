import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";
import Login from "./pages/Login";
import Home from "./pages/Home";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            // initialRouteName="Home"
            screenOptions={{
              headerStyle: { backgroundColor: "#70116d" },
              headerTitleStyle: { color: "#fff" },
              headerTitleAlign: "center",
            }}
          >
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ title: "UoV Student Care" }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: "UoV Student Care" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}