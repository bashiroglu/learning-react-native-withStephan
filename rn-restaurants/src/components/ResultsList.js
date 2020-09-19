import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultDetail from "./ResultDetail";

export default function ResultsList(props) {
  return (
    <View>
      <Text style={styles.titleStyle}>{props.title}</Text>
      <FlatList
        horizontal
        data={props.results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => <ResultDetail result={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: "bold",
  },
});
