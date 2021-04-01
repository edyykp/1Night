import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Slider from "react-native-smooth-slider";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

export default function Profile() {
  const [range, setRange] = useState(0);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);

  const pickPhoto1 = async () => {
    const { granted } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    if (granted) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        base64: false,
      });
      console.log(result);
      if (!result.cancelled) {
        setImage1(result.uri);
      }
    } else {
      Alert.alert("Permission denied");
    }
  };

  const pickPhoto2 = async () => {
    const { granted } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    if (granted) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        base64: false,
      });
      console.log(result);
      if (!result.cancelled) {
        setImage2(result.uri);
      }
    } else {
      Alert.alert("Permission denied");
    }
  };

  const pickPhoto3 = async () => {
    const { granted } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    if (granted) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        base64: false,
      });
      console.log(result);
      if (!result.cancelled) {
        setImage3(result.uri);
      }
    } else {
      Alert.alert("Permission denied");
    }
  };

  const removeImage1 = () => {
    setImage1(image2);
    setImage2(image3);
    setImage3(null);
  };
  const removeImage2 = () => {
    setImage2(image3);
    setImage3(null);
  };
  const removeImage3 = () => {
    setImage3(null);
  };
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.photosContainer}>
          <View style={styles.titlePhoto}>
            <Text style={styles.generalText}>Your photos</Text>
          </View>
          <View style={styles.photos}>
            {image1 == null ? (
              <TouchableOpacity
                style={styles.pickPhoto}
                onPress={() => pickPhoto1()}
              >
                <Icon name="plus" color="#ababab" size={30} />
              </TouchableOpacity>
            ) : (
              <View style={styles.pickPhoto}>
                <Image
                  source={{ uri: image1 }}
                  style={{
                    width: "100%",
                    flex: 1,
                  }}
                  resizeMode="cover"
                />
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    top: 5,
                    left: 5,
                    borderRadius: 5,
                    overflow: "hidden",
                  }}
                  onPress={() => removeImage1()}
                >
                  <Icon
                    name="trash"
                    size={30}
                    color="black"
                    style={{
                      width: 25,
                      height: 35,
                      backgroundColor: "gray",
                      opacity: 0.8,
                    }}
                  />
                </TouchableOpacity>
              </View>
            )}
            {image2 == null ? (
              <TouchableOpacity
                style={styles.pickPhoto}
                onPress={() => pickPhoto2()}
              >
                <Icon name="plus" color="#ababab" size={30} />
              </TouchableOpacity>
            ) : (
              <View style={styles.pickPhoto}>
                <Image
                  source={{ uri: image2 }}
                  style={{
                    width: "100%",
                    flex: 1,
                  }}
                  resizeMode="cover"
                />
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    top: 5,
                    left: 5,
                    borderRadius: 5,
                    overflow: "hidden",
                  }}
                  onPress={() => removeImage2()}
                >
                  <Icon
                    name="trash"
                    size={30}
                    color="black"
                    style={{
                      width: 25,
                      height: 35,
                      backgroundColor: "gray",
                      opacity: 0.8,
                    }}
                  />
                </TouchableOpacity>
              </View>
            )}
            {image3 == null ? (
              <TouchableOpacity
                style={styles.pickPhoto}
                onPress={() => pickPhoto3()}
              >
                <Icon name="plus" color="#ababab" size={30} />
              </TouchableOpacity>
            ) : (
              <View style={styles.pickPhoto}>
                <Image
                  source={{ uri: image3 }}
                  style={{
                    width: "100%",
                    flex: 1,
                  }}
                  resizeMode="cover"
                />
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    top: 5,
                    left: 5,
                    borderRadius: 5,
                    overflow: "hidden",
                  }}
                  onPress={() => removeImage3()}
                >
                  <Icon
                    name="trash"
                    size={30}
                    color="black"
                    style={{
                      width: 25,
                      height: 35,
                      backgroundColor: "gray",
                      opacity: 0.8,
                    }}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        <View style={styles.ratingsContainer}>
          <View style={styles.likesContainer}>
            <Text style={styles.likes}>250</Text>
            <Text style={styles.likesComment}>one nights</Text>
          </View>
          <View style={styles.superlikesContainer}>
            <Text style={styles.superlikes}>32</Text>
            <Text style={styles.likesComment}>more nights</Text>
          </View>
        </View>
        <View style={styles.personalContainer}>
          <View style={styles.generalRowContainer}>
            <Text style={styles.generalText}>Name:</Text>
            <Text style={styles.generalText}>Age:</Text>
            <Text style={styles.generalText}>Username:</Text>
            <Text style={styles.generalText}>Email:</Text>
            <Text style={styles.generalText}>Gender:</Text>
          </View>

          <View style={styles.specificRowContainer}>
            <Text style={styles.specificText}>Eduard</Text>
            <Text style={styles.specificText}>21</Text>
            <Text style={styles.specificText}>edykp</Text>
            <Text style={styles.specificText}>eduard.c.stoica10@gmail.com</Text>
            <Text style={styles.specificText}>Male</Text>
          </View>
        </View>
        <View style={styles.rangeContainer}>
          <Text style={styles.generalText}>
            Distance:{"    "}
            {range} km
          </Text>
          <Slider
            color="white"
            value={range}
            minimumValue={0}
            maximumValue={120}
            step={1}
            minimumTrackTintColor="#ff0048"
            thumbTintColor="#ff0048"
            onValueChange={(value) => setRange(value)}
            onSlidingComplete={() => console.log("distance changed")}
          />
        </View>

        <View style={styles.getPremiumContainer}>
          <Text
            style={{
              color: "#b38728",
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Upgrade to premium?
          </Text>
          <Text
            style={{
              color: "#b38728",
              fontSize: 19,
              textAlign: "center",
            }}
          >
            Find out more here:
          </Text>
          <LinearGradient
            colors={["#bf953f", "#b38728", "#fbf5b7", "#aa771c"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 7,
            }}
          >
            <TouchableOpacity
              style={{
                width: "100%",
                height: 50,
                justifyContent: "center",
                borderRadius: 10,
                paddingLeft: 30,
                paddingRight: 30,
              }}
            >
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "#464646" }}
              >
                UPGRADE YOUR ACCOUNT
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    paddingTop: 50,
    paddingBottom: 20,
  },
  ratingsContainer: {
    flex: 0.12,
    width: "95%",
    flexDirection: "row",
  },
  personalContainer: {
    flex: 0.31,
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
    width: "95%",
    flexDirection: "row",
  },
  rangeContainer: {
    flex: 0.1,
    width: "95%",
    marginTop: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
    paddingBottom: 10,
  },
  photosContainer: {
    flex: 0.4,
    width: "95%",
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
    paddingTop: 10,
  },
  getPremiumContainer: {
    flex: 0.2,
    marginTop: 10,
  },
  likesContainer: {
    borderWidth: 0.5,
    borderColor: "gray",
    width: "50%",
    justifyContent: "center",
    borderRadius: 5,
  },
  superlikesContainer: {
    borderWidth: 0.5,
    borderColor: "gray",
    width: "50%",
    justifyContent: "center",
    borderRadius: 5,
  },
  likes: {
    color: "green",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  superlikes: {
    color: "#ff0048",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  likesComment: {
    textAlign: "center",
    fontSize: 16,
    color: "gray",
    marginTop: -5,
  },
  generalText: {
    fontWeight: "bold",
    color: "gray",
    fontSize: 18,
  },
  specificText: {
    fontWeight: "normal",
    color: "gray",
    fontSize: 17,
  },
  generalRowContainer: {
    justifyContent: "space-evenly",
    width: "30%",
  },
  specificRowContainer: {
    justifyContent: "space-evenly",
    width: "70%",
  },
  pickPhoto: {
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    height: "90%",
    width: "30%",
  },
  photos: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 0.9,
    marginTop: 10,
  },
  titlePhoto: {
    flex: 0.13,
  },
});
