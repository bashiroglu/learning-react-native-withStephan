import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Button } from "react-native";

const HomeScreen = (props) => {
  console.log(props);
  return (
    <View>
      <Button
        title="press"
        onPress={() => props.navigation.navigate("Screen")}
      ></Button>
      <TouchableOpacity onPress={() => props.navigation.navigate("Screen2")}>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("FlatList")}>
        <Text>FlatList</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
