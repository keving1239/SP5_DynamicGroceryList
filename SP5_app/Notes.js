import React, {useState} from "react";
import {Text,StyleSheet, View, TouchableOpacity, KeyboardAvoidingView, TextInput, ScrollView, Keyboard, Alert, prompt} from 'react-native';
import * as Style from '../assets/styles';
//import * as eva from '@eva-design/eva';
//import { ApplicationProvider, IconRegistry, Layout, Icon} from '@ui-kitten/components';
//import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Axios from 'axios';


const Notes = ({navigation, ...props}) => {

    const [search, setSearch] = useState();

    function searchNotes(){
        if (search === ''){
            Alert.alert('Nothing is search filled, please type something')
        }
        else if(search !== ''){ 
            props.notes.forEach((item, index) => {
                if(item.includes(search)){
                    let searchItem = [...props.notes];
                    let first_note = searchItem[0];
                    let index = [...props.notes].indexOf(item);
                    searchItem[0] = item;
                    searchItem[index] = first_note;
                    props.setNotes(searchItem);
                }
            });
        }

        setSearch('');

        Keyboard.dismiss();
    }

    async function db_share(item){
        const call = await Axios.post("http://110.0.0.26/share_note" , {user_id: props.userID, note_id: item}).catch((err) => console.log(err));
        return  call.data;
    }

   async function shareNote(item){
        db_share(item[1]);
        props.sharenote_id = (item[1])
        props.setShareNote_ID(item[1]);
        console.log(props.sharenote_id)
        navigation.navigate("Share_Note");
    }


    function deleteNote(index){
        let trash_array = [...props.notes];
        let Totrash = trash_array.splice(index, 1);
        props.setNotes(trash_array) ;
        props.setMoveToTrash(Totrash);

        let trash = props.movetoTrash;
        for(var x =0; x < Totrash.length; x++){
            trash.push(Totrash[x]);
        }
        let clear =[];
        props.setMoveToTrash(clear);
        props.setMoveToTrash(trash);
    }


    function clear_all(){
        var clear = [...props.notes];
        var move_all = [...props.movetoTrash];
         clear.forEach((item, index) => {
            move_all.push(item);
         })

         clear =[];
         props.setNotes(clear);
         props.setMoveToTrash(move_all);

    }

    function Logout(){
         props.setNote('')
        props.setNotes([]);
        props.SetShared_Notes([]);
        props.setMoveToTrash([]);
        props.SetFirstname('');
        props.SetLastname('');
        props.SetuserID('');
        props.setEmail("");
        props.setShareNote_ID();
        navigation.navigate('Login');
    }

    return(
        <View style = {[styles.noteContainer]}>
            <View style = {styles.headingContainer}>
                <Text style = {styles.heading}>
                   My Notes
                </Text>
                <TouchableOpacity style  ={[styles.searchButton,{width:50}]}onPress={() => Logout()}>
                            <Text style = {styles.searchButtonText}>
                            Logout
                        </Text>
                        </TouchableOpacity>
            </View>
            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                <Text style = {{fontWeight: '700', fontSize: 18, color: Style.color}}>
                    Total: {props.notes.length}
                </Text>
            </View>

            <View style = {styles.divider}></View>

            <View style = {styles.searchContainer}>
                <TextInput placeholder = "Search.." placeholderTextColor={Style.color} style = {[styles.input, {borderWidth: 3 }]} 
                value = {search} onChangeText = {(text) => setSearch(text) } />
            
                <TouchableOpacity style  ={[styles.searchButton,{width:50}]} onPress = {() => searchNotes()}>
                        <Text style = {styles.searchButtonText}>
                            Search
                        </Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.searchButton} onPress= {() => clear_all()}>
                    <Text style = {styles.searchButtonText}>Clear</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style = {styles.scrollView} showsVerticalScrollIndicator = {false}>

                {props.notes.length ===0
                ?

                <View style ={styles.emptyNoteContainer}>
                    <Text style= {styles.emptyNoteText}>You have no notes yet! Press the + button to start a new note!</Text>
                </View>
                :

                props.notes.map((item, index) =>
                    <View style={styles.item} key={index}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={styles.note}>
                                <Text style={styles.index}> {index + 1}: </Text>
                                <Text style={styles.text}>{item[0]}</Text>
                            </View>
                            <Text>{props.date}</Text>
                        </View>
                        <View style={styles.dateContainer}>
                            <TouchableOpacity onPress={() => deleteNote(index)}>
                            <Text>
                            Delete
                             </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => shareNote(item)}>
                            <Text>
                            Share
                        </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress = {()=> navigation.navigate('EditNote',{
                                i: index,
                                n: item[0],
                                id: item[1]
                            })}>
                            
                            <Text>
                            Edit
                        </Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                )}
                
                {props.shared_notes.length === 0
                ?

                <View style ={styles.emptyNoteContainer}>
                    <Text style= {styles.emptyNoteText}></Text>
                </View>
                :

                props.shared_notes.map((item, index) =>
                    <View style={styles.item} key={index}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={styles.note}>
                                <Text style={styles.index}> {index + 1}: Shared Note </Text>
                                <Text style={styles.text}>{item[0]}</Text>
                            </View>
                            <Text>{props.date}</Text>
                        </View>
                        <View style={styles.dateContainer}>
                            <TouchableOpacity onPress = {()=> navigation.navigate('EditNote',{
                                i: index,
                                n: item[0]
                            })}>
                            
                            <Text>
                            Edit
                        </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
        </ScrollView>
        <TouchableOpacity style = {styles.floatingplusButton} onPress = {()=> navigation.navigate('AddNote')}> 
        <Text style = {styles.searchButtonText}>
                            Add+
                        </Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.floatingtrashButton} onPress = {() => navigation.navigate('DeleteNote')}> 
                        <Text style = {styles.searchButtonText}>
                            Trash
                        </Text>
                    </TouchableOpacity>
        </View>
    )
}

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    floatingplusButton:{
        position:'absolute',
        alignItems: "center",
        width: 70,
        borderRadius: 100,
        justifyContent: 'center',
        marginLeft: 10,
        height:70,
        right: 2,
        bottom: 65,
        backgroundColor: Style.color,
    },
    floatingtrashButton:{
        position:'absolute',
        alignItems: "center",
        width: 70,
        borderRadius: 100,
        justifyContent: 'center',
        height:70,
        left: 2,
        bottom: 65,
        backgroundColor: Style.color,
    },
    noteContainer:{
        paddingTop:10,
        paddingHorizontal: 20,
        marginBottom: 70,
        opacity: 0.9
    },
    heading: {
        alignContent:'center',
        fontSize: 30,
        fontWeight: '700',
        color: Style.color
    },
    divider:{
        width: "100%",
        height: 2,
        backgroundColor: Style.color,
        MarginTop: 5,
        MarginBottom: 5
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
    index:{
        fontSize: 20,
        fontWeight: '800',
    },
    headingContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button:{
        backgroundColor: Style.color,
        width: 50,
        borderRadius: 100,
        justifyContent: 'center',
        marginLeft: 10,
        height:50
    },
    buttonText:{
        color: 'white',
        fontSize: 32,
        fontWeight: '800'
    },
    scrollView:{
        marginBottom: 70
    },
    note: {
        flexDriection: 'row',
        width: "75%"
    },
    text: {
        fontWeight: '700',
        fontSize: 17,
        alignSelf: 'center'
    }, 
    delete:{
        color: Style.color,
        fontWeight: '700',
        fontSize: 15
    },
    input:{
        height: 40,
        paddingHorizontal: 20,
        width: "65%" ,
        fontSize:19,
        color: 'black',
        fontWeight : '500',
        opacity: 0.8,
        shadowColor: Style.color,
        shadowOpacity: 0.4,
        shadowOffset : {width: 0, height: 4},
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: 'white',
        borderColor: Style.color,
        borderWidth: 2,
        borderRadius: 5,
    },
    searchContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 8
    },
    searchButton: {
        backgroundColor: Style.color,
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        borderRadius: 5,
        height: 40
    },
    searchButtonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 12
    },
    emptyNoteContainer: {
        alignItems: 'center',
        marginTop: 240
    },
    emptyNoteText:{
        color: Style.color,
        fontWeight: '600',
        fontSize: 15
    },
    dateContainer: {
        marginTop: 10,
        flexDirection : 'row',
        justifyContent: 'space-between',
        marginTop: 20    
    },
    userContainer:{
        marginTop: "40%",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    createContainer:{
        marginTop: "10%",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 15
    },
    loginButton: {
        backgroundColor: Style.color,
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        borderRadius:7,
        height: 40
    },
    create_acc_Button: {
        backgroundColor: Style.color,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        borderRadius:7,
        height: 50
    },
    logo:{
        marginTop: "25%",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    logo_text:{
        fontSize: 50, 
        textAlign: 'center',
        color: Style.color
    },
    logo_under_text:{
        fontSize: 30, 
        textAlign: 'center',
        color: Style.color
    }


})

export default Notes;