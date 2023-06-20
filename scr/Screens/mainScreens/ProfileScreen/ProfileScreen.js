
import {useEffect, useState} from "react";
import {
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Image
} from "react-native";
import { useSelector } from "react-redux";
import { db } from "../../../firebase/config";
import {
    collection,
    onSnapshot,
    where,
    query,
  } from "firebase/firestore";

const ProfileScreen = () => {
    const [userPosts, setUserPosts] = useState([]);

    const {userId} = useSelector((state) => state.auth);

    useEffect(() => {
      getUserPosts()
  }, [])

    const getUserPosts = async () => {
      try {
          const userPostsRef = collection(db, "posts");
          const queryRef = query(userPostsRef, where("userId", "==", userId));
          const unsubscribe = onSnapshot(queryRef, (date) => {
            const userPosts = date.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }));
            setUserPosts(userPosts);
    
          });
          return () => unsubscribe();
        } catch (error) {
          console.log(error);
        }
  }    

  return (
    <View style={styles.container}>
        <View>
        <FlatList data={userPosts} keyExtractor={(item, index) => index.toString()} 
            renderItem={({item}) => (
            <View>
              <Image source={{uri: item.photo}} style={styles.post}/>
            </View>
            )}/>
            </View>
        </View>
  );
};


const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 20,
      paddingTop: 10,
      paddingBottom: 10
  },
  post: {
      height: 240,
      width: "100%",
      borderRadius: 8,
      marginBottom: 10,
    },
})
export default ProfileScreen