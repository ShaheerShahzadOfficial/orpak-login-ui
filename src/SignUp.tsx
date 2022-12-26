import React, { useState } from 'react';

import { View, SafeAreaView, ScrollView, TextInput, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign"
const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height
const SignUp = ({navigation}) => {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const [LastName, setLastName] = useState("")




    
    return (
        <SafeAreaView>
            <ScrollView style={{backgroundColor:"white"}}>
                <TouchableOpacity onPress={()=>navigation?.goBack()} style={{ width, backgroundColor: "white", marginTop: 20,marginBottom: 0,marginLeft:20 }}>
                    <Image  source={require("../assets/BackArrowLessThanSign.png")} style={{
                        width: 24,
                        height: 24,
                        resizeMode: "contain"
                    }} />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "white", minHeight: height / 1.4, marginTop: 0, marginBottom: 30 }}>
                    <View style={styles?.views}>
                        <Image source={require("../assets/logo.png")} style={{
                            width: width / 1.6,
                            height: 70,
                            resizeMode: "contain"
                        }} />
                    </View>

                    <View>
                        <Text style={{color:"#0016BB",fontWeight:"700",fontSize:22,textAlign:"center",marginBottom:20,marginTop:20}}> Sign up</Text>
                    </View>

                    <View style={styles?.views}>
                        <Text style={styles?.text}>FIRST NAME</Text>
                        <TextInput placeholder='Enter First Name' placeholderTextColor={"gray"} value={Name} onChangeText={(text) => setName(text)} style={styles?.input} />
                    </View>

                    <View style={styles?.views}>
                        <Text style={styles?.text}>LAST NAME</Text>
                        <TextInput placeholder='Enter Last Name' placeholderTextColor={"gray"} value={LastName} onChangeText={(text) => setLastName(text)} style={styles?.input} />
                    </View>

                    <View style={styles?.views}>
                        <Text style={styles?.text}>EMAIL</Text>
                        <TextInput placeholder='Enter Email' placeholderTextColor={"gray"} value={Email} onChangeText={(text) => setEmail(text)} style={styles?.input} />
                    </View>

                    <View style={styles?.views}>
                        <Text style={styles?.text}>PHONE NUMBER</Text>
                        <TextInput placeholder='Enter Phone Number' keyboardType='number-pad' placeholderTextColor={"gray"} value={Phone} onChangeText={(text) => setPhone(text)} style={styles?.input} />
                    </View>

                    <View style={styles?.views}>
                        <TouchableOpacity style={styles.button}><Text style={{ color: "white", fontSize: 20 }}> Continue </Text></TouchableOpacity>
                    </View>



                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default SignUp

const styles = StyleSheet.create({
    views: {
        width,
        flex: 0,
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        elevation: 10,
        width: width / 1.2,
        fontSize: 16,
        padding:15,
        fontWeight: "500",
        fontStyle: "normal",
        color: "black"
    },
    text: {
        color:"black",
        borderRadius:10,
      width:width/1.16,
        fontSize:14,
        padding:10,
        fontWeight:"500",
        fontStyle:"normal",
    },
    button: {
        backgroundColor: "#0D28F4",
        borderRadius:20,
        elevation:10,
        width:width/1.2,
        padding:16,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    }

})