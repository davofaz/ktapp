import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import { useStylesheet } from 'react-native-responsive-ui';
import * as WebBrowser from 'expo-web-browser';

export default function Logo({
  title,

})

 {
  const styles = useStylesheet(staticStyle)
  return (
    <View style={styles.welcomeContainer}>
      <TouchableOpacity
        onPress={() => {
          WebBrowser.openBrowserAsync(
            'https://www.kt.org'
          );
        }}
      >
        <Image
          source={ require('../assets/images/kt-logo.png') }
          style={styles.welcomeImage}
        />
      </TouchableOpacity>
      { title && (
        <Text style={styles.pageTitleText}>{title}</Text>
      )}
    </View>
  );
}

Logo.propTypes = {
  title: PropTypes.string,
};

const staticStyle = [
  {
            query: { orientation: "landscape" },
            style: {
              welcomeContainer: {
                flex:1,
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginTop: -20,
                marginBottom: 10,
                marginRight: 20,
                marginLeft: 20,
                width: '80%',
                height: 55,
              },
              welcomeImage: {
                width: 70,
                height: 50,
                resizeMode: 'contain',
                marginTop: 3,
                marginLeft: -10,
              },
              pageTitleText: {
                color: '#fff',
                fontSize: 12,
                margin: 'auto',
                paddingTop:20,
                letterSpacing:3,
                textTransform: 'uppercase',
                fontWeight: 'normal',
              },
            }
  },
  {
            query: { orientation: "portrait" },
            style: {
              welcomeContainer: {
                alignItems: 'center',
                marginTop: 10,
                marginBottom: 20,
              },
              welcomeImage: {
                width: 90,
                height: 70,
                resizeMode: 'contain',
                marginTop: 3,
                marginLeft: 0,
              },
              pageTitleText: {
                color: '#fff',
                fontSize: 12,
                margin: 'auto',
                paddingTop:20,
                letterSpacing:3,
                textAlign: 'center',
                textTransform: 'uppercase',
                fontWeight: 'normal',
              },
              }
  }
];
