import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


class LibraryContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.profile}>Hi Nitin !</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  profile: {
    color: '#dc143c',
    fontSize: 25,
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
  },
});

export default LibraryContainer;
