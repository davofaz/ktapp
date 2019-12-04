import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import { onNavigationChange } from '../actions/navigation'
import Screen from '../components/Screen';

function HomeScreen ({
  navigation,
  onNavChange,
}) {
  return (
    <Screen>
      <View style={styles.homeLinksContainer}>
        <TouchableHighlight
          style={styles.buttonSquare}
          onPress={() => {
            onNavChange('Sermons');
            navigation.navigate('Sermons')
          }}
          underlayColor='rgba(250, 168, 127, 1)'>
              <Text style={styles.homeLinkText}>Sermon{"\n"}Archive</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.buttonSquare}
          onPress={handlePressWatchLive}
          //onPress={() => navigation.navigate('Live')}
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
          onPress={handlePressDonate}
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

function handlePressWatchLive() {
  WebBrowser.openBrowserAsync(
    //'https://www.kt.org/live#watch-now'
    'https://www.youtube.com/channel/UCzX6DlYZ5XcWgt4dGVdrpWA/live'
  );
}

function handlePressSermonArchive() {
  WebBrowser.openBrowserAsync(
    'https://www.kt.org/sermons/'
  );
}

function handlePressWhatsOn() {
  WebBrowser.openBrowserAsync(
    'https://www.kt.org/whats-on/#calendar'
  );
}

function handlePressRevivalTimes() {
  WebBrowser.openBrowserAsync(
    'https://www.kt.org/revivaltimes/'
  );
}

function handlePressDonate() {
  WebBrowser.openBrowserAsync(
    'https://www.kt.org/secure/giving/'
  );
}


const styles = StyleSheet.create({
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
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
  buttonWide: {
    padding: 10,
    height: 110,
    width: 280,
    borderRadius: 10,
    borderWidth:1,
    borderColor: '#fff',
    opacity: 80,
    flexDirection: 'row',
    backgroundColor: 'rgba(196, 196, 196, 0.5)',
    marginTop: 20,
    justifyContent:'center',
    alignContent: 'center',
    },
  homeLinksContainer: {
      display:'flex',
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignContent: 'stretch',
      alignItems: 'center',
      marginTop: '12%'

    },
  homeLinkText: {
    top:'50%',
    left: '50%',
    color: '#fff',
    fontSize: 14,
    width: 110,
    height: 110,
    marginTop: -20,
    marginLeft: -80,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
});

export default connect(
  (state, ownProps) => ({}),
  dispacth => ({
    onNavChange: screen => dispacth(onNavigationChange(screen))
  }),
)(HomeScreen)
