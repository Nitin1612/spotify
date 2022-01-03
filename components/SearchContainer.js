import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, _ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Title from '../components/Title';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

class SearchContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Artist,songs,or podcasts"
          // inputStyle={{backgroundColor: '#212121'}}
          containerStyle={{backgroundColor: '#121212', borderWidth: 0, borderRadius: 1, shadowColor:'white',borderBottomColor:'transparent', borderTopColor:'transparent'}}
          placeholderTextColor={'#fff'}
          
        />
        <ScrollView>
          <Text style={styles.title}>Your top genres</Text>

          <View style={styles.row}>
            <View style={styles.column}>
              <TouchableOpacity style={[styles.btn1, { backgroundColor:"#778899"}]}>
                <Text style={styles.profile}>Pop</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn1, { backgroundColor:"#212121"}]}>
                <Text style={styles.profile}>Kollywood</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.column}>
              <TouchableOpacity style={[styles.btn1, { backgroundColor:"#daa520"}]}>
                <Text style={styles.profile}>Hip Hop</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn1, { backgroundColor:"#c71585"}]}>
                <Text style={styles.profile}>Dance/Electonics</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.title}>Browse All</Text>

          <View style={styles.row}>
            <View style={styles.column}>
              <TouchableOpacity style={[styles.btn1, { backgroundColor:"#dc143c"}]}>
                <Text style={styles.profile}>Podcasts</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn1, { backgroundColor:"#00008b"}]}>
                <Text style={styles.profile}>New Releases</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn1, { backgroundColor:"#bdb76b"}]}>
                <Text style={styles.profile}>Charts</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn1, { backgroundColor:"#008b8b"}]}>
                <Text style={styles.profile}>Made for you</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn1, { backgroundColor:"#778899"}]}>
                <Text style={styles.profile}>Songwriters</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn1, { backgroundColor:"#212121"}]}>
                <Text style={styles.profile}>Ambient</Text>
              </TouchableOpacity>            
          </View>

            <View style={styles.column}>
              <TouchableOpacity style={[styles.btn1, { backgroundColor:"#a52a2a"}]}>
                <Text style={styles.profile}>Concerts</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn1, { backgroundColor:"#ff00ff"}]}>
                <Text style={styles.profile}>At Home</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn1, { backgroundColor:"#7b68ee"}]}>
                <Text style={styles.profile}>Tamil</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn1, { backgroundColor:"#b22222"}]}>
                <Text style={styles.profile}>Indie</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn1, { backgroundColor:"#daa520"}]}>
                <Text style={styles.profile}>TV& Movies</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn1, { backgroundColor:"#c71585"}]}>
                <Text style={styles.profile}>Music+Talk</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
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
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  btn1: {
    padding: 13,
    borderRadius: 5,
    margin: 5,
    width: 180,
    height: 100,
    flexDirection: 'row',
  },
  
  row: {
    flexDirection: 'row',
    marginBottom: 20,
    margin: 7
  },
  column: {
    flexDirection: 'column',
  },
  title: {
    padding: 15,
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default SearchContainer;
