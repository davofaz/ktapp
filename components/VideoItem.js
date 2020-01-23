import * as WebBrowser from 'expo-web-browser';
import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
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


// export default class VideoItem extends React.Component {
//   static propTypes = {
//     item: PropTypes.object.isRequired,
//   }
//
//   constructor(props) {
//     super(props);
//     this.state={
//       author: '',
//       isLoaded: false,
//     }
//   }
//
//   componentDidMount() {
//     const authorId = this.props.item.author;
//
//     return fetch (`https://www.kt.org/wp-json/wp/v2/users/${authorId}`)
//       .then(response => response.json())
//       .then(responseJson => {
//         this.setState(
//           {
//             author: responseJson,
//             isLoaded: true
//           },
//           function() {}
//         );
//         //console.log(this.state.author);
//       })
//       .catch((err) => {
//         console.error(err)
//       });
//   }
//
//   render()  {
export default function VideoItem({
  item,
  title,
  post_meta_fields,
  id, jetpack_featured_media_url,
  booksRT,
})

 {

   // useEffect(
   //   () => {
   //
   //     const authorId = booksRT.item.author;
   //
   //         return fetch (`https://www.kt.org/wp-json/wp/v2/users/${authorId}`)
   //           .then(response => response.json())
   //           .then(responseJson => {
   //             this.setState(
   //               {
   //                 author: responseJson,
   //                 isLoaded: true
   //               },
   //               function() {}
   //             );
   //             //console.log(this.state.author);
   //           })
   //           .catch((err) => {
   //             console.error(err)
   //           });
   //
   //   },
   //   [],
   // );

    const styles = useStylesheet(staticStyle)
    //const { title, post_meta_fields, id, jetpack_featured_media_url } = this.props.item;
    //const name = booksRT.author.name;
    //const isLoaded = booksRT.state.isLoaded;

        return (
        <View style={styles.container}>
          <View style={styles.itemContainer}>
            <TouchableHighlight
              style={{width:220, height:150, marginBottom:10}}
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
                    <Text style={styles.authorText}>{item.name}</Text>
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
          )
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
              metaContainer: {
                //height:50,
                width:'100%',
                flex:1,
                flexDirection:'column'
              },
              titleAuthorContainer: {
                //height:40,
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
                //borderBottomColor: 'rgba(255, 255, 255, 0.5)',
                //borderBottomWidth:1,
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
                  height:150,
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
                height:150,
                marginTop: 0,
              },
              metaContainer: {
                height:150,
                width:'100%',
                flex:1,
                flexDirection:'column'
              },
              titleAuthorContainer: {
                //height:150,
                width:'100%',
              },
              iconContainer: {
                width:220,
                height: 150,
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
                //borderBottomColor: 'rgba(255, 255, 255, 0.5)',
                //borderBottomWidth:1,
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

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       //backgroundColor: 'rgba(137, 167, 165, 0.8)',
//     },
//
//     codeHighlightText: {
//       color: 'rgba(96,100,109, 0.8)',
//     },
//     codeHighlightContainer: {
//       backgroundColor: 'rgba(0,0,0,0.05)',
//       borderRadius: 3,
//       paddingHorizontal: 4,
//     },
//     itemContainer: {
//         display:'flex',
//         flexDirection:'row',
//         height:150,
//         marginBottom:10,
//         backgroundColor: 'rgba(137, 167, 165, 1)',
//         shadowColor: 'rgba(0,0,0, 1)', // IOS
//         shadowOffset: { height: 2, width: 0 }, // IOS
//         shadowOpacity: 1, // IOS
//         shadowRadius: 1, //IOS
//         elevation: 6, // Android
//     },
//     titleText: {
//       color: '#fff',
//       fontSize: 11,
//       marginLeft:10,
//       marginTop:10,
//       textTransform: 'uppercase',
//       fontWeight: 'bold',
//       maxWidth: 110,
//     },
//     authorText: {
//       color: '#fff',
//       fontSize: 11,
//       marginLeft:10,
//       marginTop:10,
//       paddingBottom: 5,
//       textTransform: 'uppercase',
//       fontWeight: 'normal',
//       width:130,
//       borderBottomColor: 'rgba(255, 255, 255, 0.5)',
//       borderBottomWidth:1,
//     },
//     audioText: {
//       color: '#fff',
//       fontSize: 11,
//       marginLeft:10,
//       marginTop:10,
//       paddingBottom: 5,
//       textTransform: 'uppercase',
//       fontWeight: 'normal',
//     },
// });
