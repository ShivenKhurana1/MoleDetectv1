import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as ImageManipulator from 'expo-image-manipulator';
import { MaterialIcons } from '@expo/vector-icons';

export default function CameraExample({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync();
      processPhoto(photo);
    }
  };
  
  const processPhoto = async (photo) => {
    try {
      const { uri, width, height } = photo;
  
      // Calculate the position to crop the image to maintain its center
      const aspectRatio = width / height;
      let cropWidth, cropHeight, cropX, cropY;
      if (aspectRatio > 1) { // Landscape
        cropWidth = height;
        cropHeight = height;
        cropX = (width - height) / 2;
        cropY = 0;
      } else if (aspectRatio < 1) { // Portrait
        cropWidth = width;
        cropHeight = width;
        cropX = 0;
        cropY = (height - width) / 2;
      } else { // Square
        cropWidth = width;
        cropHeight = height;
        cropX = 0;
        cropY = 0;
      }
  
      // First, crop the image to a square while maintaining the center
      const croppedImage = await ImageManipulator.manipulateAsync(
        uri,
        [
          {
            crop: {
              originX: cropX,
              originY: cropY,
              width: cropWidth,
              height: cropHeight,
            }
          },
        ],
        { format: ImageManipulator.SaveFormat.JPEG }
      );
      
      // Then resize the cropped image to be exactly 500x500
      const resizedImage = await ImageManipulator.manipulateAsync(
        croppedImage.uri,
        [
          {
            resize: {
              width: 500,
              height: 500
            }
          },
        ],
        { format: ImageManipulator.SaveFormat.JPEG }
      );
  
      // Pass the processedUri to the CropScreen (Crop.js)
      navigation.navigate('Crop', { imageUri: resizedImage.uri });
    } catch (error) {
      console.error('Error processing photo:', error);
    }
  };
  
  

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={cameraRef}>
        <View style={styles.overlayContainer}>
          <View style={styles.overlayTop} />
          <View style={styles.overlayMiddle}>
            <View style={styles.overlaySide} />
            <View style={styles.overlayCenter} />
            <View style={styles.overlaySide} />
          </View>
          <View style={styles.overlayBottom} />
        </View>
        <View style={styles.captureButtonContainer}>
          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
            <MaterialIcons name="camera" size={90} color="white" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
  }  

const styles = StyleSheet.create({
  captureButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  captureButton: {
    borderRadius: 50,
    backgroundColor: 'transparent',
  },
  overlayContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
  },
  overlayMiddle: {
    flexDirection: 'row',
    flex: 1,
  },
  overlayTop: {
    flex: 1,
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
  },
  overlayBottom: {
    flex: 1,
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
  },
  overlaySide: {
    flex: 1,
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
  },
  overlayCenter: {
    flex: 4,
    borderColor: 'lightgrey',
    borderWidth: 3,
  },
});