import * as WebBrowser from 'expo-web-browser';
import React, { useEffect } from 'react';
import {
  Image,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  WebView,
  FlatList,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import { getSermons } from '../actions/sermonArchives';
import { MonoText } from '../components/StyledText';
import  VideoItem  from '../components/VideoItem';


function SermonArchiveScreen ({
  getSermonsAction,
  navigation,
  booksRT,
  loaded,
}) {

  const { goBack } = navigation;

  useEffect(
    () => {
      if (!loaded) {
        getSermonsAction();
      }
    },
    [loaded],
  );

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/background-image.jpg')} style={{width: '100%', height: '100%', resizeMode: 'cover'}}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <TouchableOpacity onPress={handleLogoPress}>
              <Image
                source={
                  __DEV__
                    ? require('../assets/images/kt-logo.png')
                    : require('../assets/images/kt-logo.png')
                }
                style={styles.welcomeImage}
              />
            </TouchableOpacity>
            <Text style={styles.pageTitleText}>Latest Sermons</Text>
          </View>
          {
            booksRT !== undefined
              ? (
              <View style={{flex: 1, paddingTop: 5, alignItems: 'center'}}>

                <FlatList
                  style={{width:'100%'}}
                  data={booksRT}
                  renderItem={({ item }) => {
                    return (
                      <VideoItem
                        item = {item}
                      />
                    )
                  }}
                  keyExtractor={(item, index) => index.toString()}
                />
                <View style={styles.container, {alignItems: 'center', flexDirection:'row', marginBottom:30}}>
                <TouchableHighlight
                  style={styles.buttonSquare}
                  onPress={handlePressSeeMoreVideos}
                  underlayColor='rgba(250, 168, 127, 1)'>
                      <Text style={styles.homeLinkText}>See more{"\n"}on our website</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.buttonSquare}
                    onPress={() => goBack()} title="Go back"
                    underlayColor='rgba(250, 168, 127, 1)'>
                      <Text style={styles.homeLinkText}>Go{"\n"}Back{"\n"}
                        <Ionicons
                          style={{display:'flex'}}
                          size={32}
                          name={Platform.OS === 'ios'
                          ? 'ios-arrow-back' : 'md-arrow-back'}/>
                      </Text>
                  </TouchableHighlight>
                </View>
              </View>
              )
            : (
              <View style={{ flex: 1, padding: 20 }}>
                <ActivityIndicator size="large" color="#ffffff"/>
              </View>
            )
          }
    </ScrollView>
    </ImageBackground>
    </View>
  );
}

SermonArchiveScreen.navigationOptions = {
  header: null,
};

function handleLogoPress() {
  WebBrowser.openBrowserAsync(

    'https://www.kt.org'
  );
}

function handlePressSeeMoreVideos() {
  WebBrowser.openBrowserAsync(
    'https://www.kt.org/sermons/'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(137, 167, 165, 0.8)',
  },
  contentContainer: {
    marginTop: 50,
    flex: 1,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: 0,
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
  homeLinkText: {
    top:'50%',
    left: '50%',
    color: '#fff',
    fontSize: 14,
    width: 110,
    height: 110,
    marginTop: -30,
    marginLeft: -80,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
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
  (state, ownProps) => ({
    loaded: state.sermon.loaded,
    booksRT: state.sermon.data,
  }),
  dispatch => ({
    getSermonsAction: () => dispatch(getSermons())
  }),
)(SermonArchiveScreen)
