import { useState, useEffect } from "react";
import { 
  Text,
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
  import { useFonts } from 'expo-font';
  import * as SplashScreen from 'expo-splash-screen';

  SplashScreen.preventAutoHideAsync();

  const initialState = {
    email: "",
    password: "",
  };
  
const LoginScreen = ({navigation}) => {
  const [state, setState] = useState(initialState);
  // const [isReady, setIsReady] = useState(false);
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  const { email, password } = state;
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

  const [fontsLoaded] = useFonts({
    RobotoMedium: require('../../../../assets/fonts/Roboto-Medium.ttf'),
    RobotoRegular: require('../../../../assets/fonts/Roboto-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const onRegistration = () => {
    if(email === '' || password === '') {
      Alert.alert("Please, fill all fields")
      return
    }
    Keyboard.dismiss();
    navigation.navigate('Home')
    // {
    //   screen: 'Posts Screen',
    //   params: {email: email,password: password,}   
    // }
    
    setState(initialState);
  }

  return (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
          <View style={styles.container} onLayout={onLayoutRootView}>
            <ImageBackground source={require('../../../../assets/images/back.jpg')} style={styles.img}>
            <View style={styles.containerLog}>
            
          <Text style={styles.title}>Enter your account</Text>
          <View style={{...styles.form, width: dimensions}}>
          <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
          <TextInput
          keyboardType="email-address"
          value={email}
          onChangeText={(value) =>
            setState((prevState) => ({ ...prevState, email: value }))
          }
          placeholder="Email"
          style={styles.input}
        />
          <TextInput
          value={password}
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
            <View style={styles.navigateContainer}>
              <Text style={styles.text}>
            You have not got an account? 
              </Text>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Registration')}
              >
              <Text 
              style={styles.btnNavigateTitle}
              >Sign in
              </Text>
              </TouchableOpacity>
            </View>  
          
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
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
    marginRight: 10
  },
  navigateContainer: {
    justifyContent: "center",
    alignItems: "center", 
    flexDirection: "row"
  },
  btnNavigateTitle: {
    fontFamily: "Roboto-Bold"
  }
});
export default LoginScreen


