import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { ProgressBar } from "react-native-paper";
import RadioButtonRN from "radio-buttons-react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function EnterGender({ navigation }) {
  const data = [
    {
      label: "Male",
    },
    {
      label: "Female",
    },
    {
      label: "Other",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.2, marginTop: -150 }}>
        <ProgressBar progress={0.6} style={{ width: "100%" }} color="#ff0048" />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="angle-left" color="#ff0048" size={60} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.8 }}>
        <Text style={styles.title}>Select your gender:</Text>
        <RadioButtonRN
          data={data}
          circleSize={13}
          activeColor="#ff0048"
          box={false}
          textColor="white"
          textStyle={{ fontSize: 18 }}
        />
        <TouchableOpacity
          style={styles.buttonCreate}
          onPress={() => navigation.navigate("EnterInterest")}
        >
          <Text style={styles.text}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "flex-start",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 200,
  },
  label: {
    fontSize: 30,
  },
  input: {
    color: "white",
  },
  buttonCreate: {
    height: 50,
    backgroundColor: "#ff0048",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 30,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    letterSpacing: 2,
  },
  title: {
    fontSize: 30,
    color: "#747483",
    fontWeight: "bold",
  },
});
