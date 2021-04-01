import React, { Component, createRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  PanResponder,
  Dimensions,
  Animated,
} from "react-native";
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
    age: 19,
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
      fadeAnimation: new Animated.Value(0),
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
    this.superlikeOpacity = this.position.y.interpolate({
      inputRange: [-SCREEN_HEIGHT / 2, 0, SCREEN_HEIGHT / 2],
      outputRange: [1, 0, 0],
      extrapolate: "clamp",
    });
    this.nextCardOpacity = Animated.add(
      this.position.x,
      this.position.y
    ).interpolate({
      inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
      outputRange: [1, 0, 1],
      extrapolate: "clamp",
    });
    this.nextCardScale = Animated.add(
      this.position.x,
      this.position.y
    ).interpolate({
      inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
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
          delete users[this.state.currentIndex];
        } else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
            useNativeDriver: true,
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 });
            });
          });
          delete users[this.state.currentIndex];
        } else if (gestureState.dy < -100) {
          Animated.spring(this.position, {
            toValue: { x: gestureState.dx, y: -SCREEN_HEIGHT },
            useNativeDriver: true,
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 });
            });
          });
          delete users[this.state.currentIndex];
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
      delete users[this.state.currentIndex];
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
      delete users[this.state.currentIndex];
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
      delete users[this.state.currentIndex];
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
              style={[this.rotateAndTranslate, styles.animatedUserContainer]}
            >
              <View style={styles.userContainer}>
                <Text style={styles.nameText}>
                  {user.name}, {user.age}
                </Text>
                <Text style={styles.distanceText}>{user.distance} km away</Text>
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
                <Text style={styles.yesText}>1 Night</Text>
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
                <Text style={styles.nopeText}>No Night</Text>
              </Animated.View>
              <Animated.View
                style={{
                  opacity: this.superlikeOpacity,
                  position: "absolute",
                  top: "80%",
                  left: "25%",
                  zIndex: 1000,
                }}
              >
                <Text style={styles.superlikeText}>More Nights</Text>
              </Animated.View>
              <Image style={styles.image} source={user.image} />
              <View style={styles.iconList}>
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
              style={
                ({
                  opacity: this.nextCardOpacity,
                  transform: [
                    {
                      scale: this.nextCardScale,
                    },
                  ],
                },
                styles.animatedUserContainer)
              }
            >
              <View style={styles.userContainer}>
                <Text style={styles.nameText}>
                  {user.name}, {user.age}
                </Text>
                <Text style={styles.distanceText}>{user.distance} km away</Text>
              </View>
              <Image style={styles.image} source={user.image} />
              <View style={styles.iconList}>
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
        }
      })
      .reverse();
  };

  fadeIn = () => {
    Animated.timing(this.state.fadeAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    return 1;
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>{this.renderUsers()}</View>
        {users[users.length - 1] == null
          ? this.fadeIn() && (
              <View style={styles.container}>
                <Animated.View style={{ opacity: this.state.fadeAnimation }}>
                  <Text style={styles.text}>
                    Out of cards for today. Only 30 cards are allowed daily.
                    Come back tomorrow.
                  </Text>
                </Animated.View>
              </View>
            )
          : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  text: {
    color: "gray",
    fontSize: 30,
    textAlign: "center",
  },
  iconList: {
    height: "7%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "cover",
    borderRadius: 20,
  },
  nameText: {
    color: "gray",
    fontSize: 30,
    fontWeight: "bold",
  },
  distanceText: { color: "gray", fontSize: 20 },
  userContainer: {
    height: "18%",
    backgroundColor: "black",
    justifyContent: "flex-end",
    padding: 20,
  },
  animatedUserContainer: {
    height: "100%",
    width: SCREEN_WIDTH,
    padding: 10,
    position: "absolute",
  },
  superlikeText: {
    borderWidth: 1,
    borderColor: "#ff0048",
    color: "#ff0048",
    fontSize: 32,
    fontWeight: "800",
    padding: 10,
    borderRadius: 10,
  },
  nopeText: {
    borderWidth: 1,
    borderColor: "red",
    color: "red",
    fontSize: 32,
    fontWeight: "800",
    padding: 10,
    borderRadius: 10,
  },
  yesText: {
    borderWidth: 1,
    borderColor: "green",
    color: "green",
    fontSize: 32,
    fontWeight: "800",
    padding: 10,
    borderRadius: 10,
  },
});
