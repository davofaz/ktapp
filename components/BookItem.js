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
    //console.log(post_meta_fields)

      return (
        <View>
          <TouchableHighlight
            style={styles.itemContainer}
            onPress={() => WebBrowser.openBrowserAsync(post_meta_fields.flip_book_url[0])}
            underlayColor='rgba(250, 168, 127, 1)'>
            <View style={{display:'flex', flexDirection:'row'}}>
              <Image
                style={{width:150, height:100}}
                source={{uri: jetpack_featured_media_url}}
                />
                <View style={{/*backgroundColor: 'rgba(196, 196, 196, 1)',*/ height:100, width:'100%'}}>
                <Text style={styles.rtLinkText}>{title.rendered}</Text>
                </View>
            </View>
          </TouchableHighlight>
        </View>
          )
      };
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
});
