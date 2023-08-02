import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if(!email || !password) return alert("Email or Password cannot be empty\nPlease Try Again.");
    console.log(email, password)

    try {
      const {data} = await axios.post("https://socio-vibe-server.onrender.com/api/v1/login", {
          email,
          password
      });
      
      // console.log(data);
      navigation.navigate('home');
    } catch (error) {
      const { status } = error.response;
      console.log(status);
      if(status === 400 || status.status === 401) ToastAndroid.show("Invalid email or password,\nPlease verify once.", ToastAndroid.SHORT);
      else ToastAndroid.show("Error Logging in\nPlease try again.", ToastAndroid.SHORT);
    }
  };

  const handleContinueAsGuest = () => {
    setEmail("guest@gmail.com");
    setPassword("guest123123");
    handleLogin();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.guestButton} onPress={handleContinueAsGuest}>
          <Text style={styles.guestButtonText}>Continue as Guest</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerLink} onPress={() => navigation.navigate('register')}>
          <Text style={styles.registerLinkText}>Don't have an account? Register here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#00b8e6',
  },
  form: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#00ccff',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  guestButton: {
    backgroundColor: '#fff',
    borderColor: '#00ccff',
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 15,
  },
  guestButtonText: {
    color: '#00ccff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerLink: {
    alignItems: 'center',
  },
  registerLinkText: {
    color: '#00ccff',
    fontSize: 14,
  },
});
