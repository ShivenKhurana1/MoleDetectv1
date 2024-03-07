import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomNavBar from './NavBar'; // Import the CustomNavBar component

export default function CameraPrompt({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topTile}>
        <Text style={styles.title}>Mole<Text style={styles.boldText}>Detect</Text></Text>
      </View>
      <View style={styles.overlayTile}>
        <View style={styles.content}>
          <Text style={styles.promptText}>Take a photo of the affected area under proper lighting and zoom in until it is clearly visible.</Text>
          <Text style={styles.idealSizeText}>Ideal Size:</Text>
          <Image source={require('./lesion.png')} style={styles.idealSizeImage} />
          <Text style={styles.croppingText}>Please capture the affected area within the provided grid.</Text>
        </View>
      </View>

      {/* Include the CustomNavBar at the bottom of the screen */}
      <CustomNavBar navigation={navigation} />
    </View>
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
    paddingLeft: 20,
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
    textAlign: 'center',
    paddingTop: 25,
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
  },
  promptText: {
    marginTop: -30, // Move the text to the top of the shaded box
    fontSize: 24, // Make the prompt smaller
    color: '#17364B', // Dark blue color
    marginBottom: 40, // Add spacing between prompt and image
    padding: 30,
    textAlign: 'center',
  },
  idealSizeText: {
    fontSize: 24, // Adjust the ideal size text size
    color: '#17364B',
    marginTop: -20,
    marginBottom: 25, // Add spacing between text and image
  },
  idealSizeImage: {
    borderColor: 'white',
    borderWidth: 3,
    width: 200, // Set the width of the image
    height: 200, // Set the height of the image
  },
  croppingText: {
    marginTop: 10, // Add space between the image and the new text
    fontSize: 20,
    color: '#17364B',
    textAlign: 'center',
    marginTop: 30,
    padding: 30,
  },
});
