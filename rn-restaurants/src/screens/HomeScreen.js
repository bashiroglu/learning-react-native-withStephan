import React, { useState } from "react";
import { View, Text } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import { GroupRestaurants } from "../util/utils";

const HomeScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>{term}</Text>
      <ResultsList
        title="Cost Effective"
        results={GroupRestaurants("$", results)}
      />
      <ResultsList
        title="Bit Pricer"
        results={GroupRestaurants("$$", results)}
      />
      <ResultsList
        title="Big Spender"
        results={GroupRestaurants("$$$", results)}
      />
      <Text>{errorMessage}</Text>
      <Text>{results.length}</Text>
    </View>
  );
};

export default HomeScreen;
