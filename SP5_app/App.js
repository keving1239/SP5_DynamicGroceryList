import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Component/Login';
import Notes from './Component/Notes';
import AddNote from './Component/AddNote';
import EditNote from './Component/EditNote';
import DeleteNote from './Component/DeleteNote';
import React, {useState} from "react";


const stack = createNativeStackNavigator();

export default function App() {

  const [note, setNote] = useState();
  const [notes, setNotes] = useState([]);
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [movetoTrash, setMoveToTrash] = useState([]);

  function handleNote(){
    let newNote = note;
    let newNotes = [newNote, ...notes];
    setNotes(newNotes);
    setNote ('');
  }

  return (
    <NavigationContainer>
      <stack.Navigator>

        <stack.Screen name ="Notes">
          {props => <Notes {...props} notes = {notes} setNotes={setNotes} note = {note} setNote = {setNote} date ={date} setDate = {setDate} movetoTrash ={movetoTrash} setMoveToTrash ={setMoveToTrash} />}
        </stack.Screen>

        <stack.Screen name="AddNote">
          {props => <AddNote {...props} note ={note} setNote={setNote} handleNote = {handleNote}/>}
        </stack.Screen>

        <stack.Screen name ="EditNote">
          {props => <EditNote  {...props}   notes = {notes} setNotes={setNotes} note = {note} setNote = {setNote} date ={date} setDate = {setDate} movetoTrash ={movetoTrash} setMoveToTrash ={setMoveToTrash} />}
        </stack.Screen>

        <stack.Screen name="DeleteNote" >
          {props => <DeleteNote {...props} movetoTrash ={movetoTrash} setMoveToTrash ={setMoveToTrash} note ={note} setNote={setNote} notes = {notes} setNotes={setNotes} date ={date} setDate = {setDate}/>} 
        </stack.Screen>

        <stack.Screen name ="Login">
        {props => <Login />}
        </stack.Screen>
        
      </stack.Navigator>
    </NavigationContainer>

  );
}


