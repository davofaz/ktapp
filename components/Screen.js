import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import Logo from './Logo';

export default function Screen({
  title,
  children
}) {

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/background-image.jpg')} style={styles.backgroundImage}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
            <Logo
              title={title}
            />
            {children}
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

Screen.navigationOptions = {
  header: null,

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(137, 167, 165, 0.8)',
  },
  contentContainer: {
    paddingTop: 50,
    flex: 1,
    height: '100%'
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  }
});

Screen.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]).isRequired
};
