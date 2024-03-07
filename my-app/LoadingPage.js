import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(new Animated.Value(0));
  const navigation = useNavigation(); // Use the useNavigation hook to get the navigation object

  useEffect(() => {
    // Simulate a 5-second loading process
    Animated.timing(loadingProgress, {
      toValue: 100,
      duration: 3000, // 3000 milliseconds (3 seconds)
      useNativeDriver: false, // Required for width animation
    }).start(() => {
      setIsLoading(false);

      // When loading is complete, navigate to the "Results" screen
      navigation.navigate('Results'); // Replace 'Results' with the actual screen name
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.loadingText}>Loading...</Text>
      {isLoading ? (
        <Animated.View
          style={[
            styles.loadingBar,
            {
              width: loadingProgress.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '60%'], // Adjust the fully loaded width here
              }),
            },
          ]}
        />
      ) : null}
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
  loadingText: {
    fontSize: 24,
    marginBottom: 20,
    color: '#17364B',
  },
  loadingBar: {
    height: 20,
    backgroundColor: '#667799',
    borderRadius: 10,
    justifyContent: 'center',
  },
});
