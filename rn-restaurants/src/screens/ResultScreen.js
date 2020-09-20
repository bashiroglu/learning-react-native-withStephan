import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { View, StyleSheet, FlatList } from "react-native";
import api from "../api/yelp";

const ResultScreen = ({ navigation }) => {
  const id = navigation.getParam("id");

  const [results, setResults] = useState(null);
  const getData = async () => {
    const response = await api.get(`${id}`);
    setResults(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!results) {
    return null;
  }

  return (
    <View>
      <FlatList
        data={results.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 160,
  },
});

export default ResultScreen;
