import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  ImageBackground,
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';
import { ScreenOrientation } from  'expo';
import { MonoText } from '../components/StyledText';


export default class HomeScreen extends React.Component{
  constructor(props) {
     super(props);
 }


   render() {
    return (



    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/background-image.jpg')} style={{width: '100%', height: '100%', resizeMode: 'cover'}}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <TouchableOpacity onPress={handleLogoPress} style={styles.helpLink}>
              <Image
                source={
                  __DEV__
                    ? require('../assets/images/kt-logo.png')
                    : require('../assets/images/kt-logo.png')
                }
                style={styles.welcomeImage}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.homeLinksContainer}>
            <TouchableHighlight
              style={styles.flexItem}
              onPress={() => this.props.navigation.navigate('Sermons')}
              underlayColor='rgba(250, 168, 127, 0.7)'>
                  <Text style={styles.homeLinkText}>Sermon{"\n"}Archive</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.flexItem}
              onPress={handlePressWatchLive}
              //onPress={() => this.props.navigation.navigate('Live')}
              underlayColor='rgba(250, 168, 127, 0.7)'>
                  <Text style={styles.homeLinkText}>Watch{"\n"}Live</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.flexItem}
              onPress={() => this.props.navigation.navigate('Whatson')}
              underlayColor='rgba(250, 168, 127, 0.7)'>
                  <Text style={styles.homeLinkText}>What's{"\n"}On</Text>
            </TouchableHighlight>
          <TouchableHighlight
              style={styles.flexItem}
              onPress={() => this.props.navigation.navigate('Revival')}
              underlayColor='rgba(250, 168, 127, 0.7)'>
                  <Text style={styles.homeLinkText}>Revival{"\n"}Times</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.flexItem}
              onPress={() => this.props.navigation.navigate('Contactus')}
              underlayColor='rgba(250, 168, 127, 0.7)'>
                  <Text style={styles.homeLinkText}>Contact{"\n"}Us</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.flexItem}
              onPress={handlePressDonate}
              underlayColor='rgba(250, 168, 127, 0.7)'>
                  <Text style={styles.homeLinkText}>Make a{"\n"}Donation</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>

      </ImageBackground>
    </View>
  );
};
}


HomeScreen.navigationOptions = {
  header: null,
};

function handleLogoPress() {
  WebBrowser.openBrowserAsync(

    'https://www.kt.org'
  );
}

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
  container: {
    flex: 1,
    backgroundColor: 'rgba(137, 167, 165, 0.8)',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },

  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  flexItem: {
    padding: 15,
    width: 130,
    height: 130,
    borderRadius: 10,
    borderWidth:1,
    borderColor: '#fff',
    opacity: 80,
    flexDirection: 'row',
    backgroundColor: 'rgba(196, 196, 196, 0.5)',
    marginTop: 30,
    marginRight: 10,
    marginLeft: 20,
    justifyContent:'center',
    alignContent: 'center',
    },
  flexItemWide: {
    padding: 10,
    height: 130,
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
      marginTop: '15%'

    },
  homeLinkText: {
    top:'50%',
    left: '50%',
    color: '#fff',
    fontSize: 15,
    width: 130,
    height: 130,
    marginTop: -20,
    marginLeft: -100,
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
