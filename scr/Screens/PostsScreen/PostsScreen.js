import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Tabs = createBottomTabNavigator();

const PostsScreen = ({ navigation, route }) => {
    const { email, password } = route.params;
  return (
    <View style={styles.containerPost}>
    <Text style={styles.text}>Posts Screen:{email} {password} </Text>
    
    </View>

  );
};

const styles = StyleSheet.create({
  containerPost: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: '#FFFFFF',
  },
  text: {
    marginTop: 50,
  }
});

export default PostsScreen;



 {/* <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Profile") {
          iconName = focused
            ? "ios-information-circle"
            : "ios-information-circle-outline";
        } else if (route.name === "Settings") {
          iconName = focused ? "ios-list-box" : "ios-list";
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
    }}
  >
     
    <Tabs.Screen name="Settings" component={Settings} />
    <Tabs.Screen name="Profile" component={Profile} />
  </Tabs.Navigator> */}








