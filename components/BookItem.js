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
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';
import { MonoText } from '../components/StyledText';


export default class BookItem extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    //key: PropTypes.number
  }

  constructor(props) {
    super(props);
    this.state={
      //pdfUrl: '',
      //isLoaded: false,
    }
  }


  render()  {

    const { title, post_meta_fields, id, jetpack_featured_media_url } = this.props.item;
    console.log(post_meta_fields)

    //  if (isLoaded) {
        return (
            <View>
            <TouchableHighlight
              style={{height:100, marginBottom:10}}
              onPress={() => WebBrowser.openBrowserAsync(post_meta_fields.flip_book_url[0])}
              underlayColor='rgba(250, 168, 127, 0.7)'>
              <View style={{display:'flex', flexDirection:'row'}}>
                <Image
                  style={{width:150, height:100}}
                  source={{uri: jetpack_featured_media_url}}
                  />
                  <View style={{backgroundColor: 'rgba(196, 196, 196, 0.5)', height:100, width:'100%'}}>
                  <Text style={styles.rtLinkText}>{title.rendered}</Text>
                  </View>
              </View>
            </TouchableHighlight>

            </View>
          )
    /*  }
      return null

  */  };
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
    flexItem: {
      padding: 10,
      width: 130,
      height: 130,
      borderRadius: 10,
      borderWidth:1,
      borderColor: '#fff',
      opacity: 80,
      flexDirection: 'row',
      backgroundColor: 'rgba(196, 196, 196, 0.5)',
      marginTop: 20,
      marginRight: 10,
      marginLeft: 10,
      /*textAlign: 'center',*/
      justifyContent:'center',
      alignContent: 'center',
      },
    flexItemWide: {
      //padding: 10,
      width: '100%',
      //borderRadius: 10,
      //borderWidth:1,
      //borderColor: '#fff',
      opacity: 80,
      //flexDirection: 'column',
      backgroundColor: 'rgba(196, 196, 196, 0.5)',
      marginTop: 20,
      //justifyContent:'center',
      //alignContent: 'center',
      },

    rtLinkText: {
      color: '#fff',
      fontSize: 14,
      marginLeft:20,
      marginTop:50,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      width:130,
      height:100,
    },
});
