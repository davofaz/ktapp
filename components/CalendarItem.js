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
import {useStylesheet} from 'react-native-responsive-ui';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';


// export default class CalendarItem extends React.Component {
//   static propTypes = {
//     item: PropTypes.object.isRequired,
//   }
//
//   constructor(props) {
//     super(props);
//     this.state={
//       //pdfUrl: '',
//       isLoaded: true,
//     }
//   }
//
//   render()  {

    // const { title, start_date_details, image, url, } = this.props.item;
    // const isLoaded = this.state.isLoaded;
export default function CalendarItem({
      item,
      start_date_details,
      image,
      url,
      booksRT,
    })

     {
      const styles = useStylesheet(staticStyle)

        return (
          <View style={styles.itemContainer}>
            <TouchableHighlight
              style={{height:100, marginBottom:10}}
              onPress={() => WebBrowser.openBrowserAsync(url)}
              underlayColor='rgba(250, 168, 127, 0.7)'>
              <View style={{display:'flex', flexDirection:'row'}}>
                <Image
                  style={styles.calendarImage}
                  source={{uri: item.image.sizes.medium.url}}
                  />
                <View style={styles.textContainer}>
                  <Text style={styles.eventTitleText}>{item.title}</Text>
                  <Text style={styles.eventDateText}>{item.start_date_details.day}/{item.start_date_details.month}/{item.start_date_details.year}</Text>
                  <Text style={styles.eventDateText}>{item.start_date_details.hour}:{item.start_date_details.minutes}</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        )
  }

  const staticStyle = [
    {
              query: { orientation: "landscape" },
              style: {
                container: {
                  flex: 1,
                  //backgroundColor: 'rgba(137, 167, 165, 0.8)',
                },
                itemContainer: {
                    display:'flex',
                    height:80,
                    marginBottom:10,
                    backgroundColor: 'rgba(137, 167, 165, 1)',
                    shadowColor: 'rgba(0,0,0, 1)', // IOS
                    shadowOffset: { height: 2, width: 0 }, // IOS
                    shadowOpacity: 1, // IOS
                    shadowRadius: 1, //IOS
                    elevation: 6, // Android
                },
                calendarImage: {
                  width:150,
                  height:80
                },
                textContainer: {
                  height:80,
                  width:'100%',
                },
                eventTitleText: {
                  color: '#fff',
                  fontSize: 16,
                  marginLeft:10,
                  marginTop:5,
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  overflow: 'hidden',
                },
                eventDateText: {
                  color: '#fff',
                  fontSize: 12,
                  marginLeft:10,
                  marginTop:5,
                  textTransform: 'uppercase',
                },
              }
    },
    {
              query: { orientation: "portrait" },
              style: {
                container: {
                  flex: 1,
                  backgroundColor: 'rgba(137, 167, 165, 0.8)',
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
                calendarImage: {
                  width:150,
                  height:100
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
                  width:220,
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  overflow: 'hidden',
                  maxWidth:220,
                },
                eventDateText: {
                  color: '#fff',
                  fontSize: 12,
                  marginLeft:10,
                  marginTop:5,
                  textTransform: 'uppercase',
                },
              }
          }
];

CalendarItem.propTypes = {
      item: PropTypes.object.isRequired,
           }
