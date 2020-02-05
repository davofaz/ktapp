import * as WebBrowser from 'expo-web-browser';
import React, { useEffect } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useStylesheet} from 'react-native-responsive-ui';
import { connect } from 'react-redux';
import { getSermons } from '../actions/sermonArchives';
import VideoItem  from '../components/VideoItem';
import Screen from '../components/Screen';
import BottomNav from '../components/BottomNav';


function SermonArchiveScreen ({
  getSermonsAction,
  booksRT,
  loaded,
  seeMoreURL
}) {

  useEffect(
    () => {
      if (!loaded) {
        getSermonsAction();
      }
    },
    [loaded],
  );

  const styles = useStylesheet(staticStyle)

  return (
    <Screen
      title="Latest Sermons"
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
                    <VideoItem
                      item = {item}
                    />
                  )
                }}
                keyExtractor={(item, index) => index.toString()}
              />
              <BottomNav
                seeMoreURL="https://www.kt.org/sermons/"
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

SermonArchiveScreen.navigationOptions = {
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
    loaded: state.sermon.loaded,
    booksRT: state.sermon.data,
  }),
  dispatch => ({
    getSermonsAction: () => dispatch(getSermons()),
  }),
)(SermonArchiveScreen)
