import React, { useEffect, useState, useRef } from 'react'
import { View,Text, Button, TextInput, ScrollView, StyleSheet } from 'react-native'

export default function Hooks(props) {
    const inputRef = useRef(null);
    // let userName = "Babar Azam";
    const [userName, setUserName] = useState("Babar Azam");
    const [usersData, setUsersData] = useState([]);
    const [registerUser, setRegisterUser] = useState({
        name: "Shahzil Khan",
        userName: "shahzil.khan",
        email: "shazilkhan@gmail.com",
    })
    const [count, setCount] = useState(0);
    // const {title} = props;
    // const changeUserNameHandler = () => {
    //     userName = "Muhammad Rizwan";
    //     console.log(userName);
    // }
    const focusTextInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();  // Focus the TextInput programmatically
        }
    };

    const clearTextInput = () => {
        if (inputRef.current) {
            inputRef.current.clear();  // Clear the TextInput programmatically
        }
    };
    // console.log(inputRef.current);
    
    // const getUsersData =async()=>{
    //     try {
    //         const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    //         console.log(response.data);
    //       } catch (error) {
    //         console.error(error);
    //       }
    // }
    const getUsersData = async () => {
        try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
            });
          const data = await response.json();
        //   console.log(data);
          setUsersData(data);
        } catch (error) {
          console.error(error);
        }
      };
      const postUserData = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify(registerUser),
          });
      
          const data = await response.json();
          console.log(data); 
          setUsersData(data); 
        } catch (error) {
          console.error(error);
        }
      };
    useEffect(()=>{
        getUsersData();
        // console.log("useEffect called");
    },[userName])
    // console.log("usersData",usersData)
  return (
    <ScrollView>
        <View style={styles.container}>
      <Text style={{fontSize: 50}}>{props.title}</Text>
      <Text style={{fontSize: 30}}>{userName}</Text>
      <Button title="Update UserName" onPress={()=>setUserName("Muhammad Rizwan")}/>
      <Text style={{fontSize: 30}}>{count}</Text>
      <Button title="Increment" onPress={()=>setCount(count+5)}/>
      {/* <Button title="Update UserName" onPress={changeUserNameHandler}/> */}
      <TextInput
                ref={inputRef}  // Attach the ref to TextInput
                style={{ height: 50, borderColor: 'gray', borderWidth: 1, marginVertical: 20 }}
                placeholder="Enter some text"
            />
            <Button title="Focus the TextInput" onPress={focusTextInput} />
            <Button title="Clear the TextInput" onPress={clearTextInput} />
            <View style={styles.cardWrapper}>
                {
                    usersData.map((item, index) => 
                    <View key={index} style={styles.card}>
                        <Text>Name: {item.name}</Text>
                        <Text>UserName: {item.userName}</Text>
                        <Text>email: {item.email}</Text>
                        <Text>Address</Text>
                        <Text>Street: {item.address.street}</Text>
                        <Text>City: {item.address.city}</Text>
                        <Text>Zipcode: {item.address.zipcode}</Text>
                    </View>)
                }
                <View style={styles.card}>
                    <Text>Name: Shazil Khan</Text>
                    <Text>UserName: shazil.khan</Text>
                    <Text>email: shahzil@gmail.com</Text>
                    <Text>Address</Text>
                    <Text>Street: 34</Text>
                    <Text>City: Bahawalpur</Text>
                    <Text>Zipcode: 5634635</Text>
                </View>
            </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    cardWrapper:{
        flex:1,
        gap:10,
        marginTop: 10
    },
    card:{
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    }
})