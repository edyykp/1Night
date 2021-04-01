import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { FlatList, View, StyleSheet, ScrollView } from "react-native";
import { Divider, List } from "react-native-paper";
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

export default function Chat() {
  const [threads, setThreads] = useState(users);
  const [search, setSearch] = useState();
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View style={{ flex: 0.2, justifyContent: "flex-end" }}>
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
      </View>
      <ScrollView style={styles.container}>
        <FlatList
          data={threads}
          keyExtractor={(item) => item.key}
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
            <TouchableOpacity>
              <List.Item
                title={item.name}
                description={"Say hi to " + item.name}
                titleNumberOfLines={1}
                titleStyle={styles.listTitle}
                descriptionStyle={styles.listDescription}
                descriptionNumberOfLines={1}
                left={() => (
                  <TouchableOpacity style={styles.profilePhoto}>
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
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
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
