import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import "react-native-gesture-handler";
import { AccountTypeCard } from "./AccountTypeCard";
import AccountSettings from "./AccountSettings";

const Stack = createStackNavigator();
const hp = "100%";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AccountSettings"
          component={AccountSettings}
          // options={{ headerShown: false }}
          options={{
            title: "Account Settings",
            headerTitleAlign: "center",
            // headerStyle: {},
            headerLeft: () => <AntDesign name="left" size={24} color="black" />,
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
