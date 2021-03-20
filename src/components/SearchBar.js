import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Ionicons name="md-search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 8,
    marginHorizontal: 15,
    borderWidth: 3,
    borderColor: "black",
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
    marginRight: 10,
    marginLeft: -8,
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: "center",
    color: "black",
    marginHorizontal: 15,
  },
});

export default SearchBar;
