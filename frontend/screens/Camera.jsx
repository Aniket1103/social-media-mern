import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from "expo-image-picker"
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from '@react-navigation/native';

export default function CameraComponent({route}) {
  const [type, setType] = useState(CameraType.back);
  const [camera, setCamera] = useState(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const navigation = useNavigation();

  // console.log(route)

  useEffect(() => {
    requestPermission()
  }, [])
  

  if (!permission) {
    return <Text>No Access to Camera</Text>
  }
  
  if (!permission.granted) {
    return <Text>No Access to Camera</Text>
  }

  async function openImagePickerAsync() {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
    }

    const data = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true, aspect: [1, 1], quality: 1
    });
    if(data.canceled) {
      return navigation.navigate("camera");
    }
    return navigation.navigate("ImageEditor", {image: data?.assets[0]?.uri})
    if (route.params.updateProfile) return navigation.navigate("profile", { image: data.uri })
    else return navigation.navigate("register", { image: data.uri })
  }
  async function clickPicture() {
    try{
      const data = await camera.takePictureAsync();
      console.log({image: data.uri})
      return navigation.navigate("ImageEditor", {image: data.uri})
    }
    catch(error){
      console.log(error);
    }
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={{flex: 1}}>
      <Camera type={type} style={{flex: 1, aspectRatio: 1}} ratio="1:1" ref={(e) => setCamera(e)} />
      <View
                style={{
                    flexDirection: "row",
                    position: "absolute",
                    bottom: 10,
                    justifyContent: "space-evenly",
                    width: "100%",
                }}
            >
                <Icon name="image" size={40} color="#fff" onPress={openImagePickerAsync} />
                <Icon name="camera" size={40} color="#fff" onPress={clickPicture} />

                <Icon
                    name="flip-camera-android"
                    size={40}
                    color="#fff"
                    onPress={toggleCameraType}
                />
            </View>
    </View>
  );
}

const styles = StyleSheet.create({})