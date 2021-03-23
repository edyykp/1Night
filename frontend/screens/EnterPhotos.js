import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  Image,
} from "react-native";
import { ProgressBar } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

export default function EnterPhotos({ navigation }) {
  const [image, setImage] = useState(null);
  const [opacity, setOpacity] = useState(1);

  const pickPhoto = async () => {
    const { granted } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    if (granted) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        base64: false,
      });
      console.log(result);
      if (!result.cancelled) {
        setImage(result.uri);
        setOpacity(0);
      }
    } else {
      Alert.alert("Permission denied");
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.2, marginTop: -150 }}>
        <ProgressBar progress={1} style={{ width: "100%" }} color="#ff0048" />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="angle-left" color="#ff0048" size={60} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.8, paddingBottom: 50 }}>
        <Text style={styles.title}>Upload your first photo:</Text>
        {image == null ? (
          <TouchableOpacity
            style={styles.pickPhoto}
            onPress={() => pickPhoto()}
          >
            <Icon name="plus" color="#ababab" size={60} />
          </TouchableOpacity>
        ) : (
          <>
            <Image
              source={{ uri: image }}
              style={{
                width: "100%",
                flex: 1,
              }}
              resizeMode="cover"
            />
            <TouchableOpacity
              onPress={() => setImage(null)}
              style={{ backgroundColor: "grey" }}
            >
              <Icon
                name="trash"
                size={30}
                color="lightgrey"
                style={{
                  width: 50,
                  height: 50,
                  position: "absolute",
                  marginTop: -40,
                  marginLeft: 5,
                  opacity: 0.5,
                }}
              />
            </TouchableOpacity>
          </>
        )}

        <TouchableOpacity
          style={styles.buttonCreate}
          onPress={() => navigation.navigate("EnterPhotos")}
        >
          <Text style={styles.text}>FINISH</Text>
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
    paddingBottom: 20,
  },
  pickPhoto: {
    backgroundColor: "grey",
    marginTop: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
