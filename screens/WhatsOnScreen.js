import * as WebBrowser from 'expo-web-browser';
import React from 'react';
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
import { MonoText } from '../components/StyledText';
import  CalendarItem  from '../components/CalendarItem';



export default class WhatsOnScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       isLoaded: false,
       booksRT: [],
     };
  }

  componentDidMount() {
    return fetch ('https://www.kt.org/wp-json/tribe/events/v1/events')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            booksRT: responseJson.events,
            isLoaded: true
          },
          function() {}
        );
      })
      .catch((err) => {
        console.error(err)
      });
      //console.log(responseJson);

}
  render() {
    const { booksRT, isLoaded } = this.state;
    //console.log(this.state.booksRT);
    const { goBack } = this.props.navigation;
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
            <Text style={styles.pageTitleText}>What's On</Text>
          </View>
        { isLoaded ? (
          <View style={{flex: 1, paddingTop: 5, alignItems: 'center'}}>
            <FlatList
              style={{width:'100%'}}
              data={this.state.booksRT}
              renderItem={({ item }) => {
                return (
                  <CalendarItem
                    item = {item}
                  />
                )
              }}
              keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.container, {alignItems: 'center', flexDirection:'row', marginBottom:30}}>
            <TouchableHighlight
              style={styles.flexItem}
              onPress={handlePressSeeMoreRT}
              underlayColor='rgba(250, 168, 127, 0.7)'>
                  <Text style={styles.homeLinkText}>See more{"\n"}on our website</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.flexItem}
                onPress={() => goBack()} title="Go back"
                underlayColor='rgba(250, 168, 127, 0.7)'>
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
        ) : (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator size="large" color="#ffffff"/>
        </View>
      )}

    </ScrollView>
  </ImageBackground>
  </View>
);
}
}



WhatsOnScreen.navigationOptions = {
  header: null,
};




function handleLogoPress() {
  WebBrowser.openBrowserAsync(

    'https://www.kt.org'
  );
}

function handlePressSeeMoreRT() {
  WebBrowser.openBrowserAsync(
    'https://www.kt.org/events'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(137, 167, 165, 0.8)',
  },
  contentContainer: {
    marginTop: 60,
    flex: 1,
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
    padding: 10,
    width: 130,
    height: 130,
    borderRadius: 10,
    borderWidth:1,
    borderColor: '#fff',
    opacity: 80,
    flexDirection: 'row',
    backgroundColor: 'rgba(196, 196, 196, 0.5)',
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
    /*textAlign: 'center',*/
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
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignContent: 'stretch',
      alignItems: 'center',
    },
  homeLinkText: {
    color: '#fff',
    fontSize: 17,
    margin: 'auto',
    paddingTop: 20,
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
