import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ResultDetail from "./ResultDetail";

export default function ResultsList(props) {
  return (
    <View>
      <Text style={styles.titleStyle}>{props.title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("ResultScreen", { id: item.id });
            }}
          >
            <ResultDetail result={item} navigate={props.navigation} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: "bold",
  },
});
