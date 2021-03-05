import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Dimensions} from 'react-native';

//constant
import Color from '../../constant/index';

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;

export default({ onPress, text, size, theme}) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if(size === 'double') {
    buttonStyles.push(styles.buttonSecondary);    
  }

  if(theme === 'secondary') {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === 'accent') {
    buttonStyles.push(styles.buttonAccent);
  }

  return(
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Color.text,
    fontSize: 25,
  },
  textSecondary: {
    color: Color.textSecondary,
  },
  button: {
    backgroundColor: Color.buttonColor,
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  buttonDouble: {
    width: screen.width / 2 - 20,
    flex: 0,
    alignItems: 'flex-start',
    paddingLeft: 40 
  },
  buttonSecondary: {
    backgroundColor: Color.buttonSecondary,
  },
  buttonAccent: {
    backgroundColor: Color.buttonAccent,
  },  
});