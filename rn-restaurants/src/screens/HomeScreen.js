import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import { GroupRestaurants } from "../util/utils";

const HomeScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>{term}</Text>
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={GroupRestaurants("$", results)}
          navigation={navigation}
        />
        <ResultsList
          title="Bit Pricer"
          results={GroupRestaurants("$$", results)}
          navigation={navigation}
        />
        <ResultsList
          title="Big Spender"
          results={GroupRestaurants("$$$", results)}
          navigation={navigation}
        />
      </ScrollView>
      <Text>{errorMessage}</Text>
      <Text>{results.length}</Text>
    </>
  );
};

export default HomeScreen;
