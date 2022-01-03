
import { bindActionCreators } from 'redux';
import * as songActions from '../redux/actions/songs';
import { connect } from 'react-redux';


import React, { useEffect } from 'react';
import TrackPlayer from 'react-native-track-player';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
//let { action, song } = this.props;

const tracks = [
  {
    id: 1,
    url: require('../tracks/Adiye-MassTamilan.fm.mp3'),
    title: 'Adiye (From "Bachelor")',
  },

];

TrackPlayer.updateOptions({
  stopWithApp: false,
  capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
  compactCapabilities: [
    TrackPlayer.CAPABILITY_PLAY,
    TrackPlayer.CAPABILITY_PAUSE,
  ],
});
const SquareContainer = (props) => {
  const setUpTrackPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add(tracks);
      console.log('Tracks added');
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setUpTrackPlayer();

    return () => TrackPlayer.destroy();
  }, []);

  return (
    <View style={styles.container}>
      <View >

        <TouchableOpacity onPress={() => TrackPlayer.play()}>
          <Image style={styles.img} source={props.img} />
          <Text style={styles.title}>{props.name}</Text>

        </TouchableOpacity>
      </View>

      {/* <View style={styles.row}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => TrackPlayer.skipToPrevious()}>
          <Text style={styles.text}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => TrackPlayer.skipToNext()}>
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,

  },
  btn: {
    backgroundColor: '#ff0044',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    width: 160,
  },
  text: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  title: {
    color: '#fff',
    marginTop: 10,
    fontSize:17
  },
});

export default SquareContainer;




// class SquareContainer extends Component {
// render() {
// let {action, song} = this.props;
// return (
// <TouchableOpacity
// onPress={() => action.playSong(song)}
// activeOpacity={0.8}
// style={styles.container}>
// <Image style={styles.img} source={this.props.img} />
// <Text style={styles.title}>{this.props.name}</Text>
// </TouchableOpacity>
// );
// }
// }
// const styles = StyleSheet.create({
// container: {
// justifyContent: 'center',
// alignItems: 'center',
// margin: 15,
// },
// img: {
// width: 150,
// height: 150,
// borderRadius: 10,
// },
// title: {
// color: '#fff',
// fontWeight: 'bold',
// marginTop: 10,
// },
// });

// function mapDispatchToProps(dispatch) {
// return {
// action: {
// playSong: bindActionCreators(songActions.playSong, dispatch),
// },
// };
// }

// export default connect(null, mapDispatchToProps)(SquareContainer);

