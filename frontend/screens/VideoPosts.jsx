import { View, Text, StyleSheet } from 'react-native'
import Video from 'react-native-video';
import React, { useRef } from 'react'
import { ResizeMode } from 'expo-av'
import VideoPlayer from 'expo-video-player'

export default function VideoPosts({route}) {
  const { mediaUrl } = route.params.post;
  const videoRef = useRef(null);
  console.log("Route:--", mediaUrl);
  // console.log(ResizeMode);

  const onBuffer = (e) => {
    console.log("Buffereing...", e);
  }
  const videoError = (e) => {
    console.log("Error Playing the Video", e);
  }
  return (
    // <View></View>
    // <Video source={{uri: mediaUrl}}   // Can be a URL or a local file.
    //    ref={videoRef}                                      // Store reference
    //    onBuffer={onBuffer}                // Callback when remote video is buffering
    //    onError={videoError}               // Callback when video cannot be loaded
    //    style={styles.backgroundVideo} />
       <VideoPlayer
       style={{flex: 1, height: 756}}
  videoProps={{
    shouldPlay: true,
    resizeMode: ResizeMode.CONTAIN,
    source: {
      uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
  }}
/>
  )
}

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});