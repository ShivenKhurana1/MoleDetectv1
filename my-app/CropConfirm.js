import React from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function ConfirmCropScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { cropBox, imageUri } = route.params;

  const handleConfirmPress = () => {
    // Handle confirm press (e.g., save the crop, navigate to another screen, etc.)
  };

  const handleRetakePress = () => {
    // Navigate back to the CropScreen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} resizeMode="contain"/>
      <Button title="Confirm" onPress={handleConfirmPress} />
      <Button title="Retake" onPress={handleRetakePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: 300,  // You may wish to use dimensions from cropBox
    height: 300, // to display the actual crop, this is a simplification
  },
});
