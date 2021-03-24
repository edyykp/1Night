import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Explore({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to our 1Night App</Text>
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
