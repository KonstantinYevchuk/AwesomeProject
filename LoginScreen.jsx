import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

const LoginScreen = () => {
    const [value, setValue] = useState('')
    const handleInput = (text) => setValue(text)
    return (
            <TextInput 
            placeholder="Login"
            value={value}
            onChangeText={handleInput}
            style={styles.input}
            />
    )
};

const styles = StyleSheet.create({
    input: {
      backgroundColor: "#bab7b7",
      padding: 5,
      paddingLeft: 10,
      paddingRight: 10,
    },
  });