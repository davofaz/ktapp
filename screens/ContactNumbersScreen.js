import * as WebBrowser from 'expo-web-browser';
import React, { useEffect } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useStylesheet} from 'react-native-responsive-ui';
import { connect } from 'react-redux';
import { getContacts } from '../actions/contacts';
import PhoneListItem from '../components/PhoneListItem';
import Screen from '../components/Screen';
import BottomNav from '../components/BottomNav';


function ContactNumbersScreen ({
  getContactsAction,
  booksRT,
  loaded,
  seeMoreURL
}) {

    useEffect(
      () => {
        if (!loaded) {
          getContactsAction();
        }
      },
      [loaded],
    );

  const styles = useStylesheet(staticStyle)
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
    cells_consolidation } = booksRT;


    return (
    <Screen
      title="Contact us"
    >
        {
          (loaded)
           ? (
          <View style={styles.mainContainer}>
            <FlatList
              style={styles.flatList}
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
            <BottomNav
              seeMoreURL="https://www.kt.org/leadership/#staff"
            />
          </View>
          ) : (
          <View style={styles.activityContainer}>
            <ActivityIndicator size="large" color="#ffffff"/>
          </View>
          )
        }
    </Screen>
  );
}

ContactNumbersScreen.navigationOptions = {
  header: null,
};

const screenStyles = {
  mainContainer: {
    flex: 5,
    alignItems: 'center'
  },
  activityContainer: {
    flex: 1,
    padding: 20
  },
  flatList: {
    width:'100%'
  }

}

const staticStyle = [
  {
            query: { orientation: "landscape" },
            style: {
              mainContainer: {
                ...screenStyles.mainContainer,
              },
              activityContainer: {
                ...screenStyles.activityContainer,
              },
              flatList: {
                ...screenStyles.flatList,
              }
            }
  },
  {
            query: { orientation: "portrait" },
            style: {
              mainContainer: {
                ...screenStyles.mainContainer,
              },
              activityContainer: {
                ...screenStyles.activityContainer,
              },
              flatList: {
                ...screenStyles.flatList,
              }
            }
  }
];

export default connect(
  (state, ownProps) => ({
    loaded: state.contact.loaded,
    booksRT: state.contact.data,
  }),
  dispatch => ({
    getContactsAction: () => dispatch(getContacts())
  }),
)(ContactNumbersScreen)
