import React, { useState, useContext } from "react";
import { Text, View, TextInput, StyleSheet, Button } from "react-native";
import { Context } from "../context/BlogContext";

function EditBlog(props) {
  const { state, editBlog } = useContext(Context);
  const id = props.navigation.getParam("id");
  const blogPostToEdit = state.find(
    (item) => item.id === props.navigation.getParam("id")
  );
  const [title, setTitle] = useState(blogPostToEdit.title);
  const [content, setContent] = useState(blogPostToEdit.content);

  console.log("====================================");
  console.log(id);
  console.log("====================================");

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
          editBlog(id, title, content);
          setTitle("");
          setContent("");
        }}
        title="edit blog"
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

export default EditBlog;
