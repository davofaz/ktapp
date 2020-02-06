import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Platform,
  Text,
  TouchableHighlight
} from 'react-native';
import { useStylesheet } from 'react-native-responsive-ui';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { withNavigation } from 'react-navigation';

function BottomNav({
  seeMoreURL,
  navigation
}) {

  const { goBack }  = navigation;
  const styles = useStylesheet(staticStyle)
  return (
    <View style={styles.bottomNav}>
      <TouchableHighlight
        style={styles.buttonSquare}
        onPress={() =>   {
          WebBrowser.openBrowserAsync(
          `${seeMoreURL}`
        );
      }}
        underlayColor='rgba(250, 168, 127, 1)'>
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonText}>See more on our website</Text>
          </View>
      </TouchableHighlight>
      <TouchableHighlight
          style={styles.buttonSquare}
          onPress={() => navigation.goBack()}
          title="Go back"
          underlayColor='rgba(250, 168, 127, 1)'>
          <View style={styles.buttonTextContainer}>
            <Ionicons
              style={styles.arrowIcon}
              size={32}
              name={Platform.OS === 'ios'
              ? 'ios-arrow-back' : 'md-arrow-back'}/>
            <Text style={styles.buttonText}>Go Back</Text>
          </View>
        </TouchableHighlight>
      </View>
  );
}

BottomNav.propTypes = {
  seeMoreURL: PropTypes.string
};

const buttonNavStyles = {
  buttonTextContainer: {
    flex:1,
    alignItems: 'center'
  },
  arrowIcon: {
    color:'#fff'
  },
  buttonSquare: {
    borderRadius: 10,
    borderWidth:1,
    borderColor: '#fff',
    opacity: 80,
    flexDirection: 'row',
    backgroundColor: 'rgba(137, 167, 165, 1)',
    marginRight: 10,
    marginLeft: 25,
    justifyContent:'center',
    alignContent: 'center',
    shadowColor: 'rgba(0,0,0, .6)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 6 // Android
  },
  bottomNav: {
    alignItems: 'center',
    flexDirection:'row',
    marginBottom:20,
    marginTop:0
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold'
    }
}

const staticStyle = [
  {
            query: { orientation: "landscape" },
            style: {
              buttonTextContainer: {
                ...buttonNavStyles.buttonTextContainer,
                marginLeft: 25,
                flexDirection:'row'
              },
              arrowIcon: {
                ...buttonNavStyles.arrowIcon,
                margin:20,
                marginLeft:40
              },
              buttonSquare: {
                ...buttonNavStyles.buttonSquare,
                padding: 0,
                width: 240,
                height: 60,
                marginTop: 20
                },
              bottomNav: {
                ...buttonNavStyles.bottomNav,
                marginTop:0
                },
              buttonText: {
                ...buttonNavStyles.buttonText
              }
            }
  },
  {
            query: { orientation: "portrait" },
            style: {
              buttonTextContainer: {
                ...buttonNavStyles.buttonTextContainer,
                flexDirection:'column'
              },
              arrowIcon: {
                ...buttonNavStyles.arrowIcon,
                marginTop:10,
                marginBottom:-10

              },
              buttonSquare: {
                ...buttonNavStyles.buttonSquare,
                padding: 15,
                width: 110,
                height: 110,
                marginTop: 35
              },
              bottomNav: {
                ...buttonNavStyles.bottomNav,
                width: '80%',
                alignSelf: 'center',
                marginTop:-10
              },
              buttonText: {
                ...buttonNavStyles.buttonText,
                width: 80,
                marginTop:15
              }
            }
  }
];
export default withNavigation(BottomNav);
