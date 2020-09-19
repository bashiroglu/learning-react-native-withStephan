import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.inputContainer}>
      <Feather name="search" size={30} style={styles.searchIcon} />
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#f0eeee",
    height: 50,
    borderRadius: 10,
    marginHorizontal: 20,
    flexDirection: "row",
    // alignItems: "center",
  },
  textInput: {
    // marginHorizontal: 10,
    // borderWidth: 4,
    // borderColor: "black",
    flex: 1,
  },
  searchIcon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
