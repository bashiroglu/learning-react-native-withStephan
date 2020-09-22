import React from "react";
import { View, Text, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>HomeScreen HomeScreen</Text>
      <Button title="click me" onPress={() => navigation.push("Blog")} />
      <Button
        title="Details 1"
        onPress={() => navigation.push("Details", { name: "Details 1" })}
      />
      <Button
        title="Details 2"
        onPress={() => navigation.push("Details", { name: "Details 2" })}
      />
      <Button title="toggleDrawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
};

export default Home;
