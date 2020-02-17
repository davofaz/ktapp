import * as WebBrowser from 'expo-web-browser';
import React, { useEffect } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { getMags } from '../actions/rTs';
import  BookItem  from '../components/BookItem';
import Screen from '../components/Screen';
import BottomNav from '../components/BottomNav';


function RevivalTimesScreen ({
  getMagsAction,
  booksRT,
  loaded,
  seeMoreURL
}) {

  useEffect(
    () => {
      if (!loaded) {
        getMagsAction();
      }
    },
    [loaded]
  );


  return (
    <Screen
      title="Revival Times"
    >
        {
          (loaded)
           ? (
          <View style={styles.mainContainer}>
            <FlatList
              style={styles.flatList}
              data={booksRT}
              renderItem={({ item }) => {
                return (
                  <BookItem
                    item = {item}
                  />
                )
              }}
              keyExtractor={(item, index) => index.toString()}
            />
            <BottomNav
              seeMoreURL="https://www.kt.org/revivaltimes/"
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

RevivalTimesScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center'
  },
  activityContainer: {
    flex: 1,
    padding: 20
  },
  flatList: {
    width:'100%'
  }
});

export default connect(
  (state, ownProps) => ({
    loaded: state.mag.loaded,
    booksRT: state.mag.data,
  }),
  dispatch => ({
    getMagsAction: () => dispatch(getMags()),
  }),
)(RevivalTimesScreen)
