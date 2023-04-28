import { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TextInput,  
  Keyboard,
  Button } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';
import * as Location from "expo-location";

function CreatePostsScreen({navigation}) {
    const [camera, setCamera] = useState(null);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [photo, setPhoto] = useState(null);
    const [text, setText] = useState('');
    const [location, setLocation] = useState(null);

    if (!permission) {
      // Camera permissions are still loading
      return <View />;
    }
    if (!permission.granted) {
      // Camera permissions are not granted yet
      return (
        <View style={styles.containerPermission}>
          <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
          <Button onPress={requestPermission} title="grant permission" />
        </View>
      );
    }

    const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);

    let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
    let location = await Location.getCurrentPositionAsync({}); 
    console.log('latitude',location.coords.latitude)
    console.log('longitude',location.coords.longitude) 
    setLocation(location);
  };

    const sendPhoto = () => {
    navigation.navigate("DefaultScreen", { photo, text, location });
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
        // value={location}
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
  containerPermission: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center"
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
