import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Component/Login';
import Notes from './Component/Notes';
import AddNote from './Component/AddNote';
import EditNote from './Component/EditNote';
import DeleteNote from './Component/DeleteNote';
import Create_account from './Component/Create_account';
import Share_Note from './Component/Share_Note';
import React, {useState} from "react";
import Axios from 'axios';


const stack = createNativeStackNavigator();


export default function App() {


  const [note, setNote] = useState('');
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState([]);
  const [shared_notes, SetShared_Notes] = useState([]);
  const [date, setDate] = useState(new Date().toJSON().slice(0, 10));
  const [movetoTrash, setMoveToTrash] = useState([]);
  const [firstname, SetFirstname] = useState('');
  const [lastname, SetLastname] = useState('');
  const [userID, SetuserID] = useState('');
  const [email, setEmail] = useState("");
  const [sharenote_id, setShareNote_ID] =  useState();

  async function getNotes(){
    const call_notes = await Axios.post("http://10.0.0.26/grab_notes" , {user_id:userID}).catch((err) => console.log(err));
    return call_notes.data;
 }


 async function getShared_Notes(){
     const call_shared_notes = await Axios.post("http://10.0.0.26/grab_shared_notes" , {user_id:userID}).catch((err) => console.log(err));
     return call_shared_notes.data;
  }

 async function handleNote(){
    console.log("Handle was called");
   /* let newNote = note;
    let newNotes = [[newNote,], ...notes];
    setNotes(newNotes);*/
    setNote ('');
    const db_note_call = await getNotes();
    const db_share = await getShared_Notes();
    if(db_note_call[0] === ""){
        null;
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
    setNotes(temp_array);
}
if(db_share[0] === ""){
        null;
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
    SetShared_Notes(temp_array2);
}
 }


  return (
    <NavigationContainer>
      <stack.Navigator>

      <stack.Screen name ="Login" >
        {props => <Login {...props} notes = {notes} setNotes={setNotes} note = {note} setNote = {setNote} firstname ={firstname} SetFirstname = {SetFirstname} lastname ={lastname} SetLastname = {SetLastname} userID = {userID} SetuserID = {SetuserID} handleNote = {handleNote} movetoTrash ={movetoTrash} setMoveToTrash ={setMoveToTrash} email ={email} setEmail ={setEmail} shared_notes = {shared_notes} SetShared_Notes={SetShared_Notes}/>}
        </stack.Screen>

        <stack.Screen name ="Notes">
          {props => <Notes {...props}  notes = {notes} setNotes={setNotes} note = {note} setNote = {setNote} date ={date} setDate = {setDate} firstname ={firstname} SetFirstname = {SetFirstname} lastname ={lastname} SetLastname = {SetLastname} movetoTrash ={movetoTrash} setMoveToTrash ={setMoveToTrash} userID = {userID} SetuserID = {SetuserID}  mail ={email} setEmail ={setEmail} sharenote_id = {sharenote_id} setShareNote_ID = {setShareNote_ID} shared_notes = {shared_notes} SetShared_Notes = {SetShared_Notes}/>}
        </stack.Screen>

        <stack.Screen name="AddNote">
          {props => <AddNote {...props} note ={note} setNote={setNote} handleNote = {handleNote} userID = {userID} SetuserID = {SetuserID} date ={date} setDate = {setDate} title = {title} setTitle = {setTitle}/>}
        </stack.Screen>

        <stack.Screen name ="EditNote">
          {props => <EditNote  {...props}   notes = {notes} setNotes={setNotes} note = {note} setNote = {setNote} date ={date} setDate = {setDate} movetoTrash ={movetoTrash} setMoveToTrash ={setMoveToTrash} handleNote = {handleNote}/>}
        </stack.Screen>

        <stack.Screen name="DeleteNote" >
          {props => <DeleteNote {...props} movetoTrash ={movetoTrash} setMoveToTrash ={setMoveToTrash} note ={note} setNote={setNote} notes = {notes} setNotes={setNotes} date ={date} setDate = {setDate} userID = {userID} SetuserID = {SetuserID}/>} 
        </stack.Screen>

        <stack.Screen name ="Create_account">
        {props => <Create_account {...props} firstname ={firstname} SetFirstname = {SetFirstname} lastname ={lastname} SetLastname = {SetLastname} userID = {userID} SetuserID = {SetuserID} email ={email} setEmail ={setEmail}/>}
        </stack.Screen>

        <stack.Screen name ="Share_Note">
        {props => <Share_Note {...props} notes = {notes} setNotes={setNotes} note = {note} setNote = {setNote} firstname ={firstname} SetFirstname = {SetFirstname} lastname ={lastname} SetLastname = {SetLastname} userID = {userID} SetuserID = {SetuserID} handleNote = {handleNote} movetoTrash ={movetoTrash} setMoveToTrash ={setMoveToTrash} email ={email} setEmail ={setEmail} sharenote_id = {sharenote_id} setShareNote_ID = {setShareNote_ID}/>}
        </stack.Screen>


      </stack.Navigator>
    </NavigationContainer>

  );
}
