import * as WebBrowser from 'expo-web-browser';
import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  Platform,
  Text,
  TouchableHighlight,
  Linking,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PhoneListItem({
  item,
  name,
  number
})

 {
  const styles = useStylesheet(staticStyle)

    return (
          <View style={itemStyles.itemContainer}>
            <TouchableHighlight
              style={itemStyles.itemTouchable}
              onPress={()=>{Linking.openURL(`tel:${item.number}`);}}
              underlayColor='rgba(250, 168, 127, 0.7)'>
              <View style={{flexDirection:'row'}}>
                <View style={itemStyles.itemTextContainer}>
                  <Text style={itemStyles.phoneTitleText}>{item.name}</Text>
                  <Text style={itemStyles.phoneNumText}>{item.number}</Text>
                </View>
                <View style={itemStyles.itemIconContainer}>
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

const itemStyles = {
  itemContainer: {
      height:70,
      marginBottom:10,
      backgroundColor: 'rgba(137, 167, 165, 1)',
      shadowColor: 'rgba(0,0,0, 1)', // IOS
      shadowOffset: { height: 2, width: 0 }, // IOS
      shadowOpacity: 1, // IOS
      shadowRadius: 1, //IOS
      elevation: 6 // Android
  },
  itemTouchable: {
      width:'100%',
      height:70
  },
  itemTextContainer: {
    marginLeft:20,
    marginTop:3,
    width:'72%'
  },
  itemIconContainer: {
    marginLeft:20,
    marginTop:10,
    width:'28%'
  },
  callIcon: {
    width: '25%',
    color:'#fff',
    marginTop:5
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
    fontWeight: 'normal'
  }
}

const styles = StyleSheet.create({
  landscape: {
                callIcon: {
                  ...itemStyles.callIcon,
                  alignSelf: 'center',
                  marginLeft:'2%'
                }
},
  portrait: {

                  callIcon: {
                    ...itemStyles.callIcon,

                  }
                }
});

PhoneListItem.propTypes = {
  item: PropTypes.object.isRequired,
}
