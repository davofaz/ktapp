import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import Screen from '../components/Screen';

export default function SettingsScreen() {
  return (
    <Screen>
      <ExpoConfigView />
    </Screen>
  );
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
