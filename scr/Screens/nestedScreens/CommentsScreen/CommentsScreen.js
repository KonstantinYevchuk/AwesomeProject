import { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity,
  SafeAreaView,
  FlatList, 
  Keyboard
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { db } from "../../../firebase/config";
import {
  doc,
  collection,
  addDoc,
  onSnapshot,
} from "firebase/firestore";


const CommentsScreen = ({route}) => {
  const { postId } = route.params;
  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState([]);
  const [commentsCount, setCommentsCount] = useState(0);

  const { login } = useSelector((state) => state.auth);

  useEffect(() => {
    getAllPost()
  },[])
  
  const createComment = async () => {
    if (!comment.trim()) {
      alert("Sorry, comment field must be filled");
      return;
    }
    const docRef = await doc(db, "posts", postId);

    await addDoc(collection(docRef, "comment"), {
      comment,
      login,
      date: Date.now(),
    });

    setComment('');
  };

  const getAllPost = async () => {
    const docRef = await doc(db, "posts", postId);

    onSnapshot(collection(docRef, "comment"), (data) =>
      setAllComments(
        data.docs.map((doc) => ({
          ...doc.data(),
          postId: doc.id,
        }))
      )
    );
    setCommentsCount(Number(allComments.length));
  }
  return (
  <View style={styles.container}>
       <SafeAreaView>
      <FlatList
        data={allComments}
        renderItem={({item}) => (
        <View style={styles.commentsContainer}>
          <Text style={styles.comment}>{item.comment}</Text>
          <Text style={styles.login}>{item.login}</Text>
          <Text style={styles.login}>{item.date}</Text>
          </View>
          )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <TextInput
        onChangeText={setComment}
        value={comment}
        style={styles.input}
        placeholder="Comments"
        />
        </View>
        <View>
            <TouchableOpacity 
            onPress={createComment} 
            style={styles.sendBtn}
            >
            <Text style={styles.sendLabel}>SEND</Text>
            </TouchableOpacity>
       </View>
       </TouchableWithoutFeedback>
  </View>
  
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  commentsContainer: {
    marginHorizontal: 30,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 6,
    paddingHorizontal: 15,
    paddingTop: 5,
    marginBottom: 5
  },
  comment: {
    fontSize: 16,
  },
  login: {
    fontFamily: "RobotoThinItalic",
    alignSelf: "flex-end"
  },
  input: {
    marginHorizontal: 30,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    width: 340,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    marginTop: 40,     
  },
  sendBtn: {
    marginHorizontal: 30,
    height: 40,
    borderWidth: 2,
    borderColor: "#FF6C00",
    backgroundColor: "#FF6C00",
    borderRadius: 40,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
    sendLabel: {
    color: "#fff",
    fontSize: 20,
  }
});

export default CommentsScreen;