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
                await Expo.Font.loadAsync({
                  'ionicons': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf'),
                  'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
                }),
              ])
            }
            onError={(error) => console.warn(error)}
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
    marginTop:0,
    paddingTop:0,
    backgroundColor: '#fff',
  },
});
