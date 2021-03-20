import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

import yelp from "../api/yelp.api";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);

  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <>
      <Text style={styles.headerStyle}>{result.name}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (
            <>
              <Image source={{ uri: item }} style={styles.imageStyle} />
            </>
          );
        }}
      />
      <Text>Rating: {result.rating}</Text>
      <Text>Phone: {result.display_phone}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  imageStyle: {
    height: 180,
    width: 260,
    marginHorizontal: 15,
  },
});

export default ResultsShowScreen;
