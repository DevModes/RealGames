import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import * as Animateable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
const Splash = () => {
  const navigation = useNavigation();
  const animation = {
    0: {
      transform: [{rotate: '360deg'}],
      height: 25,
      width: 25,
    },
    0.2: {
      transform: [{rotate: '280deg'}],
      height: 40,
      width: 40,
    },
    0.4: {
      transform: [{rotate: '200deg'}],
      height: 60,
      width: 60,
    },
    0.6: {
      transform: [{rotate: '130deg'}],
      height: 75,
      width: 75,
    },
    0.8: {
      transform: [{rotate: '60deg'}],
      height: 95,
      width: 95,
    },
    1: {
      transform: [{rotate: '0deg'}],
      height: 140,
      width: 140,
    },
  };
  return (
    <LinearGradient colors={['#232526', '#414345']} style={styles.Container}>
      <Animateable.Image
        animation={animation}
        // easing={'ease-in-circ'}
        onAnimationEnd={() =>
          setTimeout(() => {
            navigation.navigate('Login');
          }, 2000)
        }
        duration={2000}
        delay={500}
        source={require('../../assets/Logo/mark.png')}
        style={{height: 100, width: 100, tintColor: '#d4d3dd'}}
      />
      <Animateable.Image
        animation={'fadeInDown'}
        duration={2000}
        delay={1500}
        source={require('../../assets/Logo/name.png')}
        style={{height: 70, width: 220, tintColor: '#d4d3dd'}}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Splash;
