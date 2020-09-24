import React from "react";
import { View, Text, Button } from "react-native";

export default function TrackList({ navigation }) {
  return (
    <View>
      <Text>TrackList</Text>
      <Button
        title="go to Details"
        onPress={() => navigation.push("TrackDetail")}
      />
    </View>
  );
}
