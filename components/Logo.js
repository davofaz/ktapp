import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
import { useStylesheet } from 'react-native-responsive-ui';
import * as WebBrowser from 'expo-web-browser';

export default function Logo({
  title
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

const sharedStyle = {
  welcomeImage: {
    resizeMode: 'contain',
    marginTop: 3
  },
  pageTitleText: {
    color: '#fff',
    fontSize: 12,
    margin: 'auto',
    letterSpacing:3,
    textTransform: 'uppercase',
    fontWeight: 'normal'
  }
}

const staticStyle = [
  {
            query: { orientation: "landscape" },
            style: {
              welcomeContainer: {
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginTop: -20,
                marginBottom: 10,
                marginRight: 20,
                marginLeft: 20,
                width: '80%',
                height: 55
              },
              welcomeImage: {
                ...sharedStyle.welcomeImage,
                width: 70,
                height: 50,
                marginLeft: -10
              },
              pageTitleText: {
                ...sharedStyle.pageTitleText,
                paddingTop:20,
              }
            }
  },
  {
            query: { orientation: "portrait" },
            style: {
              welcomeContainer: {
                 alignItems: 'center',
                // marginTop: 10,
                // marginBottom: 20
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginTop: -20,
                marginBottom: 10,
                marginRight: 20,
                marginLeft: 20,
                width: '80%',
                height: 65
              },
              welcomeImage: {
                ...sharedStyle.welcomeImage,
                // width: 90,
                // height: 70,
                // marginLeft: 0
                width: 80,
                height: 60,
                //marginLeft: -10
              },
              pageTitleText: {
                ...sharedStyle.pageTitleText,
                paddingTop:25
                //textAlign: 'center'
              }
            }
  }
];
