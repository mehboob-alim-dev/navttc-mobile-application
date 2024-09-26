import React, { useEffect, useState, useRef } from 'react'
import { View,Text, Button, TextInput } from 'react-native'
export default function Hooks(props) {
    const inputRef = useRef(null);
    // let userName = "Babar Azam";
    const [userName, setUserName] = useState("Babar Azam");
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
    console.log(inputRef.current);
    
    useEffect(()=>{
        console.log("useEffect called");
    },[userName])
  return (
    <View>
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
    </View>
  )
}
