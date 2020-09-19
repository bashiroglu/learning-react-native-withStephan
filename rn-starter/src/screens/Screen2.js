import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

function FlatListComp() {
  const friends = [
    { name: "Hasan", key: "1242" },
    { name: "Hasan", key: "1222" },
    { name: "Hasan", key: "122422" },
    { name: "Hasan", key: "132433" },
    { name: "Hasan", key: "1524423" },
    { name: "Hasan", key: "1224342" },
    { name: "Hasan", key: "2323441" },
    { name: "Hghasan", key: "124243" },
    { name: "Hasan", key: "2424331" },
    { name: "Hasan", key: "1424323" },
    { name: "Hasan", key: "1232434" },
    { name: "Hasan", key: "1234234" },
    { name: "Hasan", key: "2431" },
    { name: "Hasan", key: "1243" },
  ];
  return (
    <FlatList
      keyExtractor={(item) => item.key}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 8,
  },
});

export default FlatListComp;
