import React from 'react';
import { View, Image, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomNavBar from './NavBar'; 

export default function CropConfirmScreen({ route }) {
  const { imageUri } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topTile}>
        <Text style={styles.title}>my<Text style={styles.boldText}>photo</Text></Text>
      </View>
      <View style={styles.overlayTile}>
        <Image source={{ uri: imageUri }} style={styles.image} resizeMode="contain" />
        <TouchableHighlight
          style={[styles.button, styles.actionButton]}
          underlayColor="#F0D0CC"
          onPress={() => navigation.navigate('Camera')} // Navigate back to camera
        >
          <Text style={styles.buttonText}>Retake</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.button, styles.actionButton]}
          underlayColor="#F0D0CC"
          onPress={() => navigation.navigate('Form')} // Navigate to upload form
        >
          <Text style={styles.buttonText}>Upload</Text>
        </TouchableHighlight>
      </View>
      <CustomNavBar navigation={navigation}/>
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
    height: '16.67%',
    justifyContent: 'center',
    paddingLeft: 20,
    alignContent:'center',
  },
  overlayTile: {
    flex: 1,
    width: '100%',
    backgroundColor: '#E9DBD7',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    color: '#17364B',
    textAlign: 'center',
    marginTop:25,
  },
  boldText: {
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 50,
  },
  button: {
    borderRadius: 30,
    width: 265,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  actionButton: {
    marginTop: 20,
    backgroundColor: '#667799',
    marginBottom: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
  },
});

// Update the navigation options for this screen
CropConfirmScreen.navigationOptions = {
  headerTitle: null,
};
