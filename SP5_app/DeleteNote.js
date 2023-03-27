import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import  Axios from "axios";
import React from "react";
import {Text,StyleSheet, View, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform, TouchableNativeFeedbackBase, Keyboard, Alert} from 'react-native';
import * as Style from '../assets/styles';
import {styles} from './Notes';


const DeleteNote = ({ ...props}) =>{


    async function delete_note(item){
        console.log(item);
        const call = await Axios.post("http://10.0.0.26/delete_note", {user_id: props.userID, note_id: item[1]}).catch((err) => console.log(err));
    }

    function deleteAll(){
        Alert.alert('Are you sure you want to Delete all?',
        'All deletes are permanent',
        [
            {
                text: 'Yes',
                onPress: () =>{
                    let empty = [...props.movetoTrash];
                    empty = [];
                    props.setMoveToTrash(empty);
                }
            },
            {
                text: 'No',
                onPress: () => console.log('No'),
                style: 'cancel'
            }
        ]);

    }

function delete_one(index, item){
    console.log(item);
    Alert.alert('Delete?',
    'Are you sure you want to delete this note?',
    [
        {
            text: 'Yes',
            onPress: () =>{
                let delete_1 = [...props.movetoTrash];
                delete_1.splice(index,1);
                props.setMoveToTrash(delete_1);
                delete_note(item);
            },
        },
        {
            text: 'No',
            onPress: () => console.log('No'),
            style: 'cancel'
        }
    ])
}

function Undo_delete(){
    let undo = (props.movetoTrash);
    let notes = (props.notes);
    undo.forEach((item, index) => {
        notes.push(item);
    });
    props.setMoveToTrash([]);
    props.setNotes(notes);
}

function undo_one(index){
    let undo_note = props.movetoTrash[index]
    let move = [undo_note, ...props.notes];
    props.setNotes(move);
    
    let new_trash = [...props.movetoTrash]
    new_trash.splice(index, 1);
    props.setMoveToTrash(new_trash); 

}

    
    return (

        <ScrollView>
            <View style ={[styles.notesContainer]}>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <TouchableOpacity style = {style.emptyButton} onPress ={() => Undo_delete()}>
                        <Text style = {style.emptyButtonText}>Undo Delete</Text>
                    </TouchableOpacity> 

                    <Text style = {{fontWeight: '700', fontSize: 18, color: Style.color} }>
                        Total: {props.movetoTrash.length}
                    </Text>

                    <TouchableOpacity style = { style.emptyButton} onPress = {() => deleteAll()}>
                        <Text style ={style.emptyButtonText}>Empty</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.divider}></View>
            
                {props.movetoTrash.length === 0
                ?
                <View style= {styles.emptyNoteContainer}>
                    <Text style = {styles.emptyNoteText}>Trash is empty</Text>
                </View>
                :

                    props.movetoTrash.map((item, index) => 
                    <View style={styles.item} key={index}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={styles.note}>
                                <Text style={styles.index}>{index + 1}: </Text>
                                <Text style={styles.text}>{item[0]}</Text>
                            </View>
                            <TouchableOpacity onPress={() => undo_one(index)}>
                                <Text style={styles.delete}>Undo</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.dateContainer}>
                            <Text>Date: {props.date}</Text>
                            <TouchableOpacity onPress ={() => delete_one(index, item)}>
                                <Text style={styles.delete}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            
            </View>
        </ScrollView>
    )
}

export const style = StyleSheet.create({
    emptyButton: {
        backgroundColor: Style.color,
        width: '35%',
        borderRadius: 75,
        justifyContent: 'center',
        alignItems: 'center',
        height: 25,
        marginBottom: 5,
        marginTop: 5
    },
    emptyButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700'
    }

})

export default DeleteNote;