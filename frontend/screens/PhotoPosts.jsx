import { View, Text, ActivityIndicator, FlatList } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import Header from "../components/Header";
import PhotoCard from "../components/PhotoCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";

export default function PhotoPosts() {
  const [posts, setPosts] = useState(null);

  async function getPosts() {
    try {
      const postsDetails = await axios.get(
        "https://socio-vibe-server.onrender.com/api/v1/posts/photo"
      );
      // console.log("length: ", postsDetails.data.length)
      // setPosts((currPosts) => [...currPosts, postsDetails.data])
      // console.log(postsDetails.data.posts);
      // await (() => new Promise(resolve => setTimeout(resolve, 5000)))()
      setPosts(postsDetails.data);
      // console.log(posts.length);
    } catch (error) {
      console.log(error);
    }
  }

  //for log
  useEffect(() => {
    // setLoading(false);
    if (posts) console.log("postLength: ", posts.length);
  }, [posts]);

  useEffect(() => {
    getPosts();
  }, []);

  const renderPhotoCard = ({ item }) => {
    return <PhotoCard post={item} />;
  };

  return (
    <ScreenWrapper>
      <Header />
      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          backgroundColor: "#eaeaea",
        }}
      >
        {
          !posts ? (
            <Loader />
          ) : (
            <FlatList
              data={posts}
              keyExtractor={(post) => post._id}
              numColumns={1}
              renderItem={renderPhotoCard}
              width={350}
            />
          )
          // posts.map((post, i) => {
          //   return <PhotoCard key={i} post={post}/>;
          // })
        }
      </View>
    </ScreenWrapper>
  );
}
