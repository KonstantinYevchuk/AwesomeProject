import 'react-native-gesture-handler';
import { useState } from "react";
// import { StatusBar } from 'expo-status-bar';
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { 
  StyleSheet, 
  ImageBackground, 
  View, 
  TouchableWithoutFeedback, 
  Keyboard } from 'react-native';

import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';



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
      <Stack.Navigator>
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
        name="Login" 
        component={LoginScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

