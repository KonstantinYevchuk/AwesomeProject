
// import { useState } from "react";
// import AppLoading from 'expo-app-loading';
// import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import { useRoute } from "./Components/router";
import useRoute from './Components/router';

// const Stack = createStackNavigator();

export default function App() {
  // const [isReady, setIsReady] = useState(false);
  const routing = useRoute(true);

  return (
    <NavigationContainer>{routing}</NavigationContainer>
  );
}

