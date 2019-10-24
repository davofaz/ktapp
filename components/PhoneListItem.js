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
  Linking,
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';
import { MonoText } from '../components/StyledText';


export default class PhoneListItem extends React.Component {
  static propTypes = {
    number: PropTypes.array,
    name: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state={
    }
  }


  render()  {
    const { name, number } = this.props.item;
        return (
          <View style={styles.itemContainer}>
            <TouchableHighlight
              style={{width:'100%', height:70}}
              onPress={()=>{Linking.openURL(`tel:${number}`);}}
              underlayColor='rgba(250, 168, 127, 0.7)'>
              <View style={{flexDirection:'row'}}>
                <View style={{marginLeft:20, marginTop:3, width:'72%'}}>
                  <Text style={styles.phoneTitleText}>{name}</Text>
                  <Text style={styles.phoneNumText}>{number}</Text>
                </View>
                <View style={{marginLeft:20, marginTop:10, width:'72%'}}>
                  <Ionicons
                    style={{display:'flex', width: '25%', color:'#fff', marginTop:5, marginLeft:20}}
                    size={32}
                    name={Platform.OS === 'ios'
                    ? 'ios-call' : 'md-call'}/>
                </View>
              </View>
            </TouchableHighlight>
          </View>
          ) };
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
          display:'flex',
          height:70,
          marginBottom:10,
          backgroundColor: 'rgba(137, 167, 165, 1)',
          shadowColor: 'rgba(0,0,0, 1)', // IOS
          shadowOffset: { height: 2, width: 0 }, // IOS
          shadowOpacity: 1, // IOS
          shadowRadius: 1, //IOS
          elevation: 6, // Android
      },
      phoneTitleText: {
        color: '#fff',
        fontSize: 14,
        paddingTop: 10,
        textTransform: 'uppercase',
        fontWeight: 'bold',
      },
      phoneNumText: {
        color: '#fff',
        fontSize: 13,
        //paddingTop: 10,
        textTransform: 'uppercase',
        fontWeight: 'normal',
      },
});
