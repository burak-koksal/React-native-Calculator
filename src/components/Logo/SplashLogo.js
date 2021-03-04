import React from 'react';
import {StyleSheet, SafeAreaView, Text, useColorScheme} from 'react-native';

//lottie
import LottieView from 'lottie-react-native';

//constant
import Colors from '../../constant/index';

const SplashGif = require('../../assets/animated/calc-splash.json');

const SplashLogo = () => {
  return(
    <SafeAreaView style={styles.safeAreaView}>
      <LottieView style={styles.lottieView} source={SplashGif} autoPlay loop />    
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  safeAreaView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  lottieView: {
    width: '100%', 
    height: '100%'
  },
});
export default SplashLogo;