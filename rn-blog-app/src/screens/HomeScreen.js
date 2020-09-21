import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const HomeScreen = (props) => {
  const { state, deleteBlog } = useContext(Context);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("ShowScreen", { id: item.id })
              }
            >
              <View style={styles.row}>
                <Text style={styles.iconStyle}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlog(item.id)}>
                  <Feather name="trash" style={styles.titleStyle} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("CreateBlog")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  iconStyle: {
    fontSize: 24,
  },
  titleStyle: {
    fontSize: 24,
  },
});

export default HomeScreen;
