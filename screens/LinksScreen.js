import React from 'react';
import { ExpoLinksView } from '@expo/samples';
import Screen from '../components/Screen';

export default function LinksScreen() {
  return (
    <Screen>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <ExpoLinksView />

    </Screen>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links!',
};

