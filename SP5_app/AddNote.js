import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import React from "react";
import {Text,StyleSheet, View, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform, TouchableNativeFeedbackBase, Keyboard, Alert} from 'react-native';
import * as Style from '../assets/styles';

const AddNote = ({navigation, ...props}) =>{
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