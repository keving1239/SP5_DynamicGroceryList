import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import * as Style from '../assets/styles';
import {Text, StyleSheet, View, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView,  Keyboard, Alert} from 'react-native';
import {styles} from './AddNote';
import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
 

const EditNote = ({route, navigation, ...props}) =>{
    const {i, n} = route.params;
    const [newEdit, setnewEdit] = useState(n)

    function edit_note(){
        var manual_edit = [props.notes];
        manual_edit[i] = newEdit;
        props.setNotes(manual_edit)

        navigation.navigate('Notes')
    }
    return (
    <ScrollView>
            <KeyboardAvoidingView behavior= {Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style = {{padding:20, justifyContent : 'space-around'}}>
                        <TextInput style = {[styles.input]} placeholder = "Type Here..." 
                        value = {newEdit.toString()} onChangeText = {(text) => setnewEdit(text)} multiline = {true}/>
                    
                        <TouchableOpacity style ={styles.button} onPress={() => edit_note()}>
                            <Text style = {styles.buttonText}>Confirm Edit</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>

            </KeyboardAvoidingView>
    </ScrollView>
    )
}

export default EditNote;