import React from "react";
import { View, Text, Button } from "react-native";

const Blog = ({ navigation }) => {
  return (
    <View>
      <Text>BlogScreen BlogScreen</Text>
      <Button
        title="Details 2 page"
        onPress={() =>
          navigation.navigate("Home", {
            screen: "Details",
            params: {
              name: "Details 2",
            },
          })
        }
      />
    </View>
  );
};

export default Blog;
