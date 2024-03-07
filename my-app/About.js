import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ScrollView} from 'react-native';

export default function About({ navigation }) {
  return (
    <ScrollView>
    <View style={styles.container}>
      {/* Top Tile */}
      <View style={styles.topTile}>
        <Text style={styles.title}>Mole<Text style={styles.boldText}>Detect</Text></Text>
      </View>

      {/* Tile with Text Content */}
      <View style={styles.textTile}>
        <Text style={styles.paragraphText}>
        MoleDetect is your trusted partner for skin health awareness. Our mission is to provide you with valuable insights about your skin - all you need is your smartphone camera and answering a few standard questions!
        </Text>
        <Text style={styles.paragraphText}>
        Our machine learning model analyzes skin lesions from a photo, assisting you in identifying potentially harmful conditions like melanoma, from benign (regular moles).
        </Text>
        <Text style={styles.paragraphText}>
        Skin health is crucial to your overall well-being and peace of mind. By harnessing AI, MoleDetect helps you make informed decisions and take proactive steps to protect your skin.
        </Text>
      </View>

       {/* Back Button */}
       <TouchableHighlight
        style={[styles.circularButton]}
        underlayColor="#F0D0CC"
        onPress={() => navigation.goBack()} // Navigates back to the previous screen
      >
        <Text style={styles.circularButtonText}>←</Text>
      </TouchableHighlight>
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
    backgroundColor: '#ced3df', // Blue color
    width: '100%',
    height: '18%', // Adjusted height based on requirement
    borderBottomLeftRadius: 30, // Round the bottom-left corner
    borderBottomRightRadius: 30, // Round the bottom-right corner
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    textAlign: 'left',
    fontSize: 50,
    marginTop: 30,
    color: '#17364b',
  },
  boldText: {
    fontWeight: 'bold',
  },
  textTile: {
    textAlign: 'center',
    flex: 1,
    width: '100%',
    backgroundColor: '#f8f8f8', // Cream color
    padding: 20,
  },
  paragraphText: {
    textAlign: 'center',
    fontSize: 20,
    margin: 5.2,
    color: '#17364B', // Dark blue color
    padding:10,
  },
  circularButton: {
    width: 80, // Make the circular button slightly bigger
    height: 80, // Make the circular button slightly bigger
    borderRadius: 80, // Half of the width/height to make it a circle
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CBA8A6', // Color of the circular button
    position: 'absolute', // Position it absolutely
    bottom: 50, // Place it towards the bottom
    right: '40%', // Place it towards the right
  },
  circularButtonText: {
    
    fontSize: 30,
    fontWeight: 'bold',
    color: '#17364B',
  },
});

