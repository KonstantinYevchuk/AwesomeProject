import { View, StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

import DefaultScreenPosts from "../../nestedScreens/DefaultScreen/DefaultScreen";
import MapScreen from "../../nestedScreens/MapScreen/MapScreen";
import CommentsScreen from "../../nestedScreens/CommentsScreen/CommentsScreen";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <View style={styles.containerPost}>
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultScreen"
        component={DefaultScreenPosts}
        options={{
          headerShown: false,
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
    backgroundColor: '#FFFFFF',
  },
  text: {
    marginLeft: 40,
    marginTop: 50,
  },
});

export default PostsScreen;










// --------------------------------------
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








