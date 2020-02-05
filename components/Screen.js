import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ImageBackground,
  ScrollView,
  Platform,
  StyleSheet,
  TouchableHighlight,
  Text,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Logo from './Logo';

export default function Screen({
  title,
  children,
}) {

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/background-image.jpg')} style={{width: '100%', height: '100%', resizeMode: 'cover'}}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
            <Logo
              title={title}
            />
            {children}
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

Screen.navigationOptions = {
  header: null,

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(137, 167, 165, 0.8)',
  },
  contentContainer: {
    paddingTop: 50,
    flex: 1,
    height: '100%'
  },
  bottomNav: {
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection:'row',
    marginBottom:10,
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
      marginBottom:10,
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
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: 'bold',
    },
    arrowIcon: {
      color:'#fff',
      marginTop:15,
    },
});

Screen.propTypes = {
  title: PropTypes.string,
  seeMoreURL: PropTypes.string,
  children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]).isRequired
};
