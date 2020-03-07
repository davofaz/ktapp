import * as WebBrowser from 'expo-web-browser';
import React, {useEffect} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { onNavigationChange } from '../actions/navigation';
import Screen from '../components/Screen';


function HomeScreen ({
  navigation,
  onNavChange,
})

 {
  return (
    <Screen
      title="London City Church"
    >
      <View style={styles.homeLinksContainer}>
        <TouchableHighlight
          style={styles.buttonSquare}
          onPress={() => {
            onNavChange('Sermons');
            navigation.navigate('Sermons')
          }}
          underlayColor='rgba(250, 168, 127, 1)'>
              <Text style={styles.homeLinkText}>Latest{"\n"}Sermons</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.buttonSquare}
          onPress={() => {
            WebBrowser.openBrowserAsync(
              'https://www.youtube.com/channel/UCzX6DlYZ5XcWgt4dGVdrpWA/live'
            );
          }}
          underlayColor='rgba(250, 168, 127, 1)'>
              <Text style={styles.homeLinkText}>Watch{"\n"}Live</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.buttonSquare}
          onPress={() => {
            onNavChange('Whatson');
            navigation.navigate('Whatson');
          }}
          underlayColor='rgba(250, 168, 127, 1)'>
              <Text style={styles.homeLinkText}>What's{"\n"}On</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.buttonSquare}
          onPress={() => {
            onNavChange('Revival');
            navigation.navigate('Revival');
          }}
          underlayColor='rgba(250, 168, 127, 1)'>
              <Text style={styles.homeLinkText}>Revival{"\n"}Times</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.buttonSquare}
          onPress={() => {
            onNavChange('Contactus');
            navigation.navigate('Contactus');
          }}
          underlayColor='rgba(250, 168, 127, 1)'>
              <Text style={styles.homeLinkText}>Contact{"\n"}Us</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.buttonSquare}
          onPress={() => {
            WebBrowser.openBrowserAsync(
              'https://www.kt.org/secure/giving/'
            );
          }}
          underlayColor='rgba(250, 168, 127, 1)'>
            <Text style={styles.homeLinkText}>Make a{"\n"}Donation</Text>
        </TouchableHighlight>
      </View>
    </Screen>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const sharedStyle = {
  buttonSquare: {
    borderRadius: 10,
    borderWidth:1,
    borderColor: '#fff',
    flexDirection: 'row',
    backgroundColor: 'rgba(137, 167, 165, 1)',
    marginBottom: 35,
    justifyContent:'center',
    alignContent: 'center',
    shadowColor: 'rgba(0,0,0, .6)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 6, // Android
    },
    homeLinkText: {
      top:'27.5%',
      color: '#fff',
      fontSize: 14,
      width: 110,
      height: 110,
      marginTop: 0,
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: 'bold'
    },
    homeLinksContainer: {
      flex:1,
      justifyContent: 'space-evenly',
      alignSelf: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap'
      },
    homeLinkText: {
      top:'27.5%',
      color: '#fff',
      fontSize: 14,
      width: 110,
      height: 110,
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: 'bold'
    }

}

const styles = StyleSheet.create({
  landscape: {
    buttonSquare: {
      ...sharedStyle.buttonSquare,
      padding: 0,
      width: 140,
      height: 100,
      alignItems: 'center'
    },
    homeLinksContainer: {
      ...sharedStyle.homeLinksContainer,
      width: '70%',
      margin: 30,
    },
    homeLinkText: {
      ...sharedStyle.homeLinkText,
      marginTop: 0,
    }
  },
  portrait: {
    buttonSquare: {
      ...sharedStyle.buttonSquare,
      padding: 15,
      width: 110,
      height: 110,
    },
    homeLinksContainer: {
      ...sharedStyle.homeLinksContainer,
      width: '80%',
      marginTop: 60,
    },
    homeLinkText: {
      ...sharedStyle.homeLinkText,
    },
  }
});

export default connect(
  (state, ownProps) => ({}),
  dispatch => ({
    onNavChange: screen => dispatch(onNavigationChange(screen))
  }),
)(HomeScreen)
