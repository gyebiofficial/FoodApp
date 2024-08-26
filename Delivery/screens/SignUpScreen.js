import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Image, View, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; // Make sure to import your firebase configuration

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Success', 'User registered successfully!');
      // Navigate to the Home page or other page after successful signup
      // navigation.navigate('Home');
    } catch (error) {
      console.error(error);

      let errorMessage;
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'The email address is already in use by another account.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'The email address is badly formatted.';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'The password is too weak.';
      } else {
        errorMessage = 'An unexpected error occurred. Please try again later.';
      }
      Alert.alert('Registration Error', errorMessage);
    }
  };

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Smart Start</Text>
          <Text style={styles.headerSubtitle}>DELIVERY APP</Text>
          <Image source={require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/logo1.jpg')} style={styles.image} />
        </View>
        <View style={styles.container}>
          <View>
            <TextInput
              style={styles.input}
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
              placeholder='Eg. Maria'
              placeholderTextColor={'grey'}
            />
            <Text style={styles.title}>First name</Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              value={lastName}
              onChangeText={(text) => setLastName(text)}
              placeholder='Eg. Agyemang'
              placeholderTextColor={'grey'}
            />
            <Text style={styles.title}>Last name</Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder='Eg. mariagyemang67@email.com'
              placeholderTextColor={'grey'}
            />
            <Text style={styles.title}>Email address</Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder='Enter your password'
              placeholderTextColor={'grey'}
              secureTextEntry={true}
            />
            <Text style={styles.title}>Password</Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              placeholder='Confirm Password'
              placeholderTextColor={'grey'}
              secureTextEntry={true}
            />
            <Text style={styles.title}>Confirm Password</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
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
  headerTitle: {
    fontSize: 40,
    fontFamily: 'Times New Roman',
    color: '#FF8C00',
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: 20,
    textTransform: 'capitalize',
    fontFamily: 'Arial',
  },
  container: {
    margin: 20,
    padding: 7,
    paddingTop: 15,
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    backgroundColor: 'white',
    padding: 4,
    left: 10,
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
    borderRadius: 4,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
  },
  image: {
    width: 80,
    height: 80,
    marginTop: 20,
  },
});
