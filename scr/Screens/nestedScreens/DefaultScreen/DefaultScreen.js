import { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Image, TouchableOpacity, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const DefaultScreenPosts = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log("posts", posts);
  return (
    <View style={styles.container}>
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
            <View style={styles.commentsLocation}>
            <TouchableOpacity style={styles.comments}>
            <FontAwesome name="comment-o" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Map")}>
            <Feather name="map-pin" size={24} color="black" />
            {/* <Text style={styles.imageDescription}>{item.location}</Text> */}
            </TouchableOpacity> 
            </View>
            
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
  },
  commentsLocation: {
    flexDirection: "row",
  },
  comments: {
    marginRight: 250,
  }
});

export default DefaultScreenPosts;