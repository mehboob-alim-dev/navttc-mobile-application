import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Flexbox = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Flexbox</Text>
    <View style={{backgroundColor:"#0000ff",     
        flex: 3, flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
        
        
        <View style={{backgroundColor:"#ff0000", height:   
        50, width: 50, alignSelf: "flex-end" }}><Text 
       style={{textAlign:"center",color:"#fff",}}>1</Text>
       </View>
       
       <View style={{backgroundColor:"#ffa500" , height: 
       50, width: 50 }}><Text   
       style={{textAlign:"center",color:"#fff",}}>2</Text>
      </View>
      
       <View style={{backgroundColor:"#3cb371" , height: 
       50, width: 50 }}><Text 
        style={{textAlign:"center",color:"#fff",}}>3</Text>
      </View>
      
</View>

   <View style={{backgroundColor:"#ee82ee",     
        flex: 1}}>
      <Text style={{textAlign:"center",color:"#fff",}}>2</Text>
    </View>
       <View style={{backgroundColor:"#6a5acd",     
        flex: 1}}>
      <Text style={{textAlign:"center",color:"#fff",}}>3</Text>
    </View>
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61dafb',
  },
  text: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    textColor: '#fff'
  },
});

export default Flexbox;