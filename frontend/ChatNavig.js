import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Chat from "./screens/Chat";
import Room from "./screens/Room";
const Stack = createStackNavigator();

export default class ChatNavig extends Component {
  render() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName="Chat"
          screenOptions={{
            headerStyle: {
              backgroundColor: "black",
              borderBottomWidth: 1,
              borderBottomColor: "gray",
              height: 100,
            },
            headerTitleStyle: {
              color: "white",
              fontSize: 25,
              marginLeft: 15,
              marginBottom: 25,
              letterSpacing: 1,
            },
          }}
        >
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen
            name="Room"
            component={Room}
            options={({ route }) => ({
              title: route.params.thread.name,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
