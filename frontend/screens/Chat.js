import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { FlatList, View, StyleSheet, Modal, Alert } from "react-native";
import { List } from "react-native-paper";
import { SearchBar } from "react-native-elements";
import { Image } from "react-native";

const users = [
  {
    name: "Elena",
    age: 21,
    distance: 58,
    image: require("../assets/1.png"),
    key: 0,
  },
  {
    name: "George",
    age: 30,
    distance: 29,
    image: require("../assets/2.png"),
    key: 1,
  },
  {
    name: "Minodora",
    age: 19,
    distance: 2,
    image: require("../assets/3.png"),
    key: 2,
  },
  {
    name: "Edi",
    age: 19,
    distance: 100,
    image: require("../assets/4.png"),
    key: 3,
  },
  {
    name: "Andreea",
    age: 23,
    distance: 10,
    image: require("../assets/5.png"),
    key: 4,
  },
];

export default function Chat({ navigation }) {
  const [threads, setThreads] = useState(users);
  const [search, setSearch] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <FlatList
      ListHeaderComponent={
        <View style={{ flex: 0.1 }}>
          <SearchBar
            placeholder="Type here..."
            onChangeText={(text) => setSearch(text)}
            value={search}
            containerStyle={{
              backgroundColor: "black",
            }}
            inputContainerStyle={{ backgroundColor: "#cfcfcf" }}
            inputStyle={{ color: "black" }}
          />
          <Modal
            animationType="slide"
            visible={false}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          ></Modal>
        </View>
      }
      data={threads}
      keyExtractor={(item) => item.key.toString()}
      ItemSeparatorComponent={() => (
        <View
          style={{
            width: "85%",
            backgroundColor: "gray",
            height: 0.5,
            alignSelf: "flex-end",
          }}
        ></View>
      )}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("Room")}>
          <List.Item
            title={item.name}
            description={"Say hi to " + item.name}
            titleNumberOfLines={1}
            titleStyle={styles.listTitle}
            descriptionStyle={styles.listDescription}
            descriptionNumberOfLines={1}
            left={() => (
              <TouchableOpacity
                style={styles.profilePhoto}
                onPress={() => setModalVisible(true)}
              >
                <Image
                  source={item.image}
                  resizeMode="cover"
                  style={{ flex: 1, width: "100%" }}
                />
              </TouchableOpacity>
            )}
          />
        </TouchableOpacity>
      )}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  listTitle: {
    fontSize: 22,
    color: "gray",
    fontWeight: "bold",
  },
  listDescription: {
    fontSize: 16,
    color: "gray",
  },
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 50,
    overflow: "hidden",
    alignItems: "center",
    top: 5,
  },
});
