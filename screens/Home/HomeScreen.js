import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import CircleContainer from '../../components/CircleContainer';
import SquareContainer from '../../components/SquareContainer';
import PlayerContainer from '../../components/PlayerContainer';
import Title from '../../components/Title';
import * as Songs from '../../data/songs';
import * as Artists from '../../data/artists';
import * as Drug from "../../data/drug";
import * as Fav from "../../data/fav"
import { connect } from 'react-redux';
import TrackPlayer from 'react-native-track-player';

class HomeScreen extends Component {
  renderItem = (item) => {
    return (
      <SquareContainer
        song={item.item}
        name={item.item.name}
        img={item.item.img}
      />
    );
  };

  renderItem2 = (item) => {
    return <CircleContainer name={item.item.name} img={item.item.img} />;
  };

  render() {
    return (
      <View style={styles.container}>
        <View >
          <TouchableOpacity style={{ flexDirection: 'row' }}
            onPress={() => TrackPlayer.pause()}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/2111/2111624.png',
              }}
            />
            <Text style={styles.input}> Spotify</Text>


          </TouchableOpacity>

        </View>

        <ScrollView>
          <View style={styles.row}>
            <View style={styles.column}>
              <TouchableOpacity style={styles.btn}>
                <Image style={styles.img} source={require('../../assets/img/songs/likedsongs.jpeg')} />
                <Text style={styles.title}>Liked Songs</Text>

              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Image style={styles.img} source={require('../../assets/img/songs/latestTamil.jpeg')} />
                <Text style={styles.title}>Latest Tamil</Text>

              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => TrackPlayer.play()}>
                <Image style={styles.img} source={require('../../assets/img/songs/motivational.jpeg')} />
                <Text style={styles.title}>Motivational{"\n"}Album</Text>

              </TouchableOpacity>

            </View>

            <View style={styles.column}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => TrackPlayer.play()}>
                <Image style={styles.img} source={require('../../assets/img/songs/KollywoodCream.jpeg')} />
                <Text style={styles.title}>Kollywood{"\n"}Cream</Text>

              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => TrackPlayer.play()}>
                <Image style={styles.img} source={require('../../assets/img/songs/loveStory.jpeg')} />
                <Text style={styles.title}>Love Story</Text>

              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => TrackPlayer.play()}>
                <Image style={styles.img} source={require('../../assets/img/songs/ThisIsAnirudh.jpeg')} />
                <Text style={styles.title}>This is{"\n"}Anirudh Ravi..</Text>

              </TouchableOpacity>

            </View>
          </View>
          <View style={{ flexDirection: 'row'}}>
            <Image style={styles.img1} source={require('../../assets/img/songs/kollyAni.jpeg')} />
            <Text style={styles.title1}>Listen to the best of{"\n"}Kollywood, songs from{"\n"}Don & more!</Text>

          </View>
          <Text style={{fontSize:10}}>{"\n"}</Text>

          <Title title="Latest Tamil" />
          <FlatList
            data={Songs.songs}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(item) => this.renderItem(item)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <Text style={{fontSize:10}}>{"\n"}</Text>

          <Title title="Your Artists" />
          <FlatList
            data={Artists.artists}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(item) => this.renderItem2(item)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <Text style={{fontSize:10}}>{"\n"}</Text>

          <Title title="Yuvan's Magic" />
          <FlatList
            data={Drug.drug}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(item) => this.renderItem(item)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <Text style={{fontSize:10}}>{"\n"}</Text>

          <Title title="Recommended for You" />
          <FlatList
            data={Fav.fav}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(item) => this.renderItem(item)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </ScrollView>
        <PlayerContainer />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#121212',
  },

  input: {
    color: '#556b2f',
    fontSize: 35,
    fontWeight: 'bold',
  },

  tinyLogo: {
    width: 43,
    height: 43,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
    margin:7
  },
  column: {
    flexDirection: 'column',
  },
  btn: {
    backgroundColor: '#212121',
    padding: 10,
    borderRadius: 0,
    margin: 3,
    width: 185,
    flexDirection: 'row',
  },
  text: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  img: {
    width: 50,
    height: 50,
  },
  img1: {
    margin: 10,
    width: 170,
    height: 170
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17.5,
    left: 16,
  },
  title1: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 19.5,
    top: 75
  },

});

function mapStateToProps(state) {
  return {
    playSong: state.playSongReducer,
  };
}

export default connect(mapStateToProps)(HomeScreen);
