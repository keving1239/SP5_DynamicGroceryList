import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import * as Style from '../assets/styles';
import {Text, StyleSheet, View, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView,  Keyboard, Alert} from 'react-native';
import {styles} from './AddNote';
import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import Axios from 'axios';


const EditNote = ({route, navigation, ...props}) =>{
    const {i, n, id} = route.params;
    const [newEdit, setnewEdit] = useState(n)

    async function db_edit(){
        const call_edit = await Axios.post("http://10.0.0.26/edit_note" , {note_id:id, note: newEdit}).catch((err) => console.log(err));
        console.log(call_edit.data);
        return call_edit.data;
    }

    async function edit_note(){
        var call =  await db_edit();
        if (call == true){
            Alert.alert('Note has been edit',
            'Press continue to navigate to main menu ',
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
            Alert.alert('Note has not edited created',
            'Press press retry to try again',
            [
                {
                    text: 'Continue',
                    onPress: () => {
                        navigation.navigate('EditNote')
                    }
                }
            ]) 
        }
    }
    return (
    <ScrollView>
            <KeyboardAvoidingView behavior= {Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style = {{padding:20, justifyContent : 'space-around'}}>
                        <TextInput style = {[styles.input]} placeholder = "Type Here..." 
                        value = {newEdit.toString()} onChangeText = {(text) => setnewEdit(text)} multiline = {true}/>
                    
                        <TouchableOpacity style ={styles.button} onPress={() => {
                            edit_note(),
                            props.handleNote(),
                            navigation.navigate('Notes')
                        }
                            }>
                            <Text style = {styles.buttonText}>Confirm Edit</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>

            </KeyboardAvoidingView>
    </ScrollView>
    )
}

export default EditNote;