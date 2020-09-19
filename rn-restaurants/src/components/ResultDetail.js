import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default function ResultDetail({ result }) {
  return (
    <View>
      <Text>{result.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: "bold",
  },
});
