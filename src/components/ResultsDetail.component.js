import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card } from "react-native-elements";

const ResultsDetail = ({ result }) => {
  const { image_url, name } = result;

  return (
    <Card style={styles.cardStyle}>
      <View style={styles.container}>
        {image_url == null || image_url === undefined || image_url === "" ? (
          <View style={styles.blankImage} />
        ) : (
          <Image source={{ uri: image_url }} style={styles.iamgeStyles} />
        )}
        <Text style={styles.nameStyle}>{name}</Text>
        <Text>
          {result.rating} Stars, {result.review_count} Reviews
        </Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: "#ecf0f1",
    marginHorizontal: 5,
    padding: 0,
  },
  container: {
    width: 210,
    height: 140,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
  blankImage: {
    width: 200,
    height: 82,
  },
  iamgeStyles: {
    width: 200,
    height: 82,
    borderRadius: 4,
    flexShrink: 1,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});

export default ResultsDetail;
