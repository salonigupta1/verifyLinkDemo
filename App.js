import { StatusBar } from "expo-status-bar";
import React from "react";
import * as Linking from "expo-linking";
import HomeScreen from "./assets/screens/HomeScreen";
import SettingsScreen from "./assets/screens/SettingsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const prefix = Linking.makeUrl("/");
console.log(prefix);

const Stack = createStackNavigator();

export default function App() {

  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Settings: "settings",
        Home: "home",
      },
    },
  };

  // if(linking.config.screens!="settings" || linking.config.screens!="home"){
  //   console.log("YESSS");
  //   console.log(linking.config.screens);
  // }

  console.log(linking);

  return (
    <NavigationContainer linking={linking}>
      
      <Stack.Navigator>
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

