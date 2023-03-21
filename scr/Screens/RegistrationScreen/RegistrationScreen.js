import { useState } from "react";
import { Text, TextInput, StyleSheet } from "react-native";

const RegistrationScreen = () => {
    const [value, setValue] = useState('')
    const handleInput = (text) => setValue(text)
    return (
            <>
            <Text style={title.title}>Регистрация</Text>
            <TextInput 
            placeholder="Name"
            value={value}
            onChangeText={handleInput}
            style={styles.input}
            />
            </>
    )
};

const styles = StyleSheet.create({
    input: {
      backgroundColor: "#bab7b7",
      padding: 5,
      paddingLeft: 10,
      paddingRight: 10,
      width: 70,
      marginBottom: 10
    },
  });

  const title = StyleSheet.create({
    title: {
      marginBottom: 10
    },
  });

  export default RegistrationScreen
