import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import React from "react";
import {Text,StyleSheet, View, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform, TouchableNativeFeedbackBase, Keyboard, Alert} from 'react-native';
import * as Style from '../assets/styles';
import Axios from 'axios';

const AddNote = ({navigation, ...props}) =>{

    async function db_add(){
        console.log(props.userID);
        const call = await Axios.post("http://10.0.0.26/create_note" , {note: props.note, userId: props.userID, date:props.date}).catch((err) => console.log(err));
        return(call.data);
    }

    async function add_note(){
        console.log(props.userID);
        const created = await db_add();
        if (created == true){
            Alert.alert('Note has been created',
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
            Alert.alert('Note has not been created',
            'Press press retry to try again',
            [
                {
                    text: 'Continue',
                    onPress: () => {
                        navigation.navigate('AddNote')
                    }
                }
            ]) 
        }
    }


    return(
        <ScrollView>
            <KeyboardAvoidingView behavior= {Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style = {{padding:20, justifyContent : 'space-around'}}>
                        <TextInput style = {[styles.input]} placeholder = "Type Here..." multiline = {true} value ={props.note} onChangeText= {(text) => props.setNote(text)}/>
                    
                        <TouchableOpacity style ={styles.button} onPress={() => {
                            if(props.note === ''){
                                Alert.alert('Please enter Text');
                            }
                            else{
                                add_note();
                                props.handleNote();
                                navigation.navigate('Notes') 
                            }
                        } }>
                            <Text style = {styles.buttonText}>Add Note</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
         </ScrollView>   
    )
}

export const styles = StyleSheet.create({
    addNoteContainer:{
        paddingHorizontal: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    item:{
        marginBottom: 20,
        padding: 15,
        color: 'black',
        opacity:0.8,
        maringTop: 10,
        shadowColor: Style.color,
        shadowOpacity:0.54,
        shadowOffset: {width: 0, height:4},
        shadowRadius: 8,
        elevation:5,
        backgroundColor: 'white',
        borderColor: Style.color,
        borderWidth: 2,
        borderRadius: 5,
        borderLeftWidth:15
    },
    button:{
        backgroundColor: Style.color,
        width: '40%',
        borderRadius: 100,
        justifyContent: 'center',
        height: 40,
        alignSelf: 'flex-end',
        marginTop: 20
    },
    buttonText:{
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
        alignSelf: 'center'
    }
})
export default AddNote;