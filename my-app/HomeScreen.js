import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Image
        // source={require('./your-image-path.png')}
        style={styles.image}
      />
      <Text style={styles.title}>
        skin<Text style={styles.boldText}>HELLO</Text>
      </Text>
      <Text style={styles.subTitle}>Modification</Text>
      <TouchableHighlight
        style={[styles.button, styles.loginButton]}
        underlayColor="#F0D0CC"
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.button, styles.aboutButton]}
        underlayColor="#667799"
        onPress={() => {
          // Add functionality for the About button here
        }}
      >
        <Text style={[styles.buttonText, { color: 'white' }]}>About</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cream', // Cream background
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 70,
    color: '#17364B', // Dark blue color
    textAlign: 'center',
    marginTop: '0%', // Move the title to the top half
  },
  boldText: {
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#17364B',
    textAlign: 'right',
    marginLeft: 90, // Adjust to your preference
    marginBottom: '40%',
  },
  button: {
    fontSize: 28,
    borderRadius: 30,
    width: 260,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10, // Slightly move the buttons up
  },
  loginButton: {
    fontSize: 70,
    backgroundColor: '#F0D0CC', // Opaque color
    marginBottom: 29,
  },
  aboutButton: {
    backgroundColor: '#667799', // Opaque color
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#17364B', // Text color
  },
});
