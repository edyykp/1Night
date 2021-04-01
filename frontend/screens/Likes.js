import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Likes() {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);

  const _renderItem = ({ item, index }) => {
    return item == null ? (
      <TouchableOpacity style={styles.pickPhoto} onPress={() => pickPhoto()}>
        <Icon name="plus" color="#ababab" size={30} />
      </TouchableOpacity>
    ) : (
      <>
        <Image
          source={{ uri: item }}
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
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={[image1, image2, image3]}
        renderItem={_renderItem}
        sliderWidth={900}
        itemWidth={300}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pickPhoto: {
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    width: "100%",
  },
});
