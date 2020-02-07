import * as WebBrowser from 'expo-web-browser';
import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import {
  View,
  Platform,
  Text,
  ImageBackground,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import { useStylesheet } from "react-native-responsive-ui";
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
              <View style={styles.container}>
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
                  <View style={styles.container}>
                    <Text style={styles.titleText}>{item.title.rendered}</Text>
                    <Text style={styles.authorText}>{author.name}</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.audioContainer}
                  onPress={() => WebBrowser.openBrowserAsync(item.post_meta_fields.podcast_file[0])}
                  underlayColor='rgba(250, 168, 127, 0.7)'>
                  <View style={styles.audioTextContainer}>
                    <Text style={styles.audioText}>MP3</Text>
                    <Ionicons
                      style={styles.audioIcon}
                      size={18}
                      name={Platform.OS === 'ios'
                      ? 'ios-musical-note' : 'md-musical-note'}/>
                    </View>
                </TouchableHighlight>
              </View>
          </View>
        </View>
      ) : (
          <View style={styles.activityContainer}>
            <ActivityIndicator size="large" color="#ffffff"/>
          </View>
        )

  );
}

const itemStyles = {
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
  audioContainer: {
    height:40,
    width:'100%'
  },
  audioTextContainer: {
    flexGrow:1,
    height:50,
    flexDirection:'row'
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
  audioIcon: {
    color:'#ffffff',
    marginLeft:20,
    marginTop:10
  },
  activityContainer: {
    flex: 1,
    padding: 20
  },
}

const staticStyle = [
  {
            query: { orientation: "landscape" },
            style: {
              ...itemStyles.container,
              itemContainer: {
                ...itemStyles.itemContainer,
                height:100,
              },
              sermonImage: {
                width:220,
                height:100
              },
              imageTouchable: {
                ...itemStyles.imageTouchable,
                width:220,
                height:100,
              },
              metaContainer: {
                ...itemStyles.metaContainer,
              },
              titleAuthorContainer: {
                ...itemStyles.titleAuthorContainer,
              },
              iconContainer: {
                ...itemStyles.iconContainer,
                width:220,
                height: 100
              },
              playIcon: {
                ...itemStyles.playIcon,
               },
              titleText: {
                ...itemStyles.titleText,
                fontSize: 18,
              },
              authorText: {
                ...itemStyles.authorText
              },
              audioContainer: {
                ...itemStyles.audioContainer
              },
              audioTextContainer: {
                ...itemStyles.audioTextContainer
              },
              audioText: {
                ...itemStyles.audioText
              },
              audioIcon: {
                ...itemStyles.audioIcon
              },
              activityContainer: {
                ...itemStyles.activityContainer
              }
            }
  },
  {
            query: { orientation: "portrait" },
            style: {
              ...itemStyles.container,
              itemContainer: {
                ...itemStyles.itemContainer,
                height:130,
              },
              sermonImage: {
                width:200,
                height:130,
                marginTop: 0,
              },
              imageTouchable: {
                ...itemStyles.imageTouchable,
                width:200,
                height:130,
              },
              metaContainer: {
                ...itemStyles.metaContainer,
                height:130,
              },
              titleAuthorContainer: {
                ...itemStyles.titleAuthorContainer,
                width:'100%',
              },
              iconContainer: {
                ...itemStyles.iconContainer,
                width:200,
                height: 130
              },
              playIcon: {
                ...itemStyles.playIcon,
               },
              titleText: {
                ...itemStyles.titleText,
                fontSize: 14,
                maxWidth: 110,
              },
              authorText: {
                ...itemStyles.authorText
              },
              audioContainer: {
                ...itemStyles.audioContainer
              },
              audioTextContainer: {
                ...itemStyles.audioTextContainer
              },
              audioText: {
                ...itemStyles.audioText
              },
              audioIcon: {
                ...itemStyles.audioIcon
              },
              activityContainer: {
                ...itemStyles.activityContainer
              }
            }
  }
];

VideoItem.propTypes = {
     item: PropTypes.object.isRequired,
 }
