import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default function Logo({
  title,
}) {
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

const styles = StyleSheet.create({
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 70,
    height: 50,
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
});
