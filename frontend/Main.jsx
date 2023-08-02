import React, { useEffect } from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from './screens/Home';
import PhotoPosts from './screens/PhotoPosts';
import VideoPosts from './screens/VideoPosts';
import Camera from './screens/Camera';
import ImageEditor from './screens/ImageEditor';
import PostCreator from './screens/PostCreator';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';

export default function Main() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"login"} >

        <Stack.Screen name='login' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='register' component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='PhotoPosts' component={PhotoPosts} options={{ headerShown: false }} />
        <Stack.Screen name='VideoPosts' component={VideoPosts} options={{ headerShown: false }} />
        <Stack.Screen name='camera' component={Camera} options={{ headerShown: false }} />
        <Stack.Screen name='ImageEditor' component={ImageEditor} options={{ headerShown: false }} />
        <Stack.Screen name='PostCreator' component={PostCreator} options={{ headerShown: false }} />
        {/* <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='register' component={Register} options={{ headerShown: false }} />
        <Stack.Screen name='verify' component={Verify} options={{ headerShown: false }} />
        <Stack.Screen name='profile' component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name='changepassword' component={ChangePassword} options={{ headerShown: false }} />
        <Stack.Screen name='forgetpassword' component={ForgetPassword} options={{ headerShown: false }} />
        <Stack.Screen name='resetpassword' component={ResetPassword} options={{ headerShown: false }} /> */}

      </Stack.Navigator>


        </NavigationContainer>
  );
}
