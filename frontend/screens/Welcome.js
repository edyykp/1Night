import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Svg viewBox="0 0 50 100" width={200} height={400}>
          <Path
            d="M20.04,30.77v-4c1.17-1.04,2.36-2.05,3.56-3.03c1.2-0.98,2.55-2.03,4.03-3.17c1.48-1.14,3.01-2.23,4.59-3.27
		c1.58-1.04,3.38-2.12,5.4-3.22c1.79,2.6,2.69,5.09,2.69,7.47c0,1.3-0.28,2.75-0.83,4.35c-0.55,1.6-1.31,3.42-2.27,5.47
		s-2.16,4.62-3.59,7.71c-3.84,8.5-6.71,15.5-8.62,21.02c-1.9,5.52-2.86,9.27-2.86,11.25c0,0.16,0.11,0.8,0.34,1.9
		c0.23,1.11,0.34,1.94,0.34,2.49c0,0.94-0.27,1.45-0.81,1.51s-1.29-0.13-2.27-0.59c-2.51-1.24-4.18-2.41-5.03-3.52
		c-0.85-1.11-1.27-2.54-1.27-4.3c0-3.16,1.16-8.06,3.47-14.7c1.17-3.35,2.54-6.69,4.1-10.01s3.29-6.68,5.2-10.08
		c1.9-3.4,3.7-6.53,5.4-9.4C27.93,26.2,24.07,28.24,20.04,30.77z"
            fill="#ff0048"
          />
        </Svg>
      </View>
      <View style={styles.textContainer}>
        <Text style={{ color: "grey", textAlign: "center" }}>
          By tapping Log in or Sign up, you agree to our{" "}
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: "grey",
              textDecorationLine: "underline",
              textAlign: "center",
            }}
          >
            {" "}
            Terms and conditions.
          </Text>
        </TouchableOpacity>
        <Text style={{ color: "grey", textAlign: "center" }}>
          Learn how we process your data in our{" "}
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: "grey",
              textDecorationLine: "underline",
              textAlign: "center",
            }}
          >
            Privacy Policy
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.text}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLoginFacebook}>
          <Text style={styles.text}>Log in with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLoginGoogle}>
          <Text style={styles.textGoogle}>Log in with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50,
  },
  textContainer: {
    flex: 0.1,
    paddingLeft: 30,
    paddingRight: 30,
  },
  logo: {
    flex: 0.6,
    justifyContent: "center",
  },
  buttonGroup: {
    flex: 0.3,
    width: "80%",
    justifyContent: "space-around",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 26,
  },
  textGoogle: {
    color: "black",
    textAlign: "center",
    fontSize: 26,
  },
  buttonLogin: {
    height: 50,
    backgroundColor: "#ff0048",
    justifyContent: "center",
    borderRadius: 10,
  },
  signupText: {
    textDecorationLine: "underline",
    textAlign: "center",
    fontSize: 20,
    color: "#ff0048",
  },
  buttonLoginFacebook: {
    height: 50,
    backgroundColor: "blue",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonLoginGoogle: {
    height: 50,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    borderRadius: 10,
  },
});
