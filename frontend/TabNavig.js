import React from "react";
import { Text, Dimensions, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import Svg, { Path } from "react-native-svg";
import Explore from "./screens/Explore";
import Profile from "./screens/Profile";
import Likes from "./screens/Likes";
import Chat from "./screens/Chat";

const Tab = createMaterialBottomTabNavigator();

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

export default function App() {
  return (
    <NavigationContainer independent={true}>
      {/* //coments, globe-americas, grin-hearts, heart-broken, heart, thumbs-up,
        //thumbs-down, user. */}
      <Tab.Navigator
        initialRouteName="Explore"
        screenOptions={{
          headerShown: false,
        }}
        barStyle={{ backgroundColor: "black" }}
        activeColor="#ff0048"
      >
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: (props) => (
              <Icon
                name="comments"
                size={20}
                color={props.focused ? "#ff0048" : "grey"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarIcon: (props) => (
              <Svg viewBox="0 15 70 140" width={25} height={50}>
                <Path
                  d="M20.04,30.77v-4c1.17-1.04,2.36-2.05,3.56-3.03c1.2-0.98,2.55-2.03,4.03-3.17c1.48-1.14,3.01-2.23,4.59-3.27
		c1.58-1.04,3.38-2.12,5.4-3.22c1.79,2.6,2.69,5.09,2.69,7.47c0,1.3-0.28,2.75-0.83,4.35c-0.55,1.6-1.31,3.42-2.27,5.47
		s-2.16,4.62-3.59,7.71c-3.84,8.5-6.71,15.5-8.62,21.02c-1.9,5.52-2.86,9.27-2.86,11.25c0,0.16,0.11,0.8,0.34,1.9
		c0.23,1.11,0.34,1.94,0.34,2.49c0,0.94-0.27,1.45-0.81,1.51s-1.29-0.13-2.27-0.59c-2.51-1.24-4.18-2.41-5.03-3.52
		c-0.85-1.11-1.27-2.54-1.27-4.3c0-3.16,1.16-8.06,3.47-14.7c1.17-3.35,2.54-6.69,4.1-10.01s3.29-6.68,5.2-10.08
		c1.9-3.4,3.7-6.53,5.4-9.4C27.93,26.2,24.07,28.24,20.04,30.77z"
                  fill={props.focused ? "#ff0048" : "gray"}
                />
              </Svg>
            ),
          }}
        />
        <Tab.Screen
          name="Likes"
          component={Likes}
          options={{
            tabBarIcon: (props) => (
              <Icon
                name="heart"
                size={20}
                color={props.focused ? "#ff0048" : "grey"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: (props) => (
              <Icon
                name="user"
                size={20}
                color={props.focused ? "#ff0048" : "grey"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
