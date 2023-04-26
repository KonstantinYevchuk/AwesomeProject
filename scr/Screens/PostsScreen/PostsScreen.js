import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState, useEffect } from "react";

const Tabs = createBottomTabNavigator();

const PostsScreen = ({ navigation, route }) => {
    const { email, password, photo, text } = route.params;
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log("posts", posts);
  return (
    <View style={styles.containerPost}>
    <Text style={styles.text}>Posts Screen:{email} {password} </Text>
    <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View
            style={styles.imageContainer}
          >
            <Image
              source={{ uri: item.photo }}
              style={styles.image}
            />
            <Text style={styles.imageDescription}>{item.text}</Text>
            <Text style={styles.imageDescription}>{item.location}</Text>
          </View>
        )}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  containerPost: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "flex-start",
    backgroundColor: '#FFFFFF',
  },
  text: {
    marginLeft: 40,
    marginTop: 50,
  },
  imageContainer: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 50,
    borderRadius: 20,
  },
  image: {
    width: 350, 
    height: 200,
    borderRadius: 20,
  },
  imageDescription: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    
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








