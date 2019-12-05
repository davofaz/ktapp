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


export default class VideoItem extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state={
      author: '',
      isLoaded: false,
    }
  }

  componentDidMount() {
    const authorId = this.props.item.author;

    return fetch (`https://www.kt.org/wp-json/wp/v2/users/${authorId}`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            author: responseJson,
            isLoaded: true
          },
          function() {}
        );
        //console.log(this.state.author);
      })
      .catch((err) => {
        console.error(err)
      });
  }

  render()  {

    const { title, post_meta_fields, id, jetpack_featured_media_url } = this.props.item;
    const name = this.state.author.name;
    const isLoaded = this.state.isLoaded;

        return (
        <View style={styles.container}>
        {isLoaded ? (
          <View style={styles.itemContainer}>
            <TouchableHighlight
              style={{width:220, height:150, marginBottom:10}}
              onPress={() => WebBrowser.openBrowserAsync(post_meta_fields.youtube_url[0])}
              underlayColor='rgba(250, 168, 127, 0.9)'>
              <View style={{display:'flex', flexDirection:'row'}}>
                <ImageBackground
                  style={{width:220, height:150}}
                  source={{uri: jetpack_featured_media_url}}
                  >
                  <View style={styles.container, {width:220,justifyContent:'center', alignItems:'center', marginTop:20}}>
                    <Text>
                      <Ionicons
                        style={{color:'rgba(255, 255, 255, 0.60)', alignSelf:'center'}}
                        size={100}
                        name={Platform.OS === 'ios'
                        ? 'ios-play' : 'md-play'}/>
                      </Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableHighlight>
              <View style={styles.container, { /*backgroundColor: 'rgba(196, 196, 196, 0.5)',*/ height:150, width:'100%', display:'flex', flexDirection:'column'}}>
                <TouchableHighlight
                  style={{height:100, width:180}}
                  onPress={() => WebBrowser.openBrowserAsync(post_meta_fields.youtube_url[0])}
                  underlayColor='rgba(250, 168, 127, 0.7)'>
                  <View style={{display:'flex', height:100, flexDirection:'column'}}>
                    <Text style={styles.titleText}>{title.rendered}</Text>
                    <Text style={styles.authorText}>{name}</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{height:50, width:180}}
                  onPress={() => WebBrowser.openBrowserAsync(post_meta_fields.podcast_file[0])}
                  underlayColor='rgba(250, 168, 127, 0.7)'>
                  <View style={{display:'flex', height:50, flexDirection:'row'}}>
                    <Text style={styles.audioText}>Audio Only</Text>
                    <Ionicons
                      style={{color:'#ffffff', marginLeft:20, marginTop:10}}
                      size={18}
                      name={Platform.OS === 'ios'
                      ? 'ios-download' : 'md-download'}/>
                    </View>
                </TouchableHighlight>
              </View>
            </View>
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
      //backgroundColor: 'rgba(137, 167, 165, 0.8)',
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
    titleText: {
      color: '#fff',
      fontSize: 11,
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
      borderBottomColor: 'rgba(255, 255, 255, 0.5)',
      borderBottomWidth:1,
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
});
