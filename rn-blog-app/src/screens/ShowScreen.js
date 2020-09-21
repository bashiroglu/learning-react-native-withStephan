import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Context } from "../context/BlogContext";

const ShowScreen = (props) => {
  console.log("====================================");
  console.log(ShowScreen);
  console.log("====================================");
  const id = props.navigation.getParam("id");
  console.log("====================================");
  console.log(id);
  console.log("====================================");
  const { state } = React.useContext(Context);

  const blogPost = state.find(
    (item) => item.id === props.navigation.getParam("id")
  );
  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("EditBlog", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

export default ShowScreen;
