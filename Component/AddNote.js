import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import React from "react";
import {Text,StyleSheet, View, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform, TouchableNativeFeedbackBase, Keyboard, Alert} from 'react-native';
import * as Style from '../assets/styles';
import Axios from 'axios';

const AddNote = ({navigation, ...props}) =>{

    async function db_add(){
        console.log(props.userID);
        const call = await Axios.post("http://10.0.0.26/create_note" , {note: props.note, userId: props.userID, date:props.date, title:props.title}).catch((err) => console.log(err));
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
        <View >
        <ScrollView>
            <KeyboardAvoidingView behavior= {Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style = {{padding:20, justifyContent : 'space-around'}}>
                    <TextInput style = {[styles.input]} placeholder = "Note Title" multiline = {true} value ={props.title} onChangeText= {(text) => props.setTitle(text)}/>
                        <TextInput style = {[styles.input]} placeholder = "Type Here..." multiline = {true} value ={props.note} onChangeText= {(text) => props.setNote(text)}/>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
         </ScrollView> 
           
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
        <TouchableOpacity style ={styles.secondbutton} onPress={() => {
                        navigation.navigate('Notes')
                                }
                        }>
        <Text style = {styles.buttonText}>Notes</Text>
        </TouchableOpacity>

        </View>
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
        backgroundColor: 'DimGray',
        borderColor: Style.color,
        borderWidth: 2,
        borderRadius: 5,
        borderLeftWidth:15
    },
    button:{
        position:'absolute',
        alignItems: "center",
        width: 100,
        justifyContent: 'center',
        marginLeft: 10,
        height:50,
        right: 2,
        top: 300,
        bottom: 65,
        borderRadius: 20,
        backgroundColor: Style.color,
    },
    secondbutton:{
        position:'absolute',
        alignItems: "center",
        width: 100,
        justifyContent: 'center',
        height:50,
        left: 2,
        top: 300,
        bottom: 65,
        borderRadius: 20,
        backgroundColor: Style.color,
    },
    buttonText:{
        color: '#D3D3D3',
        fontSize: 20,
        fontWeight: '700',
        alignSelf: 'center'
    }
})
export default AddNote;