import * as WebBrowser from 'expo-web-browser';
import React, { useEffect } from 'react';
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
  WebView,
  FlatList,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import { getContacts } from '../actions/contacts';
import PhoneListItem from '../components/PhoneListItem';
import Screen from '../components/Screen';



function ContactNumbersScreen ({
  getContactsAction,
  navigation,
  booksRT,
  loaded,
  data

}) {

  const { goBack } = navigation;
  const { kt_general_information,
    senior_ministers_office,
    lcc_satellite_office,
    operations,
    training,
    prayer_and_visitation,
    nugen,
    kids,
    finance,
    encounters,
    baptism,
    kt_bookshop,
    revival_times,
    dovewell_productions,
    it,
    community_link,
    cells_consolidation } = this.state.data;


  useEffect(
    () => {
      if (!loaded) {
        getContactsAction();
      }
    },
    [loaded],
  );

    return (
      <Screen
        title="Contact us"
      >
        { booksRT !== undefined
           ? (
          <View style={styles.listContainer}>
            <FlatList
              style={{width:'100%'}}
                data={[
                {name: 'KT General Information', number: kt_general_information},
                {name: 'Senior Ministers Office', number: senior_ministers_office},
                {name: 'Nugen', number: nugen},
                {name: 'Kids', number: kids},
                {name: 'Prayer and Visitation', number: prayer_and_visitation},
                {name: 'LCC Satellite Office', number: lcc_satellite_office},
                {name: 'Training', number: training},
                {name: 'Finance', number: finance},
                {name: 'Encounters', number: encounters},
                {name: 'Revival Times', number: revival_times},
                {name: 'KT Bookshop', number: kt_bookshop},
                {name: 'Dovewell Productions', number: dovewell_productions},
                {name: 'Community Link', number: community_link},
                {name: 'Cells/Consolidation', number: cells_consolidation},
                {name: 'IT', number: it},
                ]}
                renderItem={({item}) => {
                  return (
                  <PhoneListItem
                    item={item}
                  />
                )
              }}
              keyExtractor={(item, index) => index.toString()}
            />

            <View style={styles.container, {alignSelf: 'center', alignItems: 'center', flexDirection:'row', marginBottom:30}}>
              <TouchableHighlight
                style={styles.buttonSquare}
                onPress={handlePressEmailUs}
                underlayColor='rgba(250, 168, 127, 1)'>
                    <Text style={styles.homeLinkText2}>Send us{"\n"}a message</Text>
              </TouchableHighlight>
              <TouchableHighlight
                  style={styles.buttonSquare}
                  onPress={() => goBack()} title="Go back"
                  underlayColor='rgba(250, 168, 127, 1)'>
                    <Text style={styles.homeLinkText}>Go{"\n"}Back{"\n"}
                      <Ionicons
                        style={{display:'flex'}}
                        size={32}
                        name={Platform.OS === 'ios'
                        ? 'ios-arrow-back' : 'md-arrow-back'}/>
                    </Text>
                </TouchableHighlight>
            </View>
          </View>
          ) : (
          <View style={{ flex: 1, padding: 20 }}>
            <ActivityIndicator size="large" color="#ffffff"/>
          </View>
        )}
      </Screen>
    );
  }



ContactNumbersScreen.navigationOptions = {
  header: null,
};


function handleLogoPress() {
  WebBrowser.openBrowserAsync(

    'https://www.kt.org'
  );
}

function handlePressEmailUs() {
  WebBrowser.openBrowserAsync(
    'https://www.kt.org/email-us/'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(137, 167, 165, 0.8)',
  },
  contentContainer: {
    marginTop: 50,
    flex: 1,
  },
  listContainer: {
    flex: 1,
    paddingTop: 5,
    alignItems: 'center',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: 0,
  },
  buttonSquare: {
    padding: 15,
    width: 110,
    height: 110,
    borderRadius: 10,
    borderWidth:1,
    borderColor: '#fff',
    opacity: 80,
    flexDirection: 'row',
    backgroundColor: 'rgba(137, 167, 165, 1)',
    marginTop: 35,
    marginRight: 10,
    marginLeft: 25,
    justifyContent:'center',
    alignContent: 'center',
    shadowColor: 'rgba(0,0,0, .6)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 6, // Android
    },
  buttonWide: {
    padding: 10,
    height: 110,
    width: 280,
    borderRadius: 10,
    borderWidth:1,
    borderColor: '#fff',
    opacity: 80,
    flexDirection: 'row',
    backgroundColor: 'rgba(196, 196, 196, 0.5)',
    marginTop: 20,
    justifyContent:'center',
    alignContent: 'center',
    },
  homeLinkText: {
    top:'50%',
    left: '50%',
    color: '#fff',
    fontSize: 14,
    width: 110,
    height: 110,
    marginTop: -30,
    marginLeft: -80,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  homeLinkText2: {
    top:'50%',
    left: '50%',
    color: '#fff',
    fontSize: 14,
    width: 110,
    height: 110,
    marginTop: -20,
    marginLeft: -80,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
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
  pageTitleText: {
    color: '#fff',
    fontSize: 12,
    margin: 'auto',
    paddingTop:20,
    letterSpacing:3,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'normal',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
});

export default connect(
  (state, ownProps) => ({
    loaded: state.contact.loaded,
    booksRT: state.contact.data,
  }),
  dispatch => ({
    getContactsAction: () => dispatch(getContacts())
  }),
)(ContactNumbersScreen)
