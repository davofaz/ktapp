import * as WebBrowser from 'expo-web-browser';
import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import {
  View,
  Platform,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';

import { ScreenOrientation } from 'expo';
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

   const [orientation, setOrientation] = useState('PORTRAIT_UP');

   ScreenOrientation.addOrientationChangeListener(
     orientation => setOrientation(orientation.orientationInfo.orientation),
   );
   //console.log(orientation)
   let styles = landscapeStyle;

   if (orientation === 'PORTRAIT_UP' || orientation === 'PORTRAIT_DOWN') {
     styles = portraitStyle;
   }

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


      return (
        (author)
          ? (
        <View style={sharedStyle.container}>
          <View style={styles.itemContainer}>
            <TouchableHighlight
              style={styles.imageTouchable}
              onPress={() => WebBrowser.openBrowserAsync(item.post_meta_fields.youtube_url[0])}
              underlayColor='rgba(250, 168, 127, 0.9)'>
              <View style={styles.container}>
                <ImageBackground
                  style={styles.sermonImage}
                  source={{uri: item.jetpack_featured_media_url}}
                  >
                  <View style={styles.iconContainer}>
                    <Text>
                      <Ionicons
                        style={sharedStyle.playIcon}
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
                  <View style={sharedStyle.container}>
                    <Text style={styles.titleText}>{item.title.rendered}</Text>
                    <Text style={sharedStyle.authorText}>{author.name}</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  style={sharedStyle.audioContainer}
                  onPress={() => WebBrowser.openBrowserAsync(item.post_meta_fields.podcast_file[0])}
                  underlayColor='rgba(250, 168, 127, 0.7)'>
                  <View style={sharedStyle.audioTextContainer}>
                    <Text style={sharedStyle.audioText}>MP3</Text>
                    <Ionicons
                      style={sharedStyle.audioIcon}
                      size={18}
                      name={Platform.OS === 'ios'
                      ? 'ios-musical-note' : 'md-musical-note'}/>
                    </View>
                </TouchableHighlight>
              </View>
          </View>
        </View>
      ) : (
          <View style={sharedStyle.activityContainer}>
            <ActivityIndicator size="large" color="#ffffff"/>
          </View>
        )
  );
}

const sharedStyle = {
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection:'row',
    marginBottom:10,
    backgroundColor: 'rgba(137, 167, 165, 1)',
    shadowColor: 'rgba(0,0,0, 1)', // IOS
    shadowOffset: { height: 2, width: 0 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 6, // Android
  },
  imageTouchable: {
    marginBottom:10
  },
  metaContainer: {
    width:'100%',
    flex:1,
    flexDirection:'column'
  },
  titleAuthorContainer: {
    flex:1,
  },
  iconContainer: {
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
    marginLeft:10,
    marginTop:3,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  authorText: {
    color: '#fff',
    fontSize: 11,
    marginLeft:10,
    textTransform: 'uppercase',
    fontWeight: 'normal',
    width:130,
  },
  audioContainer: {
    width:'100%'
  },
  audioTextContainer: {
    flexGrow:1,
    height:35,
    flexDirection:'row'
  },
  audioText: {
    color: '#fff',
    fontSize: 11,
    marginLeft:10,
    marginTop:6,
    textTransform: 'uppercase',
    fontWeight: 'normal',
  },
  audioIcon: {
    color:'#ffffff',
    marginLeft:20,
    marginTop:6
  },
  activityContainer: {
    flex: 1,
    padding: 20
  },
}

const portraitStyle = StyleSheet.create({
    itemContainer: {
      ...sharedStyle.itemContainer,
      height:100,
    },
    sermonImage: {
      width:175,
      height:100,
      marginTop: 0,
    },
    imageTouchable: {
      ...sharedStyle.imageTouchable,
      width:175,
      height:100,
    },
    metaContainer: {
      ...sharedStyle.metaContainer,
      height:100,
    },
    titleAuthorContainer: {
      ...sharedStyle.titleAuthorContainer,
      width:'100%',
    },
    iconContainer: {
      ...sharedStyle.iconContainer,
      width:175,
      height: 100
    },
    titleText: {
      ...sharedStyle.titleText,
      fontSize: 14,
      maxWidth: '100%',
    },
    authorText: {
      ...sharedStyle.authorText,
      marginTop:3,
    }
});

const landscapeStyle = StyleSheet.create({
    itemContainer: {
      ...sharedStyle.itemContainer,
      height:80,
    },
    sermonImage: {
      width:220,
      height:80
    },
    imageTouchable: {
      ...sharedStyle.imageTouchable,
      width:220,
      height:80,
    },
    metaContainer: {
      ...sharedStyle.metaContainer,
    },
    titleAuthorContainer: {
      ...sharedStyle.titleAuthorContainer,
    },
    iconContainer: {
      ...sharedStyle.iconContainer,
      width:220,
      height: 80
    },
     titleText: {
       ...sharedStyle.titleText,
       fontSize: 18,
     },
     authorText: {
       ...sharedStyle.authorText,
       marginTop:2,
     }
});

VideoItem.propTypes = {
     item: PropTypes.object.isRequired,
 }
