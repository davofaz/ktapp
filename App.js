import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers/combinedReducers';

import AppNavigator from './navigation/AppNavigator';


const store = createStore(
  reducers,
  __DEV__ ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk),
);

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/kt-logo.png'),
      require('./assets/images/kt-logo.png'),
    ]),
    await Expo.Font.loadAsync({
      // This is the font that we are using for our tab bar
      //...Ionicons.font,
      'ionicons': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf'),
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}


export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  return (
    <Provider store={store}>
      {
        !!(!isLoadingComplete && !props.skipLoadingScreen) && (
          <AppLoading
            startAsync={
              async () => await Promise.all([
                Asset.loadAsync([
                  require('./assets/images/kt-logo.png'),
                  require('./assets/images/kt-logo.png'),
                ]),
                Font.loadAsync({
                  ...Ionicons.font,
                  'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
                }),
              ])
            }
            onError={() => console.warn(error)}
            onFinish={() => setLoadingComplete(true)}
          />
        )
      }
      {
        isLoadingComplete && (
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
          </View>
        )
      }
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
