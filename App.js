import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Linking from 'expo-linking';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './screens/Home';
import Settings from './screens/Settings';

const prefix = Linking.makeUrl('/');

const Stack = createStackNavigator();

export default function App() {
  const linking = {
    prefixes: ['https://*.example.com', 'https://example.com'],
    prefixes: ['https://app.example.com'],
    prefixes: ['https://app.example.com', 'exp://*'],
    // prefixes: [prefix],
    config: {
      screens: {
        Home: "home",
        Settings: "settings",
      }
    }
  };

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    padding: 100,
  }
});
