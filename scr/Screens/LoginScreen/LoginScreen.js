import { useState, useEffect } from "react";
import { Text,
  View, 
  TextInput, 
  Alert,
  StyleSheet, 
  ImageBackground,
  KeyboardAvoidingView, 
  Platform, 
  TouchableOpacity,
  TouchableWithoutFeedback, 
  Keyboard,
  Dimensions } from "react-native";

  const initialState = {
    email: "",
    password: "",
  };
  

const LoginScreen = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [state, setState] = useState(initialState);
  // const [isReady, setIsReady] = useState(false);
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );
  // const handleInputEmail = (text) => setEmail(text);
  // const handleInputPassword = (text) => setPassword(text);

  useEffect(() => {
   
    const onChange = () => {
      const width = Dimensions.get("window").width - 20 * 2;
      setDimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, [])

  const onRegistration = () => {
    if(state.email === '' || state.password === '') {
      Alert.alert("Please, fill all fields")
      return
    }
    Keyboard.dismiss();
    Alert.alert("You are log in:", `Email:${state.email} Password:${state.password}`);
    setState(initialState);
  }

  return (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
          <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/back.jpg')} style={styles.img}>
            <View style={styles.containerLog}>
            
          <Text style={styles.title}>Enter your account</Text>
          <View style={{...styles.form, width: dimensions}}>
          <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
          <TextInput
          keyboardType="email-address"
          value={state.email}
          onChangeText={(value) =>
            setState((prevState) => ({ ...prevState, email: value }))
          }
          placeholder="Email"
          style={styles.input}
        />
          <TextInput
          value={state.password}
          onChangeText={(value) =>
            setState((prevState) => ({ ...prevState, password: value }))
          }
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
          <Text style={styles.text}>Have you got an account? Enter</Text> 
          </View>
          </ImageBackground>
            </View>
          </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerLog: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    paddingTop: 92,
    paddingBottom: 45,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
  },
  img: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  form: {
    marginHorizontal: 16,
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
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    ...Platform.select({
      ios: {
        backgroundColor: "#FF6C00", 
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
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: "Roboto-Bold",
    fontSize: 30,
  },
  text: {
    textAlign: 'center',
  }
});
export default LoginScreen


