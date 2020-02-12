import * as WebBrowser from 'expo-web-browser';
import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableHighlight
} from 'react-native';
import {useStylesheet} from 'react-native-responsive-ui';
import { Ionicons } from '@expo/vector-icons';

export default function CalendarItem({
      item,
      start_date_details,
      image,
      url
    })

     {
      const styles = useStylesheet(staticStyle)

        return (
          <View style={styles.itemContainer}>
            <TouchableHighlight
              style={itemStyles.touchableContainer}
              onPress={() => WebBrowser.openBrowserAsync(item.url)}
              underlayColor='rgba(250, 168, 127, 0.7)'>
              <View style={{display:'flex', flexDirection:'row'}}>
                <Image
                  style={styles.calendarImage}
                  source={{uri: item.image.url}}
                  />
                <View style={styles.textContainer}>
                  <Text style={styles.eventTitleText}>{item.title}</Text>
                  <Text style={itemStyles.eventDateText}>{item.start_date_details.day}/{item.start_date_details.month}/{item.start_date_details.year}</Text>
                  <Text style={itemStyles.eventDateText}>{item.start_date_details.hour}:{item.start_date_details.minutes}</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        )
  }

  const itemStyles = {
    itemContainer: {
        marginBottom:10,
        backgroundColor: 'rgba(137, 167, 165, 1)',
        shadowColor: 'rgba(0,0,0, 1)', // IOS
        shadowOffset: { height: 2, width: 0 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 6 // Android
    },
    touchableContainer: {
      height:100,
      marginBottom:10
    },
    calendarImage: {
      width:150
    },
    textContainer: {
      width:'100%'
    },
    eventTitleText: {
      color: '#fff',
      marginLeft:10,
      marginTop:5,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      overflow: 'hidden'
    },
    eventDateText: {
      color: '#fff',
      marginLeft:10,
      marginTop:5,
      textTransform: 'uppercase'
    },
  }

  const staticStyle = [
    {
              query: { orientation: "landscape" },
              style: {
                itemContainer: {
                  ...itemStyles.itemContainer,
                  height:80
                },
                calendarImage: {
                  ...itemStyles.calendarImage,
                  width:150
                },
                textContainer: {
                  ...itemStyles.textContainer,
                  height:80
                },
                eventTitleText: {
                  ...itemStyles.eventTitleText,
                  fontSize: 16
                },
              }
    },
    {
              query: { orientation: "portrait" },
              style: {
                itemContainer: {
                  ...itemStyles.itemContainer,
                  height:100
                },
                calendarImage: {
                  ...itemStyles.calendarImage,
                  width:150
                },
                textContainer: {
                  ...itemStyles.textContainer,
                  height:100
                },
                eventTitleText: {
                  ...itemStyles.eventTitleText,
                  fontSize: 14,
                  width:220,
                  maxWidth:220
                },
              }
          }
];

CalendarItem.propTypes = {
      item: PropTypes.object.isRequired,
           }
