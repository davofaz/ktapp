import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from '../screens/HomeScreen';
import RevivalTimesScreen from '../screens/RevivalTimesScreen';
import SermonArchiveScreen from '../screens/SermonArchiveScreen';
import WhatsOnScreen from '../screens/WhatsOnScreen';
import ContactNumbersScreen from '../screens/ContactNumbersScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Revival: RevivalTimesScreen,
    Sermons: SermonArchiveScreen,
    Whatson: WhatsOnScreen,
    Contactus: ContactNumbersScreen,
  },
  {
        initialRouteName: "Home"
  }
);
export default createAppContainer(AppNavigator);
