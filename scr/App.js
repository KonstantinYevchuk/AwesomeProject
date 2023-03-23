// import { StatusBar } from 'expo-status-bar';

import { 
  StyleSheet, 
  ImageBackground, 
  View, 
  TouchableWithoutFeedback, 
  Keyboard } from 'react-native';

import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';




export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/back.jpg')} style={styles.img}>
      {/* <RegistrationScreen /> */}
      <LoginScreen />
      </ImageBackground>
    </View>
   </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'stretch',
    // justifyContent: 'flex-end',
  },
  img: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  }
});
