import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import React, {useState} from "react";
import {Text,StyleSheet, View, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform, TouchableNativeFeedbackBase, Keyboard, Alert} from 'react-native';
import * as Style from '../assets/styles';
import {styles} from './Notes';
import Axios from 'axios';



const Share_Note = ({navigation, ...props}) =>{

    const [share_email, setShare_Email] = useState('');

    async function db_check(){
        const call = await Axios.post("http://10.0.0.26/email_search", {email: share_email}).catch((err) => console.log(err));
        return call.data[0]
    }

    async function db_share(share){
        const call = await Axios.post("http://10.0.0.26/create_share", {note_id: props.sharenote_id, share_id: share, edit_right: 0, owner_id: props.userID}).catch((err) => console.log(err));
        return call.data
    }

    async function searchUser(){
        console.log(props.sharenote_id);
       let share_id = await db_check();
       share_id = Object.values(share_id); 
       let shared = false
        if(share_id === ''){
            Alert.alert('User does not exist', 
            'Please try a different email',
            [
                {
                    text: 'try again',
                    onPress: () => {
                        navigation.navigate('Share_Note')
                    }
                },
            ])
        }
        else{
            shared = db_share(share_id[0]);
        }
    }

    return(
        <View>
                <View style = {styles.logo}>
                    <Text style ={styles.logo_text}>Share a List</Text>
                    <Text style ={styles.logo_under_text}>Enter the Email of the person you would like to share your list with:</Text>
                </View>

                <View style = {styles.userContainer}>
                <TextInput placeholder = "Email" placeholderTextColor={Style.color} style = {[styles.input, {borderWidth: 3 }]} 
                    value = {share_email} onChangeText = {(text) => setShare_Email(text) } />

                <TouchableOpacity style  ={[styles.create_acc_Button, { marginTop: 10 }]} onPress = { () => {                            
                        if(props.share_email === ''){
                                Alert.alert('Please enter an email');
                            }
                            else{
                               searchUser();
                               Alert.alert("Note has been shared",
                                "Press back to note to return to note list",
                               [
                                   {
                                       text: "Back to Notes",
                                       onPress: () =>{
                                           navigation.navigate('Notes')
                                       }
                                   }
                               ]
                           )
                            }
                        } }
                        >
                    <Text style = {styles.searchButtonText}>Share</Text>
                </TouchableOpacity>
                <TouchableOpacity style  ={[styles.create_acc_Button, { marginTop: 10 }]} onPress = { () => {                            
                             navigation.navigate('Notes');
                        } }
                        >
                    <Text style = {styles.searchButtonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Share_Note;