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
import { useStylesheet } from 'react-native-responsive-ui';
import { Ionicons } from '@expo/vector-icons';

export default function PhoneListItem({
  item,
  name,
  number,
})

 {
  const styles = useStylesheet(staticStyle)

    return (
          <View style={styles.itemContainer}>
            <TouchableHighlight
              style={{width:'100%', height:70}}
              onPress={()=>{Linking.openURL(`tel:${item.number}`);}}
              underlayColor='rgba(250, 168, 127, 0.7)'>
              <View style={{flexDirection:'row'}}>
                <View style={{marginLeft:20, marginTop:3, width:'72%'}}>
                  <Text style={styles.phoneTitleText}>{item.name}</Text>
                  <Text style={styles.phoneNumText}>{item.number}</Text>
                </View>
                <View style={{marginLeft:20, marginTop:10, width:'28%'}}>
                  <Ionicons
                    style={styles.callIcon}
                    size={32}
                    name={Platform.OS === 'ios'
                    ? 'ios-call' : 'md-call'}/>
                </View>
              </View>
            </TouchableHighlight>
          </View>
          )
}

const staticStyle = [
  {
            query: { orientation: "landscape" },
            style: {
              container: {
                flex: 1,
                backgroundColor: 'rgba(137, 167, 165, 0.8)',
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
                callIcon: {
                  width: '25%',
                  color:'#fff',
                  marginTop:5,
                  marginLeft:50,
                  alignSelf: 'center',
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
                  textTransform: 'uppercase',
                  fontWeight: 'normal',
                }
              }
},
{
              query: { orientation: "portrait" },
              style: {
                container: {
                  flex: 1,
                  backgroundColor: 'rgba(137, 167, 165, 0.8)',
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
                  callIcon: {
                    //display:'flex',
                    width: '25%',
                    color:'#fff',
                    marginTop:5,
                    marginLeft:20
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
                  }
                }
  }
];

PhoneListItem.propTypes = {
  item: PropTypes.object.isRequired,
}
