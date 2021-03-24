import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Platform,
} from "react-native";
import { ProgressBar } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import DatePicker from "@dietime/react-native-date-picker";
import Icon from "react-native-vector-icons/FontAwesome";

export default function EnterDOB({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: -150, flex: 0.2 }}>
        <ProgressBar progress={0.4} style={{ width: "100%" }} color="#ff0048" />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="angle-left" color="#ff0048" size={60} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.8 }}>
        <Text style={styles.title}>Select your date of birth:</Text>
        <View style={styles.textGroup}>
          <Text style={styles.text}>Day</Text>
          <Text style={styles.text}>Month</Text>
          <Text style={styles.text}>Year</Text>
        </View>
        {Platform.OS === "ios" && (
          <DateTimePicker
            value={new Date()}
            display="spinner"
            onChange={() => console.log("changed")}
            textColor="white"
            style={{ top: 0 }}
          />
        )}
        {Platform.OS === "android" && (
          <DatePicker
            value={new Date()}
            onChange={(value) => setDate(value)}
            format="dd-mm-yyyy"
            markColor="grey"
            textColor="white"
            fadeColor="#000000"
            height={150}
            startYear={1950}
          />
        )}

        <TouchableOpacity
          style={styles.buttonCreate}
          onPress={() => navigation.navigate("EnterGender")}
        >
          <Text style={styles.textButton}>CONTINUE</Text>
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
    marginTop: 10,
  },
  textButton: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    letterSpacing: 2,
  },
  text: {
    color: "#747483",
    textAlign: "center",
    fontSize: 18,
  },
  title: {
    fontSize: 30,
    color: "#747483",
    fontWeight: "bold",
  },
  textGroup: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 50,
  },
});
