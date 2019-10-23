import * as WebBrowser from 'expo-web-browser';
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
  WebView,
  FlatList,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';
import { MonoText } from '../components/StyledText';
import  BookItem  from '../components/BookItem';
import PhoneListItemNew from '../components/PhoneListItemNew';



export default class ContactNumbersScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       isLoaded: false,
       data: [],
     };
  }

  componentDidMount() {
    return fetch ('https://www.kt.org/wp-json/wp/v2/pages/23957')
      .then(response => response.json())
      .then(responseJson => {
        //console.log(responseJson)
        // let filteredResponseJson = responseJson.post_meta_fields.filter(item => item.baptism === "020 8799 6152")
        // console.log(filteredResponseJson)
        this.setState(
          {
            data: responseJson.post_meta_fields,
            // data: filteredResponseJson,
            isLoaded: true
          },
          function() {}
        );
      })
      .catch((err) => {
        console.error(err)
      });

}
  render() {
    const { data, isLoaded} = this.state;
    const {
      kt_general_information,
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
      cells_consolidation,
    } = this.state.data;

    const { goBack } = this.props.navigation;
    return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/background-image.jpg')} style={{width: '100%', height: '100%', resizeMode: 'cover'}}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <TouchableOpacity onPress={handleLogoPress} style={styles.helpLink}>
              <Image
                source={
                  __DEV__
                    ? require('../assets/images/kt-logo.png')
                    : require('../assets/images/kt-logo.png')
                }
                style={styles.welcomeImage}
              />
            </TouchableOpacity>
            <Text style={styles.pageTitleText}>Contact Us</Text>
          </View>
        { isLoaded ? (
          <View style={/*styles.container2, {width:'100%'}*/{flex: 1, paddingTop: 5, alignItems: 'center'}}>
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
              <PhoneListItemNew
                item={item}
              />
            )
          }}
            keyExtractor={(item, index) => index.toString()}
            />

              {/*}<PhoneListItem
                number={kt_general_information}
                title="KT General Information"
              />*/}

              <View style={styles.container, {alignSelf: 'center', alignItems: 'center', flexDirection:'row', marginBottom:30}}>
                <TouchableHighlight
                  style={styles.flexItem}
                  onPress={handlePressEmailUs}
                  underlayColor='rgba(250, 168, 127, 0.7)'>
                      <Text style={styles.homeLinkText}>Send us{"\n"}a message</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.flexItem}
                    onPress={() => goBack()} title="Go back"
                    underlayColor='rgba(250, 168, 127, 0.7)'>
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
    </ScrollView>
  </ImageBackground>
</View>
);
}
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
    marginTop: 60,
    flex: 1,
  },
  container2: {
    flex: 1,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
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
    padding: 10,
    height: 70,
    width: 280,
    borderRadius: 10,
    borderWidth:1,
    borderColor: '#fff',
    opacity: 80,
    flexDirection: 'row',
    backgroundColor: 'rgba(196, 196, 196, 0.5)',
    marginTop: 5,
    justifyContent:'center',
    alignContent: 'center',
    },
  homeLinksContainer: {
      display:'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignContent: 'stretch',
      alignItems: 'center',
    },
  homeLinkText: {
    color: '#fff',
    fontSize: 17,
    margin: 'auto',
    paddingTop: 20,
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
