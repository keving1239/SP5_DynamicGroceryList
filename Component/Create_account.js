
import React, {useState} from "react";
import {Text,StyleSheet, View, TouchableOpacity, TextInput, ScrollView, Keyboard, Alert, Password} from 'react-native';
import * as Style from '../assets/styles';
import {styles} from './Notes';
import Axios from 'axios';


const Create_account = ({navigation, ...props}) => {
    const [setusername, setUsername] = useState("");
    const [setpassword, setPassword] = useState("");

async function db_create(){
    const create = await Axios.post("http://10.0.0.26/create_account" , {
        username: setusername,firstname:props.firstname, lastname:props.lastname, email:props.email, password: setpassword}).catch((err) => console.log(err));
    return create.data;   
}

async function createUser(){
    const created = await db_create();
    if (created == true){
        Alert.alert('Account has been created',
        'Press continue to start making notes ',
        [
            {
                text: 'Continue',
                onPress: () => {
                    navigation.navigate('Notes')
                }
            }
        ])
    }
    else{
        Alert.alert('Account has not been created',
        'Press press retry to create acount again',
        [
            {
                text: 'Continue',
                onPress: () => {
                    navigation.navigate('Create_account')
                }
            }
        ]) 
    }
}

return(
    <View>
            <View style = {styles.logo}>
                <Text style ={styles.logo_text}>Create Account</Text>
            </View>

        <View style = {styles.createContainer}>
            <TextInput placeholder = "First_name" placeholderTextColor={Style.color} style = {[styles.input, {borderWidth: 3 }]} 
                value = {props.firstname} onChangeText = {(text) => props.SetFirstname(text) } />

            <TextInput placeholder = "Last_name" placeholderTextColor={Style.color} style = {[styles.input, {borderWidth: 3, marginTop: 10 }]} 
                value = {props.lastname} onChangeText = {(text) => props.SetLastname(text) } />

            <TextInput placeholder = "Email" placeholderTextColor={Style.color} style = {[styles.input, {borderWidth: 3, marginTop: 10 }]} 
                value = {props.email} onChangeText = {(text) => props.setEmail(text) } />
                
            <TextInput placeholder = "Username" placeholderTextColor={Style.color} style = {[styles.input, {borderWidth: 3, marginTop: 10 }]} 
                value = {setusername} onChangeText = {(text) => setUsername(text) } />

            <TextInput placeholder = "Password" placeholderTextColor={Style.color} style = {[styles.input, {borderWidth: 3, marginTop: 10 }]} 
                value = {setpassword} onChangeText = {(text) => setPassword(text) } />
        
            <TouchableOpacity style  ={[styles.create_acc_Button, { marginTop: 10 }]} onPress = {() => createUser()}>
                <Text style = {styles.searchButtonText}>Create Account</Text>
            </TouchableOpacity>
        </View>
    </View>

)
}

export default Create_account;