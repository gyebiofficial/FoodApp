import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const WelcomePage = ({ navigation }) => {
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/logo1.jpg')} style={styles.image} />
      <Text style={styles.welcomeText}>Welcome to Smart Start Delivery</Text>
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF8C00',
    paddingHorizontal: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30, // Space between the image and text
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Times New Roman',
    textAlign: 'center',
    marginBottom: 20,
  },
  loginButton: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    elevation: 3, // Adds a shadow for Android
    shadowColor: '#000', // Adds a shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  loginButtonText: {
    fontSize: 18,
    color: '#FF8C00',
    fontWeight: 'bold',
  },
});

export default WelcomePage;
