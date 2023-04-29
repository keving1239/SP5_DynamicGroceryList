import React, {useState} from "react";
import {Text,StyleSheet, View, TouchableOpacity,KeyboardAvoidingView, TextInput, ScrollView, Keyboard, Alert, Password, ImageBackground} from 'react-native';
import * as Style from '../assets/styles';
import {styles} from './Notes';
import Axios from 'axios';
import useWebSocket from 'react-use-websocket';



const Login = ({navigation, ...props}) => {
    const [setusername, setUsername] = useState("");
    const [setpassword, setPassword] = useState("");
    const [user, setUser] =useState([]);
    const [db_notes, setdb_notes] = useState([]);
    const [db_sharenotes, setdb_sharenotes] = useState([]);

    /*const WS_URL = 'ws://10.0.0.26:8000';

    useWebSocket(WS_URL, {
        onOpen: () => {
        console.log('WebSocket connection established.');
        }
    })    */

   async function getUser(){
        const call = await Axios.post("http://10.0.0.26/get" , {username: setusername, password: setpassword}).catch((err) => console.log(err));
        setUser(call.data);
        return  call.data;
    }

    async function getNotes(){
       const call_notes = await Axios.post("http://10.0.0.26/grab_notes" , {user_id:props.userID}).catch((err) => console.log(err));
       setdb_notes(call_notes.data);
       return call_notes.data;
    }


    async function getShared_Notes(){
        const call_shared_notes = await Axios.post("http://10.0.0.26/grab_shared_notes" , {user_id:props.userID}).catch((err) => console.log(err));
        setdb_sharenotes(call_shared_notes.data);
        return call_shared_notes.data;
     }

    async function searchUser (){
    let user1 = await getUser();
        if(user1[0] == null){
            Alert.alert('The username or password is incorrect',
            'Try again or create account',
            [
                {
                    text: 'Retry',
                    onPress: () => {
                        navigation.navigate('Login')
                    }
                },
                {
                    text: 'Create',
                    onPress: () => {
                        navigation.navigate('Create_account')
                    }
                
                }
            ])
        }
        else{
            var current = user1[0];
            var current2 = Object.values(current);
            props.SetFirstname(current2[1]);
            props.SetLastname(current2[2]);
            props.userID = (current2[0]);
            Alert.alert("Welcome Back",
                'Press Next to Navigate to notes',    
            [
                    {
                        text: 'Next',
                        onPress: async () =>{
                                const db_note_call = await getNotes();
                                const db_share = await getShared_Notes();
                                if(db_note_call[0] == null){
                                    navigation.navigate('Notes') 
                                }
                                else{
                                    let note_id_array = [];
                                    let note_array = [];
                                    let note_title_array = [];
                                    //let note_array_owner = note_creator(db_note_call[1]);
                                    for(var i = 0; i  < db_note_call.length; i++){
                                        var temp = db_note_call[i]; 
                                        var temp_note = Object.values(temp);
                                        var num = temp_note[0];
                                        note_id_array = [num, ...note_id_array];
                                        var text = temp_note[2];
                                        note_array = [text, ...note_array];
                                        var title = temp_note[5];
                                        note_title_array = [title, ...note_title_array];
                                    }
                                    let temp_array =[]
                                    for(var x =0; x < note_array.length; x++){
                                        temp_array[x] = [note_array[x], note_id_array[x], note_title_array[x]];
                                      }
                                    props.setNotes(temp_array);
                                    props.SetuserID(current2[0]); 
                                }
                                if(db_share[0] == null){
                                        navigation.navigate('Notes') 
                                    }
                                else{
                                    let  note_id_array2 = [];
                                    let note_array2 = [];
                                    let note_title_array2 = [];
                                    //let note_array_owner = note_creator(db_share[1]);
                                      for(var i = 0; i  < db_share.length; i++){
                                        var temp = db_share[i]; 
                                        var temp_note = Object.values(temp);
                                        var num = temp_note[0];
                                        note_id_array2 = [num, ...note_id_array2];
                                        var text = temp_note[2];
                                        note_array2 = [text, ...note_array2];
                                        var title = temp_note[5];
                                        note_title_array2 = [title, ...note_title_array2];
                                    }
                                    let temp_array2 =[]
                                    for(var x =0; x < note_array2.length; x++){
                                        temp_array2[x] = [note_array2[x], note_id_array2[x], note_title_array2[x]];
                                      }
                                    console.log(temp_array2);
                                    props.SetShared_Notes(temp_array2);
                                    navigation.navigate("Notes");
                                }
                            }
                         
                    }
            ]);
        }

    }

    return(
        <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',}} behavior="padding" enabled   keyboardVerticalOffset={20}>
        <View style = {[styles.mainBackground]}>
                <View style = {styles.logo}>
                    <Text style ={styles.logo_text}>Dynamic Grocery list</Text>
                </View>

                <View style = {styles.userContainer}>
                <TextInput placeholder = "Username" placeholderTextColor={Style.color} style = {[styles.input, {borderWidth: 3 }]} 
                    value = {setusername} onChangeText = {(text) => setUsername(text) } />

                <TextInput placeholder = "Password" secureTextEntry ={true} placeholderTextColor={Style.color} style = {[styles.input, {borderWidth: 3, marginTop: 10 }]} 
                    value = {setpassword} onChangeText = {(text) => setPassword(text) } />
            
                <TouchableOpacity style  ={[styles.create_acc_Button, { marginTop: 10 }]} onPress = { () => {                            
                        if(setusername === '' || setpassword === ''){
                                Alert.alert('Please enter both user name and password');
                            }
                            else{
                               searchUser();
                            }
                        } }
                        >
                    <Text style = {styles.searchButtonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style  ={[styles.create_acc_Button, { marginTop: 10 }]} onPress = { () => {                            
                               navigation.navigate('Create_account');
                        } }
                        >
                    <Text style = {styles.searchButtonText}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </View>
        </KeyboardAvoidingView>

    )
}

export default Login;