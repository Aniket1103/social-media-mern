import React, { useEffect, useState } from 'react'
import { NavigationContainer, ToastAndroid } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from './screens/Home';
import PhotoPosts from './screens/PhotoPosts';
import VideoPosts from './screens/VideoPosts';
import Camera from './screens/Camera';
import ImageEditor from './screens/ImageEditor';
import PostCreator from './screens/PostCreator';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import axios from 'axios';
import Loader from './components/Loader';

export default function Main() {

  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getCurrentUser = async () => {
    try {
      const { data } = await axios.get("https://socio-vibe-server.onrender.com/api/v1/currentUser");
      setCurrentUser(data);
    } catch (error) {
      console.log(error);
      ToastAndroid.show("Couldn't get user Details!", ToastAndroid.SHORT);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getCurrentUser()
  }, [])

  if (isLoading) {
    return <Loader />;
  }

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={currentUser ? "home" : "login"} >

        <Stack.Screen name='login' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='register' component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='PhotoPosts' component={PhotoPosts} options={{ headerShown: false }} />
        <Stack.Screen name='VideoPosts' component={VideoPosts} options={{ headerShown: false }} />
        <Stack.Screen name='camera' component={Camera} options={{ headerShown: false }} />
        <Stack.Screen name='ImageEditor' component={ImageEditor} options={{ headerShown: false }} />
        <Stack.Screen name='PostCreator' component={PostCreator} options={{ headerShown: false }} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}
