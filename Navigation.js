import React from 'react';
import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import CameraPrompt from './CameraPrompt';
import Camera from './Camera'
import Crop from './Crop';
import CropConfirm from './CropConfirm';
import Form from './Form';
import LoadingPage from './LoadingPage';
import Results from './Results'
import About from './About'

const AppNavigator = createStackNavigator(
  {
    Login: { screen: App },
    Balls: { screen: HomeScreen },
    About: { screen: AboutScreen },
    CameraPrompt: {screen: CameraPrompt},
    Camera: {screen: Camera},
    CropConfirm: {screen: CropConfirm},
    Form: {screen: Form},
    LoadingPage: {screen: LoadingPage},
    Results: {screen: Results},
    About: {screen: About},
    Location: {screen: Location}
  },
  {
    initialRouteName: 'Login',
  }
);

export default createAppContainer(AppNavigator);
