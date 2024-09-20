/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import { SafeAreaView,FlatList,Item, Switch, Image, View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';
// import {ListData} from "./src/constants/ListData"
const CustomButton = ({ title, onPress, className }) => {
  // Map className to corresponding style
  const buttonStyle = className === 'simpleBtn' ? styles.simpleBtn : styles.customBtn;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

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
  console.log("isEnabled",isEnabled)
  return(
  <SafeAreaView style={styles.container}>
    <View>
    <Image
        style={styles.logo}
        source={logo}
      />
      <Text style={styles.title}>
        The title and onPress handler are required. It is recommended to set
        accessibilityLabel to help make your app usable by everyone.
      </Text>
      <TextInput value={userName} placeholder="Enter Username" style={styles.input} onChangeText={(inputText)=>setUserName(inputText)}/>
      <TextInput value={className} placeholder="Enter ClassName" style={styles.input} onChangeText={onChangeHandler}/>
      <TextInput value={className} placeholder="Password" style={styles.input} onChangeText={onChangeHandler} secureTextEntry={true}/>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      {/* <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => DATA.id}
      /> */}
      <CustomButton title="Custom Button" onPress={() => console.log("Custom button clicked")} className="customBtn" />
      <CustomButton title="Simple Button" onPress={() => console.log("Simple button clicked")} className="simpleBtn" />
      <TouchableOpacity style={styles.button} onPress={()=>console.log("button")}>
        <Text>Press Here</Text>
      </TouchableOpacity>
      <Button title="Click me" onPress={()=>console.log("function called")}/>
    </View>
  </SafeAreaView>
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
