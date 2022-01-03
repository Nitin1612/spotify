import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Image,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TrackPlayer, {
  usePlaybackState,
  useTrackPlayerEvents,
  Event,
} from 'react-native-track-player';

export default function Controller({ onNext, onPrv }) {
  const playbackState = usePlaybackState();
  const isPlaying = useRef('paused'); //paused play loading

  useEffect(() => {
    console.log('Player State', playbackState);
    //set the player state
    if (playbackState === 'playing' || playbackState === 3) {
      isPlaying.current = 'playing';
    } else if (playbackState === 'paused' || playbackState === 2) {
      isPlaying.current = 'paused';
    } else {
      isPlaying.current = 'loading';
    }
  }, [playbackState]);

  const returnPlayBtn = () => {
    switch (isPlaying.current) {
      case 'playing':
        return <Icon color="#fff" name="play-arrow" size={25} />;
      case 'paused':
        return <Icon color="#fff" name="pause" size={25} />;
      default:
        return <Icon color="#fff" name="play-arrow" size={25} />;
    }
  };

  const onPlayPause = () => {
    if (isPlaying.current === 'playing') {
      TrackPlayer.pause();
    } else if (isPlaying.current === 'paused') {
      TrackPlayer.play();
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/img/songs/song4.jpeg')} />
      <Text style={styles.title}>Adiye-From"Bachelor"</Text>
      <TouchableOpacity style={styles.buttonContainer3} onPress={onPlayPause}>
        {returnPlayBtn()}
      </TouchableOpacity>
    </View>
    //       <View style={styles.container}>
    //         <Image style={styles.img} source={require('../assets/img/songs/song4.jpeg')} />
    //         <Text style={styles.title}>Adiye-From"Bachelor"</Text>

    //         <TouchableOpacity style={styles.buttonContainer2} onPress={() => TrackPlayer.play()}>
    //           <Icon name="pause" color="#fff" size={25} />
    //         </TouchableOpacity>
    //         <TouchableOpacity style={styles.buttonContainer3} onPress={() => TrackPlayer.pause()}>
    //           <Icon name="play" color="#fff" size={25} />
    //         </TouchableOpacity>
    //       </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212121',
    height: 60,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 60,
    height: '100%',
  },
  title: {
    marginLeft: 15,
    color: '#fff',
    fontWeight: '500',
    fontSize: 20,
  },

  buttonContainer2: {
    position: 'absolute',
    right: 30,
  },
  buttonContainer3: {
    position: 'absolute',
    right: 10,
  },
});
