import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import * as Style from '../assets/styles';
import {Text, StyleSheet, View, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView,  Keyboard, Alert} from 'react-native';
import {styles} from './AddNote';
import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import Axios from 'axios';


const EditNote = ({route, navigation, ...props}) =>{
    const controller = new AbortController();
    const {i, n, id, t} = route.params;
    const [newTitle, setnewTitle] = useState(t)
    const [newEdit, setnewEdit] = useState(n)

    async function db_edit(){
        const call_edit = await Axios.post("http://10.0.0.26/editnote" , {note_id:id, note: newEdit}).catch((err) => console.log(err));
        controller.abort()
        return call_edit.data
    }

    async function edit_note(){
        var call =  await db_edit();
      if (call === true){
        props.handleNote()
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
    <View >
    <ScrollView>
            <KeyboardAvoidingView behavior= {Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style = {{padding:20, justifyContent : 'space-around'}}>
                    <TextInput style = {[{fontSize: 24}, styles.index]}  placeholder = "Type Here..." 
                        value = {newTitle.toString() + "\n\n"} onChangeText = {(text) => setnewEdit(text)} multiline = {false}/>
                        <TextInput style = {[styles.input]} placeholder = "Type Here..." 
                        value = {newEdit.toString()} onChangeText = {(text) => setnewEdit(text)} multiline = {true}/>
                
                    </View>
                </TouchableWithoutFeedback>

            </KeyboardAvoidingView>
    </ScrollView>
    <TouchableOpacity style ={styles.button} onPress={() => {
                                edit_note()
                            }
                                }>
             <Text style = {styles.buttonText}>Save Edits</Text>
    </TouchableOpacity>
     <TouchableOpacity style ={styles.secondbutton} onPress={() => {
                        navigation.navigate('Notes')
                                }
                        }>
        <Text style = {styles.buttonText}>Notes</Text>
    </TouchableOpacity>
</View>
    )
}

export default EditNote;