import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

export default function App({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);

      let errorMessage;

      if (error && error.code) {
        switch (error.code) {
          case 'auth/invalid-email':
            errorMessage = "The email address is badly formatted.";
            break;
          case 'auth/user-not-found':
            errorMessage = "There is no user record corresponding to this identifier.";
            break;
          case 'auth/invalid-credential':
            errorMessage = "The password or email is invalid.";
            break;
          case 'auth/user-disabled':
            errorMessage = "The user account has been disabled.";
            break;
          default:
            errorMessage = "An unexpected error occurred. Please try again later.";
        }
      } else {
        errorMessage = "An unexpected error occurred. Please try again later.";
      }

      Alert.alert("Login Error", errorMessage);
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View>
        <View style={styles.header}>
          <Text style={styles.titleText}>Smart Start</Text>
          <Text style={styles.subtitleText}>DELIVERY APP</Text>
          <Image source={require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/logo1.jpg')} style={styles.image} />
        </View>
        <View style={styles.container}>
          <View>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder='Eg. mariagyemang67@email.com'
              placeholderTextColor={'grey'}
            />
            <Text style={styles.label}>Email address</Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder='Enter your password'
              placeholderTextColor={'grey'}
              secureTextEntry
            />
            <Text style={styles.label}>Password</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signupText}>Don't have an account? Sign up here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FF8C00',
    fontFamily: 'Times New Roman',
    marginTop:20,
  },
  subtitleText: {
    fontSize: 20,
    textTransform: 'capitalize',
    fontFamily: 'Arial',
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 20,
  },
  container: {
    margin: 20,
    padding: 15,
    marginTop: 20,
  },
  label: {
    color: 'black',
    backgroundColor: 'white',
    padding: 4,
    left: 6,
    top: -40,
    alignSelf: 'baseline',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 30,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FF8C00',
    width: '60%',
    padding: 10,
    height: 40,
    borderRadius: 3,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
  },
  signupText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: '#FF8C00',
  },
});
