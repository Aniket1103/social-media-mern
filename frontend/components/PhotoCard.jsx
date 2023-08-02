import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import OptionsIcon from "react-native-vector-icons/Entypo";
import LikeIcon from "react-native-vector-icons/Octicons";
import { Avatar } from 'react-native-paper';
import mime from "mime";
import Like from './Like';

const PhotoCard = ({ post }) => {
  const [ size, setSize ] = useState(1)
  const [ like, setLike ]  = useState(false); //
  const { mediaUrl, likes, description, userId, location } = post;
  // console.log(post._id)
  // console.log("type: ", [mime.getType(mediaUrl), mediaUrl])
  
  Image.getSize(
    mediaUrl, (width, height) => {
      // console.log(width/height)
      // return width/height
      setSize(width/height);
  })


  return (
    <View style={styles.card}>
      <View style={{flexDirection: "row"}}>
        {/* <View style={{display: "flex", flex: 1, flexDirection:"row", margin:6}}>
          <Avatar.Image 
            style={{margin: 1, border: 2, borderColor: 'red'}}
            size={30}
            source={{uri : "https://hackernoon.imgix.net/images/bfqrt3x6hAVgXkezEqVTPC5AAFA2-t4o3l9h.jpeg"}}
          />
          <Text
            style={styles.UserName}
          >
            {userId.name}
          </Text>
        </View> */}
        <View style={{display: "flex", flex: 1, flexDirection:"row", margin:6}}>
          <Image source={{ uri: "https://hackernoon.imgix.net/images/bfqrt3x6hAVgXkezEqVTPC5AAFA2-t4o3l9h.jpeg" }} style={styles.avatar} />
          <View>
            <Text
                style={styles.UserName}
              >
              {userId.name || ""}
            </Text>
            <Text
                style={{color: "#202020", fontSize: 11, margin: 4, marginTop: -3}}
              >
              {location || ""}
            </Text>
          </View>

        </View>
        <TouchableOpacity styles={{flex: 1}}>
          <OptionsIcon name='dots-three-horizontal' size={23} marginTop={9} marginHorizontal={10}/>
        </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={{flex: 1, borderRadius: 10, overflow: "hidden"}}>
        <Image source={{ uri: mediaUrl }} aspectRatio={size} style={{flex: 1, borderRadius: 10, overlayColor: "#fff"}} />

        {/* Like button */}
        <Like />
      </TouchableOpacity>

      {/* Liked user avatars */}
      <View style={styles.avatarContainer}>

        {likes.slice(0, 3).map((liker, index) => (
          <Image key={index} source={{ uri: "https://www.storypick.com/wp-content/uploads/2022/12/16.jpeg" }} style={styles.likerAvatar} />
        ))}
        
        {
        (likes.length > 0 )? (
          <>
            <Text style={styles.firstLikerName}>{likes[0].name}</Text>
            <Text style={{fontStyle:"italic"}}> and {likes.length-Math.min(3, likes.length)} other people liked the post</Text>
          </>
        ) :
        (
          <>
            <Text style={styles.firstLikerName}>No Likes yet</Text>
          </>
        ) 
        }
      </View>
      {/* <Text style={{marginHorizontal: 10, marginBottom: 5}}>
        {description}
      </Text> */}

    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "98%",
    borderRadius: 15,
    backgroundColor: '#fff',
    elevation: 2, // for Android shadow effect
    shadowColor: '#000', // for iOS shadow effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    overflow: 'hidden',
    marginHorizontal: "1rem",
    margin: 3
  },
  UserName: {
    marginLeft: 4,
    fontSize: 15,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    // height: 300,
    // aspectRatio: 3/2, // to maintain aspect ratio of the image
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 100,
    borderWidth: 1, 
    borderColor: '#eee'
  },
  likerAvatar: {
    width: 24,
    height: 24,
    borderRadius: 100,
    marginRight: -14, // to overlap avatars
    borderWidth: 1, 
    borderColor: '#eee'
  },
  firstLikerName: {
    marginLeft: 15,
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: 'bold',
  }
});

export default PhotoCard;
