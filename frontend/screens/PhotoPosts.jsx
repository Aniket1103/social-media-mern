import { View, Text, FlatList } from 'react-native'
import ScreenWrapper from '../components/ScreenWrapper'
import Header from '../components/Header'
import PhotoCard from '../components/PhotoCard'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function PhotoPosts() {

  const [posts, setPosts] = useState([]);
  const numColumns = 2;

  async function getPosts() {
    try {
      const postsDetails = await axios.get(
        "https://socio-vibe-server.onrender.com/api/v1/posts"
      );
      // console.log(postsDetails.data)
      // setPosts((currPosts) => [...currPosts, postsDetails.data])
      // console.log(postsDetails.data.posts);
      setPosts(postsDetails.data.posts);
      console.log(posts.length);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  const renderPhotoCard = ({ item }) => {
    return <PhotoCard post={item} />;
  };


  return (
    <ScreenWrapper>
      <Header />
      <View style={{flex: 1, width: "100%", alignItems: "center", backgroundColor: "#eaeaea"}}>
        {
          posts &&
          <FlatList
            data={posts}
            keyExtractor={(post) => post._id}
            numColumns={1} 
            renderItem={renderPhotoCard}
            width={350}
            
          />
          // posts.map((post, i) => {
          //   return <PhotoCard key={i} post={post}/>;
          // })
        }
      </View>
    </ScreenWrapper>
  )
}