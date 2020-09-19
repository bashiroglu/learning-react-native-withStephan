import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageBox from "../components/ImageBox";

function FlatList() {
  return (
    <View>
      <ImageBox name="hey" src={require("../../assets/beach.jpg")} />
      <ImageBox name="hello" src={require("../../assets/mountain.jpg")} />
      <ImageBox name="hi" src={require("../../assets/forest.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50,
    textAlign: "center",
  },
});

export default FlatList;
