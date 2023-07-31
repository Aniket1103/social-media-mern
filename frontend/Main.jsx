import React, { useEffect } from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from './screens/Home';
import PhotoPosts from './screens/PhotoPosts';
import Camera from './screens/Camera';

export default function Main() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"home"} >

        <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='PhotoPosts' component={PhotoPosts} options={{ headerShown: false }} />
        <Stack.Screen name='camera' component={Camera} options={{ headerShown: false }} />
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
