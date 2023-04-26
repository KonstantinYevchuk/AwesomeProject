import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { useState, useEffect } from "react";
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import DefaultScreenPosts from "../nestedScreens/DefaultScreen/DefaultScreen";
import MapScreen from "../nestedScreens/MapScreen/MapScreen";
import CommentsScreen from "../nestedScreens/CommentsScreen/CommentsScreen";

const NestedScreen = createStackNavigator();


const PostsScreen = ({ navigation, route }) => {
    const { email, password } = route.params;
  
  
  return (
    <View style={styles.containerPost}>
    <Text style={styles.text}>Posts Screen:{email} {password} </Text>
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultScreen"
        component={DefaultScreenPosts}
        options={{
          headerShown: false
        }}
      />
      <NestedScreen.Screen name="Comments" component={CommentsScreen} />
      <NestedScreen.Screen name="Map" component={MapScreen} />
    </NestedScreen.Navigator>
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
  // imageContainer: {
  //   marginBottom: 10,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginHorizontal: 50,
  //   borderRadius: 20,
  // },
  // image: {
  //   width: 350, 
  //   height: 200,
  //   borderRadius: 20,
  // },
  // imageDescription: {
  //   justifyContent: 'flex-start',
  //   alignItems: 'flex-start',
  //   alignSelf: 'flex-start',
  // },
  // commentsLocation: {
  //   flexDirection: "row",
  // },
  // comments: {
  //   marginRight: 250,
  // }
});

export default PostsScreen;


// const [posts, setPosts] = useState([]);

// useEffect(() => {
//   if (route.params) {
//     setPosts((prevState) => [...prevState, route.params]);
//   }
// }, [route.params]);
{/* <FlatList
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
    <View style={styles.commentsLocation}>
    <TouchableOpacity style={styles.comments}>
    <FontAwesome name="comment-o" size={24} color="black" />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("Map")}>
    <Feather name="map-pin" size={24} color="black" />
    {/* <Text style={styles.imageDescription}>{item.location}</Text> */}
//     </TouchableOpacity> 
//     </View>
    
//   </View>
// )}
// /> */}








