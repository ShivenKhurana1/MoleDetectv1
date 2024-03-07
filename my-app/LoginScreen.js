import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableHighlight, ScrollView } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.topTile}>
        <Text style={styles.title}>Mole<Text style={styles.boldText}>Detect</Text></Text>
      </View>
      <View style={styles.overlayTile}>
        <View style={styles.content}>
          <View style={styles.inputField}>
            <TextInput
              placeholder="Email Address"
              // Add other input field properties as needed
            />
          </View>
          <View style={styles.inputField}>
            <TextInput
              placeholder="Password"
              secureTextEntry={true} // For password input
              // Add other input field properties as needed
            />
          </View>
          <TouchableHighlight
            style={[styles.button, styles.loginButton]}
            underlayColor="#F0D0CC"
            onPress={() => navigation.navigate('CameraPrompt')}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
         < Text style={styles.signUpText}>Don't have an account? <Text style={{fontWeight: 'bold'}}>Sign up!</Text></Text>
          <TouchableHighlight
            style={[styles.circularButton]}
            underlayColor="#F0D0CC"
            onPress={() => navigation.goBack()} // Navigates back to the previous screen
          >
            <Text style={styles.circularButtonText}>←</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topTile: {
    backgroundColor: '#F8F8F8',
    width: '100%',
    height: '16.67%', // 1/6th of the screen
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
  },
  overlayTile: {
    flex: 1, // Stretch to the bottom
    width: '100%',
    backgroundColor: '#E9DBD7', // White background
    borderTopLeftRadius: 30, // Round the top-left corner
    borderTopRightRadius: 30, // Round the top-right corner
    padding: 20,
  },
  title: {
    fontSize: 50,
    color: '#17364B', // Dark blue color
  },
  boldText: {
    fontWeight: 'bold',
  },
  content: {
    color: '#667799',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center', // Center the content vertically
    paddingBottom: 20,
  },
  inputField: {
    width: '80%', // Make the input fields less wide
    height: 30,
    marginVertical:25, // Move the input fields up
    borderBottomWidth: 1, // Add a simple line
    borderColor: '#667799', // Change the line color
  },
  button: {
    borderRadius: 30,
    width: 265,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10, // Slightly move the button up
  },
  loginButton: {
    marginTop: 60, // Adjust the login button's margin
    backgroundColor: '#667799', // Opaque color
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white', // Text color
  },
  circularButton: {
    width: 80, // Make the circular button slightly bigger
    height: 80, // Make the circular button slightly bigger
    borderRadius: 80, // Half of the width/height to make it a circle
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CBA8A6', // Color of the circular button
    marginTop: 120,
  },
  circularButtonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#17364B',
  },
  signUpText: {
    marginTop: 10, // Adjust the spacing as needed
    fontSize: 16,  // Adjust the font size as needed
    color: '#17364B',
  }
});

// Update the navigation options for this screen
LoginScreen.navigationOptions = {
  headerTitle: null, // Remove the page name from the top of the screen
};
