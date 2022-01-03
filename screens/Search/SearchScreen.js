import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchContainer from '../../components/SearchContainer';
import Title from '../../components/Title';

class SearchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Title title="Search" />
        <SearchContainer />
        
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
export default SearchScreen;
