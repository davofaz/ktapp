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

        return (
          <View style={{display:'flex', borderBottomWidth:1,borderBottomColor:'#fff'}}>
            <TouchableHighlight
              style={{width:'100%', height:50}}
              onPress={()=>{Linking.openURL(`tel:${this.props.number}`);}}
              underlayColor='rgba(250, 168, 127, 0.7)'>
              <View style={{flexDirection:'row'}}>
                <View style={{marginLeft:20, width:'72%'}}>
                  <Text style={styles.phoneTitleText}>{this.props.title}</Text>
                  <Text style={styles.phoneNumText}>{this.props.number}</Text>
                </View>
                <View style={{marginLeft:20, width:'72%'}}>
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
      justifyContent:'center',
      alignContent: 'center',
      },
    flexItemWide: {
      width: '100%',
      opacity: 80,
      backgroundColor: 'rgba(196, 196, 196, 0.5)',
      marginTop: 20,
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
