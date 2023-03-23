import { useState, useEffect } from "react";
import * as Font from 'expo-font';
import { Text,
  View, 
  TextInput, 
  Alert,
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform, 
  TouchableOpacity,
  TouchableWithoutFeedback, 
  Keyboard } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isReady, setIsReady] = useState(false);

  const handleInputEmail = (text) => setEmail(text);
  const handleInputPassword = (text) => setPassword(text);
  // const Separator = () => <View style={styles.separator} />;

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "Roboto-Regular": require("../../../assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Bold": require("../../../assets/fonts/Roboto-Bold.ttf"),
      });
      setIsReady(true)
    };
    loadFonts()
  }, []);

  const onRegistration = () => {
    if(email === '' || password === '') {
      Alert.alert("Please, fill all fields")
      return
    }
    Keyboard.dismiss();
    Alert.alert("You are log in:", `Email:${email} Password:${password}`);
  }
  if (!isReady) {
    return null;
  }
  return (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
          <View style={styles.containerLog}>
          <Text style={styles.title}>Enter your account</Text>
          <View style={styles.form}>
          <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
          <TextInput
          keyboardType="email-address"
          value={email}
          onChangeText={handleInputEmail}
          placeholder="Email"
          style={styles.input}
        />
          <TextInput
          value={password}
          onChangeText={handleInputPassword}
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
        />
        
         <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={onRegistration}
              >
          <Text style={styles.btnTitle}>LOG IN</Text>
              </TouchableOpacity>
          </KeyboardAvoidingView>   
          </View>
          </View>
          </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create({
  containerLog: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 45,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
  },
  form: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 32,
  },
  input: {
    alignSelf: "center",
    backgroundColor: "#F6F6F6",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    width: 340,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8
  },
  btn: {
    borderRadius: 6,
    borderWidth: 1,
    height: 40,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    ...Platform.select({
      ios: {
        backgroundColor: "transparent",
        borderColor: "#f0f8ff",
      },
      android: {
        backgroundColor: "#FF6C00",
        borderColor: "transparent",
      },
    }),
  },
  btnTitle: {
    color: Platform.OS === "ios" ? "#4169e1" : "#f0f8ff",
    fontSize: 18,
  },
  title: {
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: "Roboto-Bold",
    fontSize: 30,
  },
});
export default LoginScreen