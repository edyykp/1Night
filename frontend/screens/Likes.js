import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Likes({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Likes page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
