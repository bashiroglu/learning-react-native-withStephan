import React, { useState, useContext } from "react";
import { Text, View, TextInput, StyleSheet, Button } from "react-native";
import { Context } from "../context/BlogContext";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlog } = useContext(Context);

  return (
    <View>
      <Text> title </Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(newValue) => {
          setTitle(newValue);
        }}
      />
      <Text> content </Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(newValue) => {
          setContent(newValue);
        }}
      />
      <Button
        onPress={() => {
          addBlog({ title, content });
          setTitle("");
          setContent("");
        }}
        title="add blog"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 2,
    paddingHorizontal: 5,
    fontSize: 16,
  },
});

export default CreateBlog;
