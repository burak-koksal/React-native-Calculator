import React from 'react';
import { View, StyleSheet } from 'react-native';

//logo
import SplashLogo from '../../components/Logo';

//constant
import Colors from '../../constant/index';

const Splash = (props) => {
  setTimeout(() => {
    props.navigation.replace('Calc');
  }, 1500);

  return(
    <View styles={styles.container}>
      <SplashLogo />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.text
  }
});
export default Splash;