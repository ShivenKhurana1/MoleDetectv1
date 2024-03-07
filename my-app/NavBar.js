import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import icons from a specific library

export default function NavBar({ navigation }) {
  return (
    <View style={styles.navBar}>
      <TouchableHighlight
        style={styles.navBarButton}
        underlayColor="#F0D0CC"
        onPress={() => navigation.navigate('Home')}
      >
        <Icon name="home" size={24} color="white" />
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.navBarButton}
        underlayColor="#F0D0CC"
        onPress={() => navigation.navigate('Camera')}
      >
        <Icon name="camera" size={24} color="white" />
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.navBarButton}
        underlayColor="#F0D0CC"
        onPress={() => navigation.navigate('About')}
      >
        <Icon name="map" size={24} color="white" />
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.navBarButton}
        underlayColor="#F0D0CC"
        onPress={() => navigation.navigate('Location')}
      >
        <Icon name="map-marker" size={24} color="white" />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#CBA8A6', // Change the nav bar color
    height: 60,
  },
  navBarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBarButtonText: {
    color: 'white',
  },
});
