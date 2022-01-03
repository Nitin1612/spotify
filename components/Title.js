import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const Title = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
export default Title;
