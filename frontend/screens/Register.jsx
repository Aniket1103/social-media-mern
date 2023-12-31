import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if(!name || !email || !password) return alert("Name, Email or Password cannot be empty.");
    console.log(email, password)

    try {
      const {data} = await axios.post("https://socio-vibe-server.onrender.com/api/v1/register", {
        name,
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

  const handleLogin = async () => {
    if(!email || !password) return alert("Email or Password cannot be empty.0");
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
      <Text style={styles.title}>Create an Account</Text>
      <View style={styles.form}>
      <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
          autoCorrect={false}
        />
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
        {/* <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        /> */}
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.guestButton} onPress={handleContinueAsGuest}>
          <Text style={styles.guestButtonText}>Continue as Guest</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginLink} onPress={() => navigation.navigate('login')}>
          <Text style={styles.loginLinkText}>Already have an account? Login here</Text>
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
    color: '#00b8e6',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
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
  registerButton: {
    backgroundColor: '#00ccff',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 15,
  },
  registerButtonText: {
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
  loginLink: {
    alignItems: 'center',
  },
  loginLinkText: {
    color: '#00ccff',
    fontSize: 14,
  },
});
