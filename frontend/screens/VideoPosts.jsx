import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { ResizeMode } from "expo-av";
import VideoPlayer from "expo-video-player";
import BackIcon from "react-native-vector-icons/Ionicons";
import ShareIcon from "react-native-vector-icons/Fontisto";
import Like from "../components/Like";
import { Avatar } from "react-native-paper";

export default function VideoPosts({ route }) {
  const { mediaUrl, description } = route.params.post;
  const videoRef = useRef(null);

  const navigation = useNavigation();
  // console.log(navigation)

  // console.log("Route:--", mediaUrl);
  // console.log(ResizeMode);

  const onBuffer = (e) => {
    console.log("Buffereing...", e);
  };
  const videoError = (e) => {
    console.log("Error Playing the Video", e);
  };
  return (
    <View style={styles.videoCard}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <BackIcon name="arrow-back" size={30} />
      </TouchableOpacity>
      <VideoPlayer
        style={{ flex: 1, height: 756 }}
        videoProps={{
          shouldPlay: true,
          resizeMode: ResizeMode.COVER,
          isLooping: true,
          source: {
            uri: mediaUrl,
          },
        }}
      />
      <View style={{display: "absolute", bottom: 100, left: 14}}>
        <View style={{flexDirection: "row", marginBottom: 3}}>
          <Image source={{ uri: "https://hackernoon.imgix.net/images/bfqrt3x6hAVgXkezEqVTPC5AAFA2-t4o3l9h.jpeg" }} style={styles.avatar} />
          <View>
            <Text
                style={{color: "white", fontSize: 16, margin: 4, marginTop: -3}}
              >
              John Doe
            </Text>
            <Text
                style={{color: "#eaeaea", fontSize: 11, margin: 4, marginTop: -6}}
              >
              Arunachal Pradesh 
            </Text>
          </View>

        </View>
        <Text
          style={{color: "white", fontStyle: "italic", fontSize: 13, margin: 7, marginTop: -2}}
        >
          {description}
        </Text>
      </View>
      {/* <View style={{display: "absolute", top: 90, left: 10, zIndex: 1}}>
        <View style={{display: "flex", flex: 1, flexDirection:"row", margin:6, backgroundColor: "black"}}>
            <Avatar.Image
              style={{margin: 1, border: 2, borderColor: 'black', zIndex: 1}}
              size={30}
              source={{uri : "https://hackernoon.imgix.net/images/bfqrt3x6hAVgXkezEqVTPC5AAFA2-t4o3l9h.jpeg"}}
            />
            <Text
              style={{color: "white", backgroundColor: "black"}}
            >
              John Doe
            </Text>
          </View>
      </View> */}
      <Like bottom={160}/>
      <TouchableOpacity style={styles.shareButton} >
        <ShareIcon name="share-a" size={22} color="#fff"/>
      </TouchableOpacity>
    </View>
  );
}

var styles = StyleSheet.create({
  videoCard: {
    position: "relative"
  },
  backButton: {
    position: "absolute",
    // margin: 10,
    margin: 25,
    marginHorizontal: 20,
    zIndex: 1
  },
  shareButton: {
    position: "absolute",
    // margin: 10,
    bottom: 130,
    right: 13,
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 100,
    borderWidth: 1, 
    borderColor: '#eee'
  }
});
