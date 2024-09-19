/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';

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

  function onChangeHandler(xyz){
    setClassName(xyz);
  }
  return(
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        The title and onPress handler are required. It is recommended to set
        accessibilityLabel to help make your app usable by everyone.
      </Text>
      <TextInput value={userName} placeholder="Enter Username" style={styles.input} onChangeText={(inputText)=>setUserName(inputText)}/>
      <TextInput value={className} placeholder="Enter ClassName" style={styles.input} onChangeText={onChangeHandler}/>
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
