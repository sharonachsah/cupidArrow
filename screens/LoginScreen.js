import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.svg')} style={styles.logo} />
      <Image source={require('../assets/Rectangle.png')} style={{ position: 'absolute', bottom: 0 }} />
      <Text style={styles.title}>Discover Love Where Your Story Begins.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PhoneNumber')}>
        <Text style={styles.buttonText}>Login with Phone</Text>
      </TouchableOpacity>
      <Text style={styles.signUpText}>Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE6EB',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#FF5A5F',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  signUpText: {
    marginTop: 20,
    fontSize: 14,
  },
  signUpLink: {
    color: '#FF5A5F',
    fontWeight: 'bold',
  },
});
