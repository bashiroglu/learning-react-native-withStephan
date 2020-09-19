import React from "react";
import { View, Text, Image } from "react-native";

const ImageBox = (props) => {
  return (
    <View>
      <Image source={props.src} />
      <Text>{props.name}</Text>
    </View>
  );
};

export default ImageBox;
