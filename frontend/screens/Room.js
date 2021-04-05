import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Modal,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  GiftedChat,
  Bubble,
  Send,
  InputToolbar,
} from "react-native-gifted-chat";
import { Entypo } from "@expo/vector-icons";
import { IconButton } from "react-native-paper";

export default function Room(thread) {
  const [modalVisible, setModalVisible] = useState(true);
  const navigation = useNavigation();
  const friendName = thread.route.params.thread.name;
  const friendImage = thread.route.params.thread.image;
  const [messages, setMessages] = useState([
    /**
     * Mock message data
     */
    // example of system message
    {
      _id: 0,
      text: "New room created.",
      createdAt: new Date().getTime(),
      system: true,
    },
    // example of chat message
    {
      _id: 1,
      text: "Hello!",
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: "Test User",
        avatar: friendImage,
      },
    },
  ]);

  function renderLoading() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6646ee" />
      </View>
    );
  }

  // helper method that is sends a message
  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage));
  }

  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <IconButton icon="send-circle" size={32} color="#ff0048" />
        </View>
      </Send>
    );
  }

  function renderInputToolbar(props) {
    return (
      <InputToolbar {...props} containerStyle={{ backgroundColor: "black" }} />
    );
  }

  function scrollToBottomComponent() {
    return (
      <View style={styles.bottomComponentContainer}>
        <IconButton icon="chevron-double-down" size={36} color="#ff0048" />
      </View>
    );
  }

  function renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            // Here is the color change
            backgroundColor: "#ff0048",
          },
          left: {
            backgroundColor: "gray",
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
          },
          left: {
            color: "#fff",
          },
        }}
      />
    );
  }

  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <Modal
        transparent
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          navigation.goBack();
        }}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                navigation.goBack();
              }}
            >
              <Entypo name="chevron-left" color="#ff0048" size={40} />
            </TouchableOpacity>
            <View style={styles.profilePhoto}>
              <Image
                source={friendImage}
                resizeMode="cover"
                style={{ flex: 1, width: "100%" }}
              />
            </View>
            <Text style={styles.friendName}>{friendName}</Text>
          </View>

          <GiftedChat
            messages={messages}
            onSend={(newMessage) => handleSend(newMessage)}
            user={{ _id: 1, name: "Edi Edif", avatar: friendImage }}
            renderBubble={renderBubble}
            renderSend={renderSend}
            scrollToBottomComponent={scrollToBottomComponent}
            renderLoading={renderLoading}
            renderInputToolbar={renderInputToolbar}
            textInputStyle={{ color: "white" }}
            showUserAvatar
            alwaysShowSend
            scrollToBottom
            isTyping
            loadEarlier
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "flex-end",
  },
  header: {
    flex: 0.12,
    flexDirection: "row",
    alignItems: "flex-end",
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
    paddingBottom: 10,
  },
  sendingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  bottomComponentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  friendName: {
    color: "#ff0048",
    fontSize: 28,
    textAlign: "center",
    marginLeft: 20,
  },
  profilePhoto: {
    width: 35,
    height: 35,
    borderRadius: 50,
    overflow: "hidden",
    alignItems: "center",
    marginLeft: 10,
  },
});
