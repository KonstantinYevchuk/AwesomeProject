import { View, Text, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import { TouchableOpacity } from "react-native-gesture-handler";

function CreatePostsScreen() {
  return (
    <View style={styles.containerCreate}>
      <Camera style={styles.camera}>
         <TouchableOpacity onPress={() => {}} style={styles.snapContainer}>
            <Text style={styles.snap}>SNAP</Text>
         </TouchableOpacity>
       </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCreate: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingLeft: 15,
    paddingRight: 15,
    
  },
  camera: {
        height: 300,
        marginTop: 50,
        alignItems: "center",
      },
      snap: {
        color: "#FF6C00",
      },
      snapContainer: {
        marginTop: 200,
        borderWidth: 1,
        borderColor: "#FF6C00",
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
      },
});
export default CreatePostsScreen

// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import { Camera } from "expo-camera";
// import { TouchableOpacity } from "react-native-gesture-handler";
// const CreateScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Camera style={styles.camera}>
//         <TouchableOpacity onPress={() => {}} style={styles.snapContainer}>
//           <Text style={styles.snap}>SNAP</Text>
//         </TouchableOpacity>
//       </Camera>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   camera: {
//     height: 300,
//     marginTop: 50,
//     alignItems: "center",
//   },
//   snap: {
//     color: "#fff",
//   },
//   snapContainer: {
//     marginTop: 200,
//     borderWidth: 1,
//     borderColor: "#ff0000",
//     width: 70,
//     height: 70,
//     borderRadius: 50,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });