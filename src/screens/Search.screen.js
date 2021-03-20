import React, { useState } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

import useResults from "../hooks/useResults.hook";

import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList.component";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <ScrollView>
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={() => searchApi(term)}
        />
        {errorMessage.length > 0 ? (
          <Text style={styles.errorText}>ERROR: {errorMessage}</Text>
        ) : null}
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
        <ResultsList
          results={filterResultsByPrice("$$$$")}
          title="Ultra Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  regText: {
    color: "blue",
  },
  errorText: {
    color: "red",
    fontWeight: "bold",
  },
});

export default SearchScreen;
