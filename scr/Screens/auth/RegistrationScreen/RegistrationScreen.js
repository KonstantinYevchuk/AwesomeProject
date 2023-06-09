import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { authSignUpUser } from "../../../redux/auth/authOperations";
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
    login: "",
    email: "",
    password: "",
  };

const RegistrationScreen = ({navigation}) => {
    const [state, setState] = useState(initialState); 
    const [dimensions, setDimensions] = useState(
      Dimensions.get("window").width - 20 * 2
    ); 
    const dispatch = useDispatch();  
 
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
      const { login, email, password } = state;
      if(login === '' || email === '' || password === '') {
        Alert.alert("Please, fill all fields")
        return
      }
      Keyboard.dismiss();
      dispatch(authSignUpUser(state));
      // navigation.navigate('Home')
      //   screen: 'Posts Screen',
      //   params: {email: email,password: password,}   
      // }
     
      
      setState(initialState);
      // setIsShowKeyboard(false)
      // Alert.alert("Registration is done:", 
      //     `${login} 
      //     ${email} 
      //     ${password}`);
    }
 
  const { login, email, password } = state;
    return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
            <View style={styles.container}>
            <ImageBackground source={require('../../../../assets/images/back.jpg')} style={styles.img}>
            <View style={styles.containerReg}>
            <Text style={styles.title}>Registration</Text>
            <View style={{
                ...styles.form,
                width: dimensions,
              }}>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <TextInput 
            placeholder="Login"
            value={login}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, login: value }))
            }
            // onFocus={() => setIsShowKeyboard(true)}
            style={styles.input}
            />
            <TextInput
            keyboardType="email-address"
            value={email}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, email: value }))
            }
            placeholder="Email"
            style={styles.input}
            // onFocus={() => setIsShowKeyboard(true)}
          />
            <TextInput
            value={password}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, password: value }))
            }
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
            // onFocus={() => setIsShowKeyboard(true)}
          />
          
          <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={onRegistration}
              >
          <Text style={styles.btnTitle}>SIGN IN</Text>
              </TouchableOpacity>
          </KeyboardAvoidingView>   
          </View>
          <View style={styles.navigateContainer}>
              <Text style={styles.text}>
            You have not got an account? 
              </Text>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Login')}
              >
              <Text 
              style={styles.btnNavigateTitle}
              >Log in
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
    img: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'flex-end',
    },
    containerReg: {
      fontFamily: "RobotoRegular",
      fontSize: 16,
      paddingTop: 80,
      paddingBottom: 45,
      backgroundColor: '#FFFFFF',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
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
      minWidth: 340,
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
      marginBottom: 32,
      textAlign: 'center',
      fontFamily: "RobotoBold",
      fontSize: 30,
    },
    text: {
      textAlign: 'center',
      marginRight: 10,
    },
    navigateContainer: {
      justifyContent: "center",
      alignItems: "center", 
      flexDirection: "row"
    },
    btnNavigateTitle: {
      fontFamily: "RobotoBold"
    }
  });

 
  export default RegistrationScreen
