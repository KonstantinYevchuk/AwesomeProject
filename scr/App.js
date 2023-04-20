import 'react-native-gesture-handler';
import { useState } from "react";

import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import HomeScreen from './Screens/HomeScreen/HomeScreen';


const Stack = createStackNavigator();

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);
  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        options={{
          headerShown: false
        }}
        name="Login" 
        component={LoginScreen} 
        />
        <Stack.Screen 
        options={{
          headerShown: false
        }}
        name="Registration" 
        component={RegistrationScreen} 
        />
        <Stack.Screen
        options={{
          headerShown: false
        }}
        name="Home" 
        component={HomeScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

