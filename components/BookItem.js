import * as WebBrowser from 'expo-web-browser';
import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import { useStylesheet } from "react-native-responsive-ui";


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
        <View style={itemStyles.container}>
          <TouchableHighlight
            style={styles.itemContainer}
            onPress={() => WebBrowser.openBrowserAsync(item.post_meta_fields.flip_book_url[0])}
            underlayColor='rgba(250, 168, 127, 1)'>
            <View style={styles.rowContainer}>
              <Image
                style={styles.rtImage}
                source={{uri: item.jetpack_featured_media_url}}
                />
                <View style={itemStyles.rtLinkTextContainer}>
                <Text style={styles.rtLinkText}>{item.title.rendered}</Text>
                </View>
            </View>
          </TouchableHighlight>
        </View>
          )
  }

const itemStyles = {
  container: {
    flex: 1,
    backgroundColor: 'rgba(137, 167, 165, 0.8)',
  },
  rowContainer: {
    display:'flex',
    flexDirection:'row'
  },
  itemContainer: {
      marginBottom:10,
      backgroundColor: 'rgba(137, 167, 165, 1)',
      shadowColor: 'rgba(0,0,0, 1)', // IOS
      shadowOffset: { height: 2, width: 0 }, // IOS
      shadowOpacity: 1, // IOS
      shadowRadius: 1, //IOS
      elevation: 6, // Android
  },
  rtLinkTextContainer: {
    height:100,
    width:'100%'
  },
  rtImage: {
    width:150,
  },
  rtLinkText: {
    color: '#fff',
    fontSize: 14,
    marginLeft:20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }
}


const staticStyle = [
  {
            query: { orientation: "landscape" },
            style: {
              rowContainer: {
                ...itemStyles.rowContainer,
              },
              itemContainer: {
                ...itemStyles.itemContainer,
                  height:70
              },
              rtLinkText: {
                ...itemStyles.rtLinkText,
                color: '#fff',
                marginTop:25,
                width:300,
                height:80,
              },
              rtImage: {
                ...itemStyles.rtImage,
                height:70
              }
            }
  },
  {
            query: { orientation: "portrait" },
            style: {
              rowContainer: {
                ...itemStyles.rowContainer,
              },
              itemContainer: {
                ...itemStyles.itemContainer,
                height:100
              },
              rtLinkText: {
                ...itemStyles.rtLinkText,
                marginTop:30,
                width:130,
                height:100,
              },
              rtImage: {
                ...itemStyles.rtImage,
                height:100
              }
            }
    }
  ];

BookItem.propTypes = {
     item: PropTypes.object.isRequired,
 }
