import { createBrowserApp } from '@react-navigation/web';
import { createStackNavigator, createAppContainer } from "react-navigation";
//import { createSwitchNavigator } from 'react-navigation';

//import MainTabNavigator from './MainTabNavigator';
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

//const switchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//  Main: MainTabNavigator,
//});
//switchNavigator.path = '';

//export default createBrowserApp(switchNavigator, { history: 'hash' });
export default createBrowserApp(AppNavigator, { history: 'hash' });
