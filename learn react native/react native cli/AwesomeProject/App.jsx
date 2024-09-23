/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import { SafeAreaView,ScrollView,FlatList,SectionList,Item, Switch, Image, View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';
import {ListData} from "./src/constants/ListData"
const CustomButton = ({ title, onPress, className }) => {
  // Map className to corresponding style
  const buttonStyle = className === 'simpleBtn' ? styles.simpleBtn : styles.customBtn;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];
const ListItem = ({title,index}) => (
  <View style={styles.item} key={index}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const App = () => {
  const [userName, setUserName] = useState("Babar Azam");
  const [className, setClassName] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const [task, setTask] = useState({ id: '', title: '' });
  const [myTasks, setMyTasks] = useState([]);

  const toggleSwitch = () => setIsEnabled(!isEnabled);
  function onChangeHandler(xyz){
    setClassName(xyz);
  }
console.log("myTasks",myTasks)
  // import images
  const logo = require('./src/assets/images/logo.png');
  // console.log("isEnabled",isEnabled)
  const handleAddTask = () => {
    if (task.id && task.title) {
      setMyTasks([...myTasks, task]); // Add the new task to the list
      setTask({ id: '', title: '' }); // Clear input fields after adding
    }
  };
  return(
  <SafeAreaView style={styles.container}>
    <View>
    <Image
        style={styles.logo}
        source={logo}
      />
      {/* <Text style={styles.title}>
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
      /> */}
      <TextInput
        value={task.id}
        placeholder="Add Task Id"
        style={styles.input}
        onChangeText={(inputText) => setTask({ ...task, id: inputText })}
      />
      <TextInput
        value={task.title}
        placeholder="Add Task"
        style={styles.input}
        onChangeText={(inputText) => setTask({ ...task, title: inputText })}
      />
      <Button title="Add" onPress={handleAddTask} />
       <FlatList
        data={myTasks}
        renderItem={({item,index}) => <ListItem title={item.title} key={index}/>}
        keyExtractor={item => item.id}
      />
      <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
      {/* <CustomButton title="Custom Button" onPress={() => console.log("Custom button clicked")} className="customBtn" />
      <CustomButton title="Simple Button" onPress={() => console.log("Simple button clicked")} className="simpleBtn" />
      <TouchableOpacity style={styles.button} onPress={()=>console.log("button")}>
        <Text>Press Here</Text>
      </TouchableOpacity>
      <Button title="Click me" onPress={()=>console.log("function called")}/> */}
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
