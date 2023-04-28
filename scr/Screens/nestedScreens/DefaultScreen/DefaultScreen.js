import { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Image, TouchableOpacity, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const DefaultScreenPosts = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  console.log(route.params);
  // const { location } = route.params;

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
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
            <TouchableOpacity style={styles.comments} onPress={() => navigation.navigate("Comments")}>
            <FontAwesome name="comment-o" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Map")}>
            <Feather name="map-pin" size={24} color="black" />
            {/* <Text style={styles.imageDescription}>{item.location.coords.latitude}</Text> */}
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
    // paddingTop: 20,
    
  },
  imageContainer: {
    marginBottom: 50,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    marginHorizontal: 50,
    borderRadius: 20,
    width: 320, 
    height: 250,
    // borderWidth: 1,
    // borderColor: "black"
  },
  image: {
    width: "100%", 
    height: "100%",
    borderRadius: 20,
  },
  imageDescription: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
  },
  commentsLocation: {
    flexDirection: "row",
  },
  comments: {
    marginRight: 250,
  }
});

export default DefaultScreenPosts;