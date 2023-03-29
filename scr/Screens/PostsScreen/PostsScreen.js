import { View, Text, StyleSheet } from "react-native";


const PostsScreen = ({ navigation, route }) => {
    const { email, password } = route.params;
  return (
    <View style={styles.containerPost}>
      <Text>Posts Screen:{email} {password} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPost: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#FFFFFF',
  },
});

export default PostsScreen;