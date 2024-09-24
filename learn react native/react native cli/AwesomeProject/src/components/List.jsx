import React, { useState } from 'react'
import { Button, FlatList, SectionList, StyleSheet, Text, TextInput, View } from 'react-native';
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
export default function List() {
    const [task, setTask] = useState({ id: '', title: '' });
    const [myTasks, setMyTasks] = useState([]);
    const handleAddTask = () => {
        if (task.id && task.title) {
          setMyTasks([...myTasks, task]); // Add the new task to the list
          setTask({ id: '', title: '' }); // Clear input fields after adding
        }
      };
  return (
    <View>
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
    </View>
  )
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