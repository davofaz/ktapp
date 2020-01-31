import * as WebBrowser from 'expo-web-browser';
import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
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
import { useStylesheet } from "react-native-responsive-ui";
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';


export default function VideoItem({
  item,
  title,
  post_meta_fields,
  id,
  jetpack_featured_media_url,
  url,
})

 {

   const [author, dataSet] = useState(false);
   const authorId = item.author;

    async function fetchAuthor() {
      let response = await fetch(`https://www.kt.org/wp-json/wp/v2/users/${authorId}`)
      response = await response.json()
      dataSet(response)
    }

    useEffect(
      () => {
          fetchAuthor();
      },
      []
    );


    const styles = useStylesheet(staticStyle)

      return (

          (author)
            ? (
        <View style={styles.container}>
          <View style={styles.itemContainer}>
            <TouchableHighlight
              style={styles.imageTouchable}
              onPress={() => WebBrowser.openBrowserAsync(item.post_meta_fields.youtube_url[0])}
              underlayColor='rgba(250, 168, 127, 0.9)'>
              <View style={{display:'flex', flexDirection:'row'}}>
                <ImageBackground
                  style={styles.sermonImage}
                  source={{uri: item.jetpack_featured_media_url}}
                  >
                  <View style={styles.iconContainer}>
                    <Text>
                      <Ionicons
                        style={styles.playIcon}
                        size={80}
                        name={Platform.OS === 'ios'
                        ? 'ios-play' : 'md-play'}/>
                      </Text>
                  </View>
                </ImageBackground>
              </View>
             </TouchableHighlight>
              <View style={styles.metaContainer}>
                <TouchableHighlight
                  style={styles.titleAuthorContainer}
                  onPress={() => WebBrowser.openBrowserAsync(item.post_meta_fields.youtube_url[0])}
                  underlayColor='rgba(250, 168, 127, 0.7)'>
                  <View style={{flexGrow:5, flexDirection:'column'}}>
                    <Text style={styles.titleText}>{item.title.rendered}</Text>
                    <Text style={styles.authorText}>{author.name}</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{height:40, width:'100%'}}
                  onPress={() => WebBrowser.openBrowserAsync(item.post_meta_fields.podcast_file[0])}
                  underlayColor='rgba(250, 168, 127, 0.7)'>
                  <View style={{flexGrow:1, height:50, flexDirection:'row'}}>
                    <Text style={styles.audioText}>MP3</Text>
                    <Ionicons
                      style={{color:'#ffffff', marginLeft:20, marginTop:10}}
                      size={18}
                      name={Platform.OS === 'ios'
                      ? 'ios-musical-note' : 'md-musical-note'}/>
                    </View>
                </TouchableHighlight>
              </View>
          </View>
        </View>
      ) : (
          <View style={{ flex: 1, padding: 20 }}>
            <ActivityIndicator size="large" color="#ffffff"/>
          </View>
        )

  );
}

const staticStyle = [
  {
            query: { orientation: "landscape" },
            style: {
              container: {
                flex: 1,
              },
              itemContainer: {
                flexDirection:'row',
                height:100,
                marginBottom:10,
                backgroundColor: 'rgba(137, 167, 165, 1)',
                shadowColor: 'rgba(0,0,0, 1)', // IOS
                shadowOffset: { height: 2, width: 0 }, // IOS
                shadowOpacity: 1, // IOS
                shadowRadius: 1, //IOS
                elevation: 6, // Android
              },
              sermonImage: {
                width:220,
                height:100
              },
              imageTouchable: {
                width:220,
                height:100,
                marginBottom:10
              },
              metaContainer: {
                width:'100%',
                flex:1,
                flexDirection:'column'
              },
              titleAuthorContainer: {
                flex:1,
                width:'100%',
              },
              iconContainer: {
                width:220,
                height: 100,
                marginTop: 0,
                justifyContent:'center',
                alignItems:'center',
              },
              playIcon: {
                color:'rgba(255, 255, 255, 0.60)',
                flex:1,
                width:100,
               },
              titleText: {
                color: '#fff',
                fontSize: 18,
                marginLeft:10,
                marginTop:10,
                textTransform: 'uppercase',
                fontWeight: 'bold',
              },
              authorText: {
                color: '#fff',
                fontSize: 11,
                marginLeft:10,
                marginTop:10,
                paddingBottom: 5,
                textTransform: 'uppercase',
                fontWeight: 'normal',
                width:130,
              },
              audioText: {
                color: '#fff',
                fontSize: 11,
                marginLeft:10,
                marginTop:10,
                paddingBottom: 5,
                textTransform: 'uppercase',
                fontWeight: 'normal',
              },
            }
  },
  {
            query: { orientation: "portrait" },
            style: {
              container: {
                flex: 1,
              },
              itemContainer: {
                flexDirection:'row',
                height:130,
                marginBottom:10,
                backgroundColor: 'rgba(137, 167, 165, 1)',
                shadowColor: 'rgba(0,0,0, 1)', // IOS
                shadowOffset: { height: 2, width: 0 }, // IOS
                shadowOpacity: 1, // IOS
                shadowRadius: 1, //IOS
                elevation: 6, // Android
              },
              sermonImage: {
                width:200,
                height:130,
                marginTop: 0,
              },
              imageTouchable: {
                width:200,
                height:130,
                marginBottom:10
              },
              metaContainer: {
                height:130,
                width:'100%',
                flex:1,
                flexDirection:'column'
              },
              titleAuthorContainer: {
                width:'100%',
              },
              iconContainer: {
                width:200,
                height: 130,
                justifyContent:'center',
                alignItems:'center',
                marginTop:0,
              },
              playIcon: {
                color:'rgba(255, 255, 255, 0.60)',
                flex:1,
                width:100,
               },
              titleText: {
                color: '#fff',
                fontSize: 14,
                marginLeft:10,
                marginTop:10,
                textTransform: 'uppercase',
                fontWeight: 'bold',
                maxWidth: 110,
              },
              authorText: {
                color: '#fff',
                fontSize: 11,
                marginLeft:10,
                marginTop:10,
                paddingBottom: 5,
                textTransform: 'uppercase',
                fontWeight: 'normal',
                width:130,
              },
              audioText: {
                color: '#fff',
                fontSize: 11,
                marginLeft:10,
                marginTop:10,
                paddingBottom: 5,
                textTransform: 'uppercase',
                fontWeight: 'normal',
              },
            }
  }
];

VideoItem.propTypes = {
     item: PropTypes.object.isRequired,
 }
