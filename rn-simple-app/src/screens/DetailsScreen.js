import React from "react";
import { View, Text } from "react-native";

const Details = ({ route }) => {
  return (
    <View>
      <Text>Details</Text>
      <Text>{route.params.name}</Text>
    </View>
  );
};

export default Details;
