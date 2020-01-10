import * as WebBrowser from 'expo-web-browser';
import React, {useEffect} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {useStylesheet} from 'react-native-responsive-ui';
import { connect } from 'react-redux';
import { onNavigationChange } from '../actions/navigation';
import Screen from '../components/Screen';


function HomeScreen ({
  navigation,
  onNavChange,
})

 {
  const styles = useStylesheet(staticStyle)
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
          onPress={handlePressWatchLive}
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

const staticStyle = [
  {
            query: { orientation: "landscape" },
            style: {
              container: {
                flex:1,
              },
              buttonSquare: {
                padding: 0,
                width: 140,
                height: 100,
                borderRadius: 10,
                borderWidth:1,
                borderColor: '#fff',
                flexDirection: 'row',
                backgroundColor: 'rgba(137, 167, 165, 1)',
                marginBottom: 35,
                justifyContent:'center',
                alignContent: 'center',
                alignItems: 'center',
                shadowColor: 'rgba(0,0,0, .6)', // IOS
                shadowOffset: { height: 1, width: 1 }, // IOS
                shadowOpacity: 1, // IOS
                shadowRadius: 1, //IOS
                elevation: 6, // Android
                },
              homeLinksContainer: {
                  flex:5,
                  width: '70%',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-evenly',
                  alignSelf: 'center',
                  margin: 30,
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
                fontWeight: 'bold',
              },
            }
  },
  {
            query: { orientation: "portrait" },
            style: {
              container: {
                flex:1,
              },
              buttonSquare: {
                padding: 15,
                width: 110,
                height: 110,
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
              homeLinksContainer: {
                  flex:5,
                  width: '80%',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-evenly',
                  alignSelf: 'center',
                  margin: 30,
                },
              homeLinkText: {
                top:'27.5%',
                color: '#fff',
                fontSize: 14,
                width: 110,
                height: 110,
                textAlign: 'center',
                textTransform: 'uppercase',
                fontWeight: 'bold',
              },
            }
  }
];



export default connect(
  (state, ownProps) => ({}),
  dispatch => ({
    onNavChange: screen => dispatch(onNavigationChange(screen))
  }),
)(HomeScreen)
