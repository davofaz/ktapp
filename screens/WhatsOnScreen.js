import * as WebBrowser from 'expo-web-browser';
import React, { useEffect }  from 'react';
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
import {useStylesheet} from 'react-native-responsive-ui';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import { getEvents } from '../actions/whatsOns';
import  CalendarItem  from '../components/CalendarItem';
import Screen from '../components/Screen';


function WhatsOnScreen ({
  getEventsAction,
  navigation,
  booksRT,
  loaded,
}) {

  useEffect(
    () => {
      if (!loaded) {
        getEventsAction();
      }
    },
    [loaded],
  );

  const { goBack } = navigation;
  const styles = useStylesheet(staticStyle)

  return (
    <Screen
      title="What's On"
    >
      {
        booksRT !== undefined
         ? (
        <View style={{flex: 5, paddingTop: 5, alignItems: 'center'}}>
          <FlatList
            style={{width:'100%'}}
            data={booksRT}
            renderItem={({ item }) => {
              return (
                <CalendarItem
                  item = {item}
                />
              )
            }}
            keyExtractor={(item, index) => index.toString()}
          />
          <View style={styles.bottomNav}>
            <TouchableHighlight
              style={styles.buttonSquare}
              onPress={handlePressSeeMoreRT}
              underlayColor='rgba(250, 168, 127, 1)'>
                <View style={styles.container, {alignItems: 'center', flexDirection:'row'}}>
                  <Text style={styles.buttonText}>See more on our website</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.buttonSquare}
                onPress={() => goBack()}
                title="Go back"
                underlayColor='rgba(250, 168, 127, 1)'>
                <View style={styles.backButton}>
                  <Ionicons
                    style={styles.arrowIcon}
                    size={32}
                    name={Platform.OS === 'ios'
                    ? 'ios-arrow-back' : 'md-arrow-back'}/>
                  <Text style={styles.buttonText}>Go Back</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        ) : (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator size="large" color="#ffffff"/>
        </View>
      )}
      </Screen>
    );
  }


WhatsOnScreen.navigationOptions = {
  header: null,
};


function handlePressSeeMoreRT() {
  WebBrowser.openBrowserAsync(
    'https://www.kt.org/events'
  );
}

const staticStyle = [
  {
            query: { orientation: "landscape" },
            style: {
              container: {
                flex:1,
              },
              arrowIcon: {
                color:'#fff',
                margin:20,
                marginLeft:50,
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
                marginBottom:10,
                },
                backButton: {
                  flex:1,
                  alignItems: 'center',
                  flexDirection:'row',
                },
              buttonText: {
                color: '#fff',
                fontSize: 14,
                textAlign: 'center',
                textTransform: 'uppercase',
                fontWeight: 'bold',
              }
            }
  },
  {
            query: { orientation: "portrait" },
            style: {
              container: {
                flex:1,
              },
              arrowIcon: {
                color:'#fff',
                marginTop:15,

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
              }
            }
  }
];

export default connect(
  (state, ownProps) => ({
    loaded: state.event.loaded,
    booksRT: state.event.data,
  }),
  dispatch => ({
    getEventsAction: () => dispatch(getEvents())
  }),
)(WhatsOnScreen)
