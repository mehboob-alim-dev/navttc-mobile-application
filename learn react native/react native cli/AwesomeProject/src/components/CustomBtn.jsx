import React from 'react'
import {Text, TouchableOpacity} from 'react-native';
export const CustomButton = ({ title, onPress, className }) => {
    // Map className to corresponding style
    // const buttonStyle = className === 'simpleBtn' ? styles.simpleBtn : styles.customBtn;
    return (
      <TouchableOpacity style={className} onPress={onPress}>
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  };