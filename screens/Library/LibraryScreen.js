import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LibraryContainer from '../../components/LibraryContainer';
import Title from '../../components/Title';

class LibraryScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Title title="Your Library " />
        <LibraryContainer />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});
export default LibraryScreen;
