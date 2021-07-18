
import React from 'react';
import {Text} from 'react-native';
import * as Linking from 'expo-linking';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import Settings from './screens/Settings';
import { useEffect } from 'react';

// const prefix = Linking.makeUrl('/');

const Stack = createStackNavigator();

export default function App() {
  const linking = {
    prefixes: ['https://portal.istemai.com'],
    config: {
      screens: {
        Home: "home",
        Settings: "settings",
      }
    }
  };

  useEffect(() => {
    const readIncomingURL = async() => {
      const url = await Linking.getInitialURL();
      console.log(url, '.....incoming url')
    }
    readIncomingURL();
  }, []);

  useEffect(() => {
    Linking.addEventListener('url', (incomingVal) => {
      console.log(incomingVal, '....url');
    })
  }, []);

  return (
    // <View><Text>Hello world</Text></View>
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

