import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const PhotoCard = ({ post }) => {
  const { mediaUrl, likes } = post;

  return (
    <View style={styles.card}>
      <Image source={{ uri: mediaUrl }} style={styles.image} />

      {/* Liked user avatars */}
      <View style={styles.avatarContainer}>
        {likes.slice(0, 3).map((liker, index) => (
          <Image key={index} source={{ uri: liker.avatar }} style={styles.avatar} />
        ))}
        {likes.length > 0 && (
          <Text style={styles.firstLikerName}>{likes[0].name}</Text>
        )}
      </View>

      {/* Like button */}
      <TouchableOpacity style={styles.likeButton}>
        {/* Your like button icon */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 2, // for Android shadow effect
    shadowColor: '#000', // for iOS shadow effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    aspectRatio: 1, // to maintain aspect ratio of the image
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: -8, // to overlap avatars
  },
  firstLikerName: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: 'bold',
  },
  likeButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'transparent',
    padding: 8,
  },
});

export default PhotoCard;
