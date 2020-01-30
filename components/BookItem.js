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
  Dimensions,
} from 'react-native';
import { useStylesheet } from "react-native-responsive-ui";
import { Ionicons } from '@expo/vector-icons';


export default function BookItem({
  item,
  title,
  post_meta_fields,
  id,
  jetpack_featured_media_url
})

 {
  const styles = useStylesheet(staticStyle)

    return (
        <View>
          <TouchableHighlight
            style={styles.itemContainer}
            onPress={() => WebBrowser.openBrowserAsync(item.post_meta_fields.flip_book_url[0])}
            underlayColor='rgba(250, 168, 127, 1)'>
            <View style={{display:'flex', flexDirection:'row'}}>
              <Image
                style={styles.rtImage}
                source={{uri: item.jetpack_featured_media_url}}
                />
                <View style={{/*backgroundColor: 'rgba(196, 196, 196, 1)',*/ height:100, width:'100%'}}>
                <Text style={styles.rtLinkText}>{item.title.rendered}</Text>
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
                backgroundColor: 'rgba(137, 167, 165, 0.8)',
              },
              itemContainer: {
                  height:70,
                  marginBottom:10,
                  backgroundColor: 'rgba(137, 167, 165, 1)',
                  shadowColor: 'rgba(0,0,0, 1)', // IOS
                  shadowOffset: { height: 2, width: 0 }, // IOS
                  shadowOpacity: 1, // IOS
                  shadowRadius: 1, //IOS
                  elevation: 6, // Android
              },
              rtLinkText: {
                color: '#fff',
                fontSize: 14,
                marginLeft:20,
                marginTop:25,
                textTransform: 'uppercase',
                fontWeight: 'bold',
                width:300,
                height:80,
              },
              rtImage: {
                width:150,
                height:70
              }
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
                  height:100,
                  marginBottom:10,
                  backgroundColor: 'rgba(137, 167, 165, 1)',
                  shadowColor: 'rgba(0,0,0, 1)', // IOS
                  shadowOffset: { height: 2, width: 0 }, // IOS
                  shadowOpacity: 1, // IOS
                  shadowRadius: 1, //IOS
                  elevation: 6, // Android
              },
              rtLinkText: {
                color: '#fff',
                fontSize: 14,
                marginLeft:20,
                marginTop:30,
                textTransform: 'uppercase',
                fontWeight: 'bold',
                width:130,
                height:100,
              },
              rtImage: {
                width:150,
                height:100
              }
            }
    }
  ];

BookItem.propTypes = {
     item: PropTypes.object.isRequired,
 }
