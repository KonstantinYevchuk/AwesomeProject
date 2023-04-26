import { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TextInput,  
  Keyboard } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';
import * as Location from "expo-location";

function CreatePostsScreen({navigation}) {
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [text, setText] = useState('');
    const [location, setLocation] = useState(null);


    const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
    let location = await Location.getCurrentPositionAsync({}); 
    console.log('latitude',location.coords.latitude)
    console.log('longitude',location.coords.longitude) 
    setLocation(location);
  };

    const sendPhoto = () => {
    navigation.navigate("Posts Screen", { photo, text, location });
    setText('')
  };

    const onChangeText = (text) => setText(text);

  return (
    <View style={styles.containerCreate}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Camera style={styles.camera} ref={setCamera}>
      {photo && (
          <View style={styles.takePhotoContainer}>
            <Image
              source={{ uri: photo }}
              style={styles.image}
            />
          </View>
        )}
         <TouchableOpacity onPress={takePhoto} style={styles.snapContainer}>
         <Feather name="camera" size={24} color="white" />
         </TouchableOpacity>
       </Camera>
       
        <View>
        <TextInput
        onChangeText={onChangeText}
        value={text}
        style={styles.input}
        placeholder="Desctiption"
        />
        </View>
        <View>
        <TextInput
        // onChangeText={onChangeText}
        value={location}
        style={styles.input}
        placeholder="Location"
        />
        </View>
            <View>
              <TouchableOpacity onPress={sendPhoto} style={styles.sendBtn}>
                <Text style={styles.sendLabel}>PUBLICATE</Text>
             </TouchableOpacity>
       </View>
       </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCreate: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  camera: {
        height: 300,
        marginTop: 50,
        alignItems: "center",
        marginHorizontal: 15,
        borderRadius: 10,
      },
      snapContainer: {
        marginTop: 200,
        backgroundColor: "#FFFFFF4D",
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
      },
      takePhotoContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      },
      image: {
        width: '100%',
        height: '100%',
      },
      inputContainer: {
        marginHorizontal: 20,
      },
      input: {
        alignSelf: "center",
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
      },
        sendLabel: {
        color: "#fff",
        fontSize: 20,
      },
});
export default CreatePostsScreen

// const CreateScreen = ({ navigation }) => {
//   const [camera, setCamera] = useState(null);
//   const [photo, setPhoto] = useState(null);

//   const takePhoto = async () => {
//     const photo = await camera.takePictureAsync();
//     setPhoto(photo.uri);
//     console.log("photo", photo);
//   };

//   const sendPhoto = () => {
//     console.log("navigation", navigation);
//     navigation.navigate("Posts", { photo });
//   };

//   return (
//     <View style={styles.container}>
//       <Camera style={styles.camera} ref={setCamera}>
//         {photo && (
//           <View style={styles.takePhotoContainer}>
//             <Image
//               source={{ uri: photo }}
//               style={{ height: 200, width: 200, borderRadius: 10 }}
//             />
//           </View>
//         )}
//         <TouchableOpacity onPress={takePhoto} style={styles.snapContainer}>
//           <Text style={styles.snap}>SNAP</Text>
//         </TouchableOpacity>
//       </Camera>
//       <View>
//         <TouchableOpacity onPress={sendPhoto} style={styles.sendBtn}>
//           <Text style={styles.sendLabel}>SEND</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   camera: {
//     height: "70%",
//     marginHorizontal: 2,
//     marginTop: 40,
//     borderRadius: 10,
//     alignItems: "center",
//     justifyContent: "flex-end",
//   },
//   snap: {
//     color: "#fff",
//   },
//   snapContainer: {
//     borderWidth: 1,
//     borderColor: "#ff0000",
//     width: 70,
//     height: 70,
//     borderRadius: 10,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   takePhotoContainer: {
//     position: "absolute",
//     top: 50,
//     left: 10,
//     borderColor: "#fff",
//     borderWidth: 1,
//     borderRadius: 10,
//   },
//   sendBtn: {
//     marginHorizontal: 30,
//     height: 40,
//     borderWidth: 2,
//     borderColor: "#20b2aa",
//     borderRadius: 10,
//     marginTop: 20,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   sendLabel: {
//     color: "#20b2aa",
//     fontSize: 20,
//   },
// });