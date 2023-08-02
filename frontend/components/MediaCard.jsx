import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Octicons";
import { useNavigation } from "@react-navigation/native";
import * as VideoThumbnails from 'expo-video-thumbnails';

const MediaCard = ({ post }) => {
  const [like, setLike] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const { _id, mediaUrl, mediaType } = post;

  const navigation = useNavigation();

  const generateThumbnail = async () => {
    try {
      const { uri } = await VideoThumbnails.getThumbnailAsync(
        mediaUrl,
        {
          time: 0,
          quality: 1
        }
      );
      console.log(uri)
      setThumbnail(uri);
    } catch (e) {
      console.warn(e);
    }
  };

  useEffect(() => {
    if(mediaType === "video"){
      generateThumbnail();
    }
  }, [])

  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000"
      : "https://socio-vibe-server.onrender.com";
  const likeEndpoint = baseUrl + `/api/v1/posts/${_id}`;

  const handleCardPress = (post) => {
    if (mediaType === "photo") {
      navigation.navigate("PhotoPosts", { post });
    } else if (mediaType === "video") {
      navigation.navigate("VideoPosts", { post });
    }
  };

  async function getLikes() {
    try {
      const postDetails = await axios.get(likeEndpoint);
      // console.log(postsDetails.data.posts);
      setLike(postDetails.data.posts);
      console.log(postDetails.likes.length);
    } catch (error) {
      console.log(error);
    }
  }

  // console.log(baseUrl)
  // console.log(process.env.NODE_ENV)

  return (
    <>
        <View style={styles.card}>
          <TouchableOpacity
            key={_id}
            style={{ flex: 1, borderRadius: 10, overflow: "hidden" }}
            onPress={() => handleCardPress(post)}
            >
                <Image
                  // height={Math.ceil(Math.random()*100)}
                  style={styles.img}
                  source={{ uri: (mediaType === "photo") ? mediaUrl : thumbnail }}
                  />
              
            <TouchableOpacity
              style={styles.heartIconContainer}
              onPress={() => setLike(!like)}
            >
              {/* <Icon name={`heart`} size={23} color="#fff"/> */}
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                >
                <Icon
                  name={!like ? "heart" : "heart-fill"}
                  size={23}
                  color={!like ? "#fff" : "#f44336"}
                  />
              </View>
            </TouchableOpacity>
            {/* <Text style={ {fontSize: 25, color: "#222"} }>
                MediaCard
              </Text> */}
          </TouchableOpacity>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  // display: "inline-flex",
  card: {
    flex: 1,
    // height: 150,
    height: 150,
    width: "50%",
    // paddingVertical: 120,
    // backgroundColor: "#fea111",
    // border: 1,
    // borderBlockColor: "white",
    margin: 2,
    // marginTop: (-1)*Math.floor(Math.random()*100),
    position: "relative",
  },
  img: {
    // width: "100%"
    // height: 100,
    flex: 1,
    width: "100%",
    borderRadius: 10,
    overlayColor: "#eaeaea",
    // resizeMode: "cover"
    // resizeMethod: "scale"
  },
  heartIconContainer: {
    position: "absolute",
    bottom: 5,
    right: 5,
    width: 30,
    height: 30,
    // backgroundColor: "#111"
  },
  heartIcon: {
    width: 24,
    height: 24,
    top: "50%",
    color: "#fff",
    // tintColor: "red",
  },
});

export default MediaCard;
