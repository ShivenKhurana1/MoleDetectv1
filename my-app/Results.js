import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CustomNavBar from './NavBar'; // Import the CustomNavBar component
export default function Results({ navigation }) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Mole<Text style={styles.boldText}>Detect</Text></Text>

      <View style={styles.circle}></View> 
      <View style={styles.topCircle}></View>
      <View style={styles.bottomCircle}></View> 

      <View style={styles.boxesContainer}>
        <View style={styles.leftAlignedBox}> 
          <View style={styles.headerBox}><Text style={styles.headerText}>Melanoma</Text></View>
          <Text style={styles.contentText}>
          If you have Melanoma: It often appears as an irregular, asymmetric mole with uneven borders, varying colors, and enlargement and / or bleeding.
          </Text>
        </View>

        <View style={styles.rightAlignedBox}>
          <View style={[styles.headerBox, styles.rightHeader]}><Text style={styles.headerText}>Further Steps</Text></View>
          <Text style={styles.contentText}>
            Visit <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.cancer.gov/types/skin')}>NIH</Text> or <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.cdc.gov/cancer/skin/basic_info/prevention.html')}>CDC</Text> for what to do next.
            Please note that this is not an official diagnosis and you should consult a doctor for any serious doubts or possible skin conditions.
          </Text>
        </View>
      </View>

      <View style={styles.verticalLine}></View> 
      <CustomNavBar navigation={navigation} />
    </View>
    </ScrollView>
  );
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8F8F8',
      paddingHorizontal: 0,
      paddingTop: 40,
    },
    boxesContainer: {
      flex: 1,
    },
    boldText:{
      fontWeight:'bold',
    },
    title: {
      fontSize: 50,
      marginBottom: 60,
      alignSelf: 'center',
      marginTop: 25,
    },
    circle: {
      position: 'absolute',
      right: 29,  // Adjusted to horizontally center over the line
      top: '35.5%', 
      width: 25,  // Increased width
      height: 25, // Increased height
      borderRadius: 25, // Adjusted to keep the circle shape
      backgroundColor: '#667799',
      zIndex: 2,
    },
    topCircle: {
      position: 'absolute',
      right: 29,
      top: '20%',  // Position at the top of the line
      width: 25,
      height: 25,
      borderRadius: 25,
      backgroundColor: '#667799',
      zIndex: 2,
    },
    bottomCircle: {
      position: 'absolute',
      right: 29,
      top: '67.75%',  // Position near the end of the line
      width: 25,
      height: 25,
      borderRadius: 25,
      backgroundColor: '#667799',
      zIndex: 2,
    },
    verticalLine: {
      position: 'absolute',
      right: 40,
      top: '20.5%', // Adjusted to connect to the bottom of the circle
      height: '69.59%', // Adjusted to maintain its end position
      width: 3,
      backgroundColor: '#17364b',
      zIndex: 1,
    },
      leftAlignedBox: {
        width: '95%',
        height: 250,
        backgroundColor: '#e9dbd7',
        marginBottom: 40,
        paddingTop: 10, // Make space for the popped out header
      },
      rightAlignedBox: {
        width: '95%',
        height: 250,
        backgroundColor: '#ced3df',
        alignSelf: 'flex-end',
        marginBottom:9,
        paddingTop: 10, // Make space for the popped out header
        
      },
      headerBox: {
        width: '50%',
        backgroundColor: '#17364b',
        padding: 10,
        alignSelf: 'center',
        marginTop: -25, // This will make the box pop out by half its height
        marginRight: 60,
        textAlign: 'center',
      },
      rightHeader: {
        backgroundColor: '#17364b',
        alignSelf: 'flex-end',
        marginRight: 70,
      },
      headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        alignSelf: 'center',
      },
      contentText: {
        margin: 10,
        fontSize: 20,
        color: '#333',
        padding: 38,
        marginTop: -10,
      },
      linkText: {
        color: 'blue',
        textDecorationLine: 'underline',
      },
});
