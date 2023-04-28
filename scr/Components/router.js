import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

import CreatePostsScreen from "../Screens/mainScreens/CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from '../Screens/mainScreens/ProfileScreen/ProfileScreen';

import RegistrationScreen from "../Screens/auth/RegistrationScreen/RegistrationScreen";
import LoginScreen from "../Screens/auth/LoginScreen/LoginScreen";
import Home from "../Screens/mainScreens/HomeScreen/HomeScreen";

import { Feather } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

 const useRoute = (isAuth) => {
    if (!isAuth) {
      return <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <MainStack.Screen name="Registration" component={RegistrationScreen} options={{headerShown: false}}/>
      </MainStack.Navigator>
    }
    return <MainTab.Navigator 
    initialRouteName="Home"
    screenOptions={{
        tabBarActiveTintColor: "#FFFFFF",
        inactiveTintColor: "#212121CC",
        tabBarShowLabel: false,
      }}>
    <MainTab.Screen 
      name="Home"
      component={Home}
      options={{
      headerShown: false,
      tabBarIcon: ({focused, size, color}) => <Feather name="grid" size={24} color={color}/>,
      tabBarActiveBackgroundColor: "#FF6C00",
      tabBarItemStyle: { borderRadius: 50 }, 
      headerRight: () => (
        <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btnLogOut}
              onPress={() => navigation.navigate('Login')}
            >
            <Text style={styles.btnTitleLogOut}><Feather name="log-out" size={24} color="#212121CC" /></Text>
            </TouchableOpacity>
            ), 
        }}   
    />
    <MainTab.Screen 
      name="Create"
      component={CreatePostsScreen}
      options={{
      headerShown: false,
      tabBarIcon: ({focused, size,color}) => <AntDesign name="plus" size={24} color={color}/>,
      tabBarActiveBackgroundColor: "#FF6C00",
      tabBarItemStyle: { borderRadius: 50 },   
        }}  
    />
    <MainTab.Screen 
      name="Profile"
      component={ProfileScreen}
      options={{
      headerShown: false,
      tabBarIcon: ({focused, size,color}) => <Feather name="user" size={24} color={color} />,
      tabBarActiveBackgroundColor: "#FF6C00",
      tabBarItemStyle: { borderRadius: 50 },    
        }}   
    />
  </MainTab.Navigator>
  }

  const styles = StyleSheet.create({
    btnLogOut: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5,
      paddingBottom: 5
    },
    btnTitleLogOut: {
      fontSize: 14
    }
  });

  export default useRoute