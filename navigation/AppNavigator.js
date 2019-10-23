import React from 'react';
//import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//import MainTabNavigator from './MainTabNavigator';

//export default createAppContainer(
//  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//    Main: MainTabNavigator,
//  })
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from '../screens/HomeScreen';
import LiveScreen from '../screens/LiveScreen';
import RevivalTimesScreen from '../screens/RevivalTimesScreen';
import SermonArchiveScreen from '../screens/SermonArchiveScreen';
import WhatsOnScreen from '../screens/WhatsOnScreen';
import ContactNumbersScreen from '../screens/ContactNumbersScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Live: LiveScreen,
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
