import React, { Component, useState, createRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  PanResponder,
  Dimensions,
  Animated,
} from "react-native";
//import Icon from "react-native-vector-icons/FontAwesome5";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
const users = [
  {
    name: "Elena",
    age: 21,
    distance: 58,
    image: require("../assets/1.png"),
  },
  {
    name: "George",
    age: 30,
    distance: 29,
    image: require("../assets/2.png"),
  },
  {
    name: "Minodora",
    age: 18,
    distance: 2,
    image: require("../assets/3.png"),
  },
  {
    name: "Edi",
    age: 19,
    distance: 100,
    image: require("../assets/4.png"),
  },
  {
    name: "Andreea",
    age: 23,
    distance: 10,
    image: require("../assets/5.png"),
  },
];
export default class Explore extends Component {
  constructor() {
    super();
    this.currentCard = createRef();
    this.position = new Animated.ValueXY();
    this.state = {
      currentIndex: 0,
    };
    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ["-10deg", "0deg", "10deg"],
      extrapolate: "clamp",
    });
    this.rotateAndTranslate = {
      transform: [
        {
          rotate: this.rotate,
        },
        ...this.position.getTranslateTransform(),
      ],
    };
    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: "clamp",
    });
    this.nopeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: "clamp",
    });
    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: "clamp",
    });
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: "clamp",
    });
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
            useNativeDriver: true,
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 });
            });
          });
        } else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
            useNativeDriver: true,
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 });
            });
          });
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4,
            useNativeDriver: true,
          }).start();
        }
      },
    });
  }

  swipeCardYes = () => {
    Animated.spring(this.position, {
      toValue: { x: SCREEN_WIDTH + 100, y: 0 },
      useNativeDriver: true,
    }).start(() => {
      this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
        this.position.setValue({ x: 0, y: 0 });
      });
    });
  };

  swipeCardNo = () => {
    Animated.spring(this.position, {
      toValue: { x: -SCREEN_WIDTH - 100, y: 0 },
      useNativeDriver: true,
    }).start(() => {
      this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
        this.position.setValue({ x: 0, y: 0 });
      });
    });
  };

  swipeCardSuperlike = () => {
    Animated.spring(this.position, {
      toValue: { x: 0, y: -SCREEN_HEIGHT },
      useNativeDriver: true,
    }).start(() => {
      this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
        this.position.setValue({ x: 0, y: 0 });
      });
    });
  };

  renderUsers = () => {
    return users
      .map((user, key) => {
        if (key < this.state.currentIndex) {
          return null;
        } else if (key == this.state.currentIndex) {
          return (
            <Animated.View
              {...this.panResponder.panHandlers}
              key={key}
              style={[
                this.rotateAndTranslate,
                {
                  height: "100%",
                  width: SCREEN_WIDTH,
                  padding: 10,
                  position: "absolute",
                },
              ]}
            >
              <View
                style={{
                  height: "18%",
                  backgroundColor: "black",
                  justifyContent: "flex-end",
                  padding: 20,
                }}
              >
                <Text
                  style={{
                    color: "gray",
                    fontSize: 30,
                    fontWeight: "bold",
                  }}
                >
                  {user.name}, {user.age}
                </Text>
                <Text style={{ color: "gray", fontSize: 20 }}>
                  {user.distance} km away
                </Text>
              </View>
              <Animated.View
                style={{
                  opacity: this.likeOpacity,
                  transform: [{ rotate: "-30deg" }],
                  position: "absolute",
                  top: "23%",
                  left: 40,
                  zIndex: 1000,
                }}
              >
                <Text
                  style={{
                    borderWidth: 1,
                    borderColor: "green",
                    color: "green",
                    fontSize: 32,
                    fontWeight: "800",
                    padding: 10,
                    borderRadius: 10,
                  }}
                >
                  1 Night
                </Text>
              </Animated.View>
              <Animated.View
                style={{
                  opacity: this.nopeOpacity,
                  transform: [{ rotate: "30deg" }],
                  position: "absolute",
                  top: "23%",
                  right: 40,
                  zIndex: 1000,
                }}
              >
                <Text
                  style={{
                    borderWidth: 1,
                    borderColor: "red",
                    color: "red",
                    fontSize: 32,
                    fontWeight: "800",
                    padding: 10,
                    borderRadius: 10,
                  }}
                >
                  No Night
                </Text>
              </Animated.View>
              <Image
                style={{
                  flex: 1,
                  height: null,
                  width: null,
                  resizeMode: "cover",
                  borderRadius: 20,
                }}
                source={user.image}
              />
              <View
                style={{
                  height: "7%",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="heart-dislike"
                  size={32}
                  color="red"
                  onPress={() => this.swipeCardNo()}
                />
                <FontAwesome5
                  name="grin-hearts"
                  size={32}
                  color="#ff0048"
                  onPress={() => this.swipeCardSuperlike()}
                />
                <Ionicons
                  name="heart"
                  size={32}
                  color="green"
                  onPress={() => this.swipeCardYes()}
                />
              </View>
            </Animated.View>
          );
        } else {
          return (
            <Animated.View
              key={key}
              style={{
                opacity: this.nextCardOpacity,
                transform: [{ scale: this.nextCardScale }],
                height: "100%",
                width: SCREEN_WIDTH,
                padding: 10,
                position: "absolute",
              }}
            >
              <View
                style={{
                  height: "18%",
                  backgroundColor: "black",
                  justifyContent: "flex-end",
                  padding: 20,
                }}
              >
                <Text
                  style={{
                    color: "gray",
                    fontSize: 30,
                    fontWeight: "bold",
                  }}
                >
                  {user.name}, {user.age}
                </Text>
                <Text style={{ color: "gray", fontSize: 20 }}>
                  {user.distance} km away
                </Text>
              </View>
              <Image
                style={{
                  flex: 1,
                  height: null,
                  width: null,
                  resizeMode: "cover",
                  borderRadius: 20,
                }}
                source={user.image}
              />
              <View
                style={{
                  height: "7%",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Ionicons name="heart-dislike" size={32} color="red" />
                <FontAwesome5 name="grin-hearts" size={32} color="#ff0048" />
                <Ionicons name="heart" size={32} color="green" />
              </View>
            </Animated.View>
          );
        }
      })
      .reverse();
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>{this.renderUsers()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
