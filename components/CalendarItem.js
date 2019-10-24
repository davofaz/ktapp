import * as WebBrowser from 'expo-web-browser';
import PropTypes from 'prop-types';
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
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';
import { MonoText } from '../components/StyledText';


export default class CalendarItem extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state={
      //pdfUrl: '',
      isLoaded: true,
    }
  }

  render()  {

    const { title, start_date_details, image, url, } = this.props.item;
    const isLoaded = this.state.isLoaded;

      return (
          <View style={styles.itemContainer}>
            {isLoaded ? (
            <TouchableHighlight
              style={{height:100, marginBottom:10}}
              onPress={() => WebBrowser.openBrowserAsync(url)}
              underlayColor='rgba(250, 168, 127, 0.7)'>
              <View style={{display:'flex', flexDirection:'row'}}>
                <Image
                  style={{width:150, height:100}}
                  source={{uri: image.sizes.medium.url}}
                  />
                <View style={styles.textContainer}>
                  <Text style={styles.eventTitleText}>{title}</Text>
                  <Text style={styles.eventDateText}>{start_date_details.day}/{start_date_details.month}/{start_date_details.year}</Text>
                  <Text style={styles.eventDateText}>{start_date_details.hour}:{start_date_details.minutes}</Text>
                </View>
              </View>
            </TouchableHighlight>
            ) : (
          <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator size="large" color="#ffffff"/>
        </View>
        )}
        </View>
          )
    };
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(137, 167, 165, 0.8)',
    },

    codeHighlightText: {
      color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
      backgroundColor: 'rgba(0,0,0,0.05)',
      borderRadius: 3,
      paddingHorizontal: 4,
    },
    itemContainer: {
        display:'flex',
        height:100,
        marginBottom:10,
        backgroundColor: 'rgba(137, 167, 165, 1)',
        shadowColor: 'rgba(0,0,0, 1)', // IOS
        shadowOffset: { height: 2, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 6, // Android
    },
    textContainer: {
      height:100, 
      width:'100%',
    },
    eventTitleText: {
      color: '#fff',
      fontSize: 14,
      marginLeft:10,
      marginTop:5,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      maxWidth:220,
    },
    eventDateText: {
      color: '#fff',
      fontSize: 12,
      marginLeft:10,
      marginTop:5,
      textTransform: 'uppercase',
    },
});
