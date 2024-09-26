/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import { SafeAreaView,ScrollView,FlatList,SectionList,Item, Switch, Image, View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';
import List from './src/components/List';
import { CustomButton } from './src/components/CustomBtn';
import Counter from './src/components/Counter';
import TextTicker from 'react-native-text-ticker';
import Hooks from './src/components/Hooks';
const App = () => {
  const [userName, setUserName] = useState("Babar Azam");
  const [className, setClassName] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
 

  const toggleSwitch = () => setIsEnabled(!isEnabled);
  function onChangeHandler(xyz){
    setClassName(xyz);
  }
  // import images
  const logo = require('./src/assets/images/logo.png');
  // console.log("isEnabled",isEnabled)
 
  return(
    <>
      <Hooks title="Hooks"/>
    </>
);

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // Example text color
    fontSize: 16,
  },
  input:{
    borderWidth: 1,
    borderColor: "#000",
    padding: 12,
    marginBottom: 20,
  },
   button: {
    backgroundColor: '#345356', // Blue button
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  customBtn: {
    backgroundColor: '#007BFF', // Blue button
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  simpleBtn: {
    backgroundColor: '#000', // Green button
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default App;
