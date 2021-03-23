import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Loading from "./screens/Loading";
import Welcome from "./screens/Welcome";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import EnterName from "./screens/EnterName";
import EnterDOB from "./screens/EnterDOB";
import EnterGender from "./screens/EnterGender";
import EnterInterest from "./screens/EnterInterest";
import EnterPhotos from "./screens/EnterPhotos";

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Loading"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="EnterName" component={EnterName} />
          <Stack.Screen name="EnterDOB" component={EnterDOB} />
          <Stack.Screen name="EnterGender" component={EnterGender} />
          <Stack.Screen name="EnterInterest" component={EnterInterest} />
          <Stack.Screen name="EnterPhotos" component={EnterPhotos} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
