import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import Header from "../components/Header";
import Icon from "react-native-vector-icons/Octicons";
import MasonryWall from "../components/MasonryWall";
import MasonryList from "react-native-masonry-list";
import axios from "axios";
import MediaCard from "../components/MediaCard";
import Loader from "../components/Loader";

const Home = ({ navigation, route }) => {
  const [posts, setPosts] = useState(null);
  const numColumns = 2;

  async function getPosts() {
    try {
      const postsDetails = await axios.get(
        "https://socio-vibe-server.onrender.com/api/v1/posts"
      );
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

  const renderPost = ({ item }) => {
    // console.log(item)
    return <MediaCard style={styles.card} post={item} />;
  };

  return (
    <ScreenWrapper>
      <Header />

      {
        !posts ? (
          <Loader />
        ) : (
          <MasonryWall posts={posts} />
        )
      }

      {/* <FlatList 
          style={{ backgroundColor: "#eaeaea", flex: 1 , paddingHorizontal: 8, paddingTop: 3}}
          // contentContainerStyle={[{
          //   flexDirection: "row",
          //   width: "100%"
          // }, ]}
          data={posts}
          keyExtractor={(post) => post._id}
          numColumns={numColumns}
          renderItem={renderPost}
          // columnWrapperStyle={styles.columnWrapper}
        /> */}

      {/* <View style={styles.postwall}>
          {
            posts.map((post, ind) => {
              return <MediaCard 
                key={ind}
                style={styles.card}
                post={post}
              />
            })
          }
        </View> */}
      {/* <View style={{flex: 1, backgroundColor: "#aaa"}}> */}
      {/* <MasonryList
            // style={{backgroundColor: "#aaa"}}
            backgroundColor="#eaeaea"
            spacing={1.5}
            columns={2}
            images={
                posts.map(post => {
                  return {
                    uri : post.mediaUrl
                  }
                })
            }
            imageContainerStyle={{borderRadius: 10, overlayColor: "#eaeaea"}}
            // listContainerStyle={{padding: 4, justifyContent: "center"}}
            // containerWidth={380}

            // customImageComponent={
            //   <Image 
            //       source={{uri: ""}}
            //     />
              
            // }
            // completeCustomComponent={
            //   ({
            //     source : {},
            //     style: {
            //       width: 50,
            //       height: 50,
            //       margin: 1
            //     },
            //     data: posts.map(post => {
            //       return {
            //         uri : post.mediaUrl
            //       }
            //     })
            //   }) 
            //   // posts.map((post, ind) => renderPost({post}))
            // }
          /> */}
      {/* </View> */}
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#b5b5b5",
    padding: 10,
    paddingLeft: 15,
    borderRadius: 5,
    marginVertical: 15,
    fontSize: 15,
  },
  columnWrapper: {
    justifyContent: "center",
    // marginHorizontal: 10,
    // padding: 8,
    // width: "100%"
  },
  postwall: {
    backgroundColor: "#eaeaea",
    flex: 1,
    paddingHorizontal: 8,
    paddingTop: 3,
  },
});

export default Home;
