
import PostsScreen from "../PostsScreen/PostsScreen";
import MapScreen from "../../nestedScreens/MapScreen/MapScreen";
import CommentsScreen from "../../nestedScreens/CommentsScreen/CommentsScreen";
import { createStackNavigator } from "@react-navigation/stack";

import { TouchableOpacity, StyleSheet, Text } from "react-native";

import { Feather } from '@expo/vector-icons';

const NestedScreen = createStackNavigator();
// const Tabs = createBottomTabNavigator();

const Home = ({navigation}) => {
  return (
    <NestedScreen.Navigator>
        <NestedScreen.Screen
          name="Posts Screen"
          component={PostsScreen}
          options={{ headerShown: true }}
        />
        <NestedScreen.Screen name="MapScreen" component={MapScreen} />
        <NestedScreen.Screen
          name="CommentsScreen"
          component={CommentsScreen}
          options={{
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Feather
                  name="arrow-left"
                  size={24}
                  color="#212121"
                  style={{ marginLeft: 16 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </NestedScreen.Navigator>
  );
};

// const styles = StyleSheet.create({
//   btnLogOut: {
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingTop: 5,
//     paddingBottom: 5
//   },
//   btnTitleLogOut: {
//     fontSize: 14
//   }
// });

export default Home;

 // <Tabs.Navigator
    // screenOptions={{
    //   tabBarActiveTintColor: "#FFFFFF",
    //   inactiveTintColor: "#212121CC",
    //   tabBarShowLabel: false,
    // }}>
    //   <Tabs.Screen 
    //   name="Posts Screen" 
    //   component={PostsScreen}
    //   options={{
    //         title: "Posts Screen",
    //         headerStyle: {
    //           backgroundColor: "#fff",
    //           borderBottomWidth: 1,
    //         },
    //         headerTintColor: "black",
    //         headerTitleStyle: {
    //           fontWeight: "bold",
    //           fontSize: 20,
    //         },
    //         tabBarIcon: ({focused, size, color}) => <Feather name="grid" size={size} color={color} />,
    //         tabBarActiveBackgroundColor: "#FF6C00",
    //         tabBarItemStyle: {
    //           borderRadius: 50,  
    //         },
    //         headerRight: () => (
    //           <TouchableOpacity
    //                 activeOpacity={0.8}
    //                 style={styles.btnLogOut}
    //                 onPress={() => navigation.navigate('Login')}
    //               >
    //               <Text style={styles.btnTitleLogOut}><Feather name="log-out" size={24} color="#212121CC" /></Text>
    //               </TouchableOpacity>
    //         ),
    //       }} 
    //   />
    //   <Tabs.Screen 
    //   name="Create Screen" 
    //   component={CreatePostsScreen}
    //   options={{
    //     title: "Create Posts Screen",
    //         headerStyle: {
    //           backgroundColor: "#fff",
    //           borderBottomWidth: 1,
    //           // textAlign: "center"
    //         },
    //         headerTintColor: "black",
    //         headerTitleStyle: {
    //           fontWeight: "bold",
    //           fontSize: 20,
    //           alignItems: "center",
    //         },
    //     tabBarIcon: ({focused, size, color}) => <AntDesign name="plus" size={size} color={color} />,
    //     tabBarActiveBackgroundColor: "#FF6C00",
    //     tabBarItemStyle: {
    //       borderRadius: 50,  
    //     },
    //   }} />
    //   <Tabs.Screen 
    //   name="Profile Screen" 
    //   component={ProfileScreen}
    //   options={{
    //     tabBarIcon: ({focused, size, color}) => <Feather name="user" size={size} color={color} />,
    //     tabBarActiveBackgroundColor: "#FF6C00",
    //     tabBarItemStyle: {
    //       borderRadius: 50,  
    //     }
    //   }} />
    // </Tabs.Navigator>