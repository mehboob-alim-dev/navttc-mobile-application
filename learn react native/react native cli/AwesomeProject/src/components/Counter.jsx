import React, {useState} from 'react'
import { View, Text,Button, TouchableOpacity } from 'react-native'
export default function Counter() {
    // let count = 0;
    // function counterHandler(){
    //     count+1;
    //     console.log(count);
    // }
    const [count, setCount] = useState(0);
    function counterHandler(){
            console.log("called")
            setCount(count+1)
        }
  return (
    <View>
      <Text>Counter App</Text>
      <Text>{count}</Text>
      <Button title='Add' onPress={counterHandler}/>
      <Text>{count}</Text>
      {/* <Button title='Minus' onPress={counterHandler}/> */}
      {/* <TouchableOpacity onPress={()=>setCount(count+1)}><Text>Add</Text></TouchableOpacity> */}
    </View>
  )
}
