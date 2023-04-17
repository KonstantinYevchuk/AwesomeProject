// import { View, Text, StyleSheet } from "react-native";
import PostsScreen from "../PostsScreen/PostsScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const Tabs = createBottomTabNavigator();


const StackHome = createStackNavigator();
const HomeScreen = ({navigation}) => {
  return (
    <Tabs.Navigator
    tabBarOptions={{
      activeTintColor: "#FF6C00",
      inactiveTintColor: "#212121CC",
      showLabel: false,
    }}>
      <Tabs.Screen 
      name="Create Screen" 
      component={CreatePostsScreen}
      options={{
        tabBarIcon: ({focused, size, color}) => <Feather name="grid" size={size} color={color} />
      }} />
      <Tabs.Screen 
      name="Posts Screen" 
      component={PostsScreen}
      options={{
            title: "Posts Screen",
            headerStyle: {
              backgroundColor: "#fff",
              borderBottomWidth: 1,
            },
            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
              // textAlign: "center",
            },
            tabBarIcon: ({focused, size, color}) => <AntDesign name="plus" size={size} color={color} />,
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
      <Tabs.Screen 
      name="Profile Screen" 
      component={ProfileScreen}
      options={{
        tabBarIcon: ({focused, size, color}) => <Feather name="user" size={size} color={color} />
      }} />
    </Tabs.Navigator>
   
  );
};

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

export default HomeScreen;



 // screenOptions={({ route }) => ({
    //   tabBarIcon: ({ focused, color, size }) => {
    //     let iconName;
    //     if (route.name === "Profile Screen") {
    //       iconName = focused ? "ios-list-box" : "ios-list";
    //       } else if (route.name === "Posts Screen") {
    //         return <AntDesign name="plus" size={24} color="black" />;
    //       } else if (route.name === "Create Screen") {
    //         iconName = focused ? "ios-list-box" : "ios-list";
    //       }
        
    //     return <Ionicons name={iconName} size={size} color={color} />;
    //   },
    // })}



         // <StackHome.Navigator>
    // <StackHome.Screen 
    //   name="PostsScreen" 
    //   component={PostsScreen} 
    //   options={{
    //     // headerShown: false,
    //     title: "Posts Screen",
    //     headerStyle: {
    //       backgroundColor: "#fff",
    //       textAlign: "center",
    //       borderBottomWidth: 1,
    //     },
    //     headerTintColor: "black",
    //     headerTitleStyle: {
    //       fontWeight: "bold",
    //       fontSize: 20,
    //     },
    //     headerRight: () => (
    //       <TouchableOpacity
    //             activeOpacity={0.8}
    //             style={styles.btnLogOut}
    //             // onPress={onRegistration}
    //           >
    //       <Text style={styles.btnTitleLogOut}>LOG OUT</Text>
    //           </TouchableOpacity>
          
    //     ),
    //   }}
    //   />
    // </StackHome.Navigator>
    // <>
    //   <PostsScreen />
    // </>