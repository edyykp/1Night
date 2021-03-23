import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { Input } from "react-native-elements";
import { ProgressBar } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

export default function EnterName({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={{ flex: 0.2, marginTop: -150 }}>
          <ProgressBar
            progress={0.2}
            style={{ width: "100%" }}
            color="#ff0048"
          />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="angle-left" color="#ff0048" size={60} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.8 }}>
          <Input
            placeholder="Your first name"
            label="Enter your name:"
            labelStyle={styles.label}
            inputStyle={styles.input}
          />
          <TouchableOpacity
            style={styles.buttonCreate}
            onPress={() => navigation.navigate("EnterDOB")}
          >
            <Text style={styles.text}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
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
    marginTop: 10,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    letterSpacing: 2,
  },
});
