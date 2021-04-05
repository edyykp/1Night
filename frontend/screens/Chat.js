import React, { useState } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Modal,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { List } from "react-native-paper";
import { SearchBar } from "react-native-elements";

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
  const [selectedUser, setSelectedUser] = useState(null);

  const ProfileModal = () => {
    if (selectedUser == null) {
      return null;
    } else
      return (
        <Modal
          animationType="fade"
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
          transparent
        >
          <TouchableOpacity
            onPressOut={() => {
              setModalVisible(false);
            }}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            activeOpacity={1}
          >
            <TouchableWithoutFeedback>
              <View style={styles.modalContainer}>
                <View
                  style={{
                    flex: 0.85,
                    width: "100%",
                    borderColor: "#ff0048",
                    borderWidth: 2,
                  }}
                >
                  <Image
                    source={selectedUser.image}
                    style={{
                      flex: 1,
                      width: "100%",
                    }}
                    resizeMode="cover"
                  />
                </View>
                <View
                  style={{
                    flex: 0.15,
                    justifyContent: "center",
                    alignSelf: "flex-start",
                    marginLeft: 10,
                  }}
                >
                  <Text style={styles.nameText}>
                    {selectedUser.name}, {selectedUser.age}
                  </Text>
                  <Text style={styles.distanceText}>
                    {selectedUser.distance} km away
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </Modal>
      );
  };

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <View style={{ flex: 0.1 }}>
            <SearchBar
              placeholder="Type here..."
              onChangeText={(text) => setSearch(text)}
              value={search}
              containerStyle={{
                backgroundColor: "black",
              }}
              inputContainerStyle={{
                backgroundColor: "#cfcfcf",
                borderRadius: 50,
                height: 40,
              }}
              inputStyle={{ color: "black" }}
            />
          </View>
          <ProfileModal />
        </>
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
        <TouchableOpacity
          onPress={() => navigation.navigate("Room", { thread: item })}
        >
          <List.Item
            title={item.name}
            description={"Say hi to " + item.name + "👋"}
            titleNumberOfLines={1}
            titleStyle={styles.listTitle}
            descriptionStyle={styles.listDescription}
            descriptionNumberOfLines={1}
            left={() => (
              <TouchableOpacity
                style={styles.profilePhoto}
                onPress={() => {
                  setModalVisible(true);
                  setSelectedUser(item);
                }}
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
    color: "#ff0048",
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
  modalContainer: {
    flex: 0.75,
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    backgroundColor: "#ff0048",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  nameText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  distanceText: { color: "white", fontSize: 20 },
});
