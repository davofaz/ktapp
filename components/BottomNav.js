import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Platform,
  Text,
  TouchableHighlight,
} from 'react-native';
import { useStylesheet } from 'react-native-responsive-ui';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { withNavigation } from 'react-navigation';

function BottomNav({
  seeMoreURL,
  navigation,
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
  seeMoreURL: PropTypes.string,
};

const buttonNavStyles = {
  buttonTextContainer: {
    marginLeft: 25
  }
}

const staticStyle = [
  {
            query: { orientation: "landscape" },
            style: {
              buttonTextContainer: {
                ...buttonNavStyles.buttonTextContainer,
                flex:1,
                alignItems: 'center',
                flexDirection:'row',
              },
              arrowIcon: {
                color:'#fff',
                margin:20,
                marginLeft:40,
              },
              buttonSquare: {
                padding: 0,
                width: 240,
                height: 60,
                borderRadius: 10,
                borderWidth:1,
                borderColor: '#fff',
                opacity: 80,
                flexDirection: 'row',
                backgroundColor: 'rgba(137, 167, 165, 1)',
                marginTop: 20,
                marginRight: 10,
                marginLeft: 25,
                justifyContent:'center',
                alignContent: 'center',
                shadowColor: 'rgba(0,0,0, .6)', // IOS
                shadowOffset: { height: 1, width: 1 }, // IOS
                shadowOpacity: 1, // IOS
                shadowRadius: 1, //IOS
                elevation: 6, // Android
                },
                bottomNav: {
                alignItems: 'center',
                flexDirection:'row',
                marginBottom:20,
                marginTop:0,
                },
                buttonText: {
                  color: '#fff',
                  fontSize: 14,
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  },
              }
  },
  {
            query: { orientation: "portrait" },
            style: {
              buttonTextContainer: {
                flex:1,
                alignItems: 'center',
                flexDirection:'column',
              },
              arrowIcon: {
                color:'#fff',
                marginTop:10,
                marginBottom:-10,

              },
              buttonSquare: {
                padding: 15,
                width: 110,
                height: 110,
                borderRadius: 10,
                borderWidth:1,
                borderColor: '#fff',
                opacity: 80,
                flexDirection: 'row',
                backgroundColor: 'rgba(137, 167, 165, 1)',
                marginTop: 35,
                marginRight: 10,
                marginLeft: 25,
                justifyContent:'center',
                alignContent: 'center',
                shadowColor: 'rgba(0,0,0, .6)', // IOS
                shadowOffset: { height: 1, width: 1 }, // IOS
                shadowOpacity: 1, // IOS
                shadowRadius: 1, //IOS
                elevation: 6, // Android
                },
              bottomNav: {
                width: '80%',
                alignItems: 'center',
                alignSelf: 'center',
                flexDirection:'row',
                marginBottom:20,
                marginTop:-10,
                },
              backButton: {
                flex:1,
                alignItems: 'center',
                flexDirection:'column',
              },
              buttonText: {
                color: '#fff',
                fontSize: 14,
                width: 80,
                marginTop:15,
                textAlign: 'center',
                textTransform: 'uppercase',
                fontWeight: 'bold',
              },
            }
  }
];
export default withNavigation(BottomNav);
