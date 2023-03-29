// import { View, Text, StyleSheet } from "react-native";
import PostsScreen from "../PostsScreen/PostsScreen";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const StackHome = createStackNavigator();
const HomeScreen = () => {
  return (
    <StackHome.Navigator>
    <StackHome.Screen 
      name="PostsScreen" 
      component={PostsScreen} 
      />
    </StackHome.Navigator>
    // <>
    //   <PostsScreen />
    // </>
  );
};

// const styles = StyleSheet.create({
//   containerHome: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: '#FFFFFF',
//   },
// });

export default HomeScreen;