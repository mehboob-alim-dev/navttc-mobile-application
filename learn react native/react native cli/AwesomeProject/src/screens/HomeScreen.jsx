import { SafeAreaView, Image, View, StyleSheet } from 'react-native';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
        <View>
        {/* <TextTicker
              style={{ fontSize: 24 }}
              duration={3000}
              loop
              bounce
              repeatSpacer={50}
              marqueeDelay={1000}
            >
              Super long piece of text is ljvvjvjvjhvjhvhvjhvjvjhkvjvjvjhvjhvjhkvjkifghiiiong. The quick brown fox jumps over the lazy dog.
            </TextTicker> */}
  
        <Image
            style={styles.logo}
            source={logo}
          />
          {/* <List/> */}
          <Counter/>
          {/* <CustomButton title="Add" className={{style:"textColor:'#4523435'"}} onPress={()=>console.log("called")}/>
          <CustomButton title="Click me" className={{style:"textColor:'#4523435'"}} onPress={()=>console.log("another function called")}/> */}
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