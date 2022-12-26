import React, { useState } from 'react';

import { View, SafeAreaView, ScrollView, TextInput, Text, Image,Dimensions,StyleSheet,TouchableOpacity } from "react-native"

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height
const Login= ({navigation}) => {
    const [Phone, setPhone] = useState("")

  return (
    <SafeAreaView>
<View style={{flex:1,minHeight: height,backgroundColor:"white"}}>
        <View  style={styles?.views}>
        <Image source={require("../assets/logo.png")} style={{
                            width: width / 1.6,
                            height: 100,
                            resizeMode: "contain"
                        }} />
        </View>

<View>
<Text style={{color:"#0016BB",fontWeight:"700",fontSize:22,textAlign:"center",marginBottom:20,marginTop:20}}>Let’s Login to Continue</Text>
</View>

        <View style={styles?.views}>
            <Text style={styles?.text}>PHONE NUMBER</Text>
            <TextInput placeholder='Enter Phone Number' keyboardType='numeric'  placeholderTextColor={"gray"} value={Phone} onChangeText={(text) => setPhone(text)} style={styles?.input}/>
        </View>

<View>
    <Text style={{color:"#87959F",fontWeight:"500",fontSize:14,textAlign:"center",marginBottom:20,marginTop:30}}>You’ll recieve a 4 digit code to verify next. </Text>
</View>

<View style={styles?.views}>
<TouchableOpacity disabled={Phone === "" || Phone.length < 11  ?  true :false}  style={Phone === "" || Phone.length < 11  ?  styles.disablebutton :styles.button}><Text style={{color:"white",fontSize:20}}> Continue </Text></TouchableOpacity>
</View>

<View>
    <Text onPress={()=>navigation.navigate("SignUp")}  style={{color:"#1D1F20",fontWeight:"500",fontSize:14,textAlign:"center",marginBottom:20,marginTop:30}}>
    Don’t you have an account? <Text style={{color:"#0D28F4"}}> Press here.</Text>
    </Text>
</View>


        </View>
</SafeAreaView>
  )
}

export default Login


const styles = StyleSheet.create({

    views:{
        width,
        flex:0,
        alignItems:"center",
        justifyContent:"center"
    },
    input:{
        backgroundColor: "#FFFFFF",
        borderRadius:10,
        elevation:3,
        width:width/1.2,
        fontSize:16,
        padding:15,
        fontWeight:"500",
        fontStyle:"normal",
        color:"black"
    },
    text:{
        color:"black",
        borderRadius:10,
      width:width/1.16,
        fontSize:14,
        padding:10,
        fontWeight:"500",
        fontStyle:"normal",
    },
    button:{
        backgroundColor: "#0D28F4",
        borderRadius:20,
        elevation:10,
        width:width/1.2,
        padding:16,
    alignItems:"center",
    justifyContent:"center",
    marginTop:0,
    }   ,
    disablebutton:{
        backgroundColor: "#B7BCC0",
        borderRadius:20,
        elevation:10,
        width:width/1.2,
        padding:16,
    alignItems:"center",
    justifyContent:"center",
    marginTop:0,
    }
    
    })