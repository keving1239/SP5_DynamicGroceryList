import React, {useState} from "react";
import {Text,StyleSheet, View, TouchableOpacity, TextInput, ScrollView, Keyboard, Alert} from 'react-native';
import * as Style from '../assets/styles';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Icon} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";

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

    function deleteNote(index){
        let trash_array = [...props.notes];
        let Totrash = trash_array.splice(index, 1);
        props.setNotes(trash_array) ;
        props.setMoveToTrash(Totrash);

        let trash = [Totrash, ...props.movetoTrash];
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



    return(
        <View style = {[styles.noteContainer]}>
            <View style = {styles.headingContainer}>
                <Text style = {styles.heading}>
                    Notes List...
                </Text>
                <View style = {{flexDirection: 'row'}}>
                    <TouchableOpacity style = {[styles.button, {marginLeft: 40}]} onPress = {() => navigation.navigate('DeleteNote')}> 
                        <IconRegistry icons ={EvaIconsPack} />
                        <ApplicationProvider {...eva} theme = {eva.light}>
                            <Icon name = 'trash-2-outline' fill = "white" style = {{width: 25, height: 50, alignSelf: 'center'}}/>
                        </ApplicationProvider>
                    </TouchableOpacity>

                    <TouchableOpacity style = {[styles.button]} onPress = {()=> navigation.navigate('AddNote')}> 
                        <IconRegistry icons ={EvaIconsPack} />
                        <ApplicationProvider {...eva} theme = {eva.light}>
                            <Icon name = 'plus-outline' fill = "white" style = {{width: 25, height: 50, alignSelf: 'center'}}/>
                        </ApplicationProvider>
                    </TouchableOpacity>
                </View>

            </View>
            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                <Text style = {{fontWeight: '700', fontSize: 18, color: Style.color}}>
                    Total: {props.notes.length}
                </Text>
            </View>

            <View style = {styles.divider}></View>

            <View style = {styles.searchContainder}>
                <TextInput placeholder = "Search.." placeholderTextColor={Style.color} style = {[styles.input, {borderWidth: 3 }]} 
                value = {search} onChangeText = {(text) => setSearch(text) } />
            
                <TouchableOpacity style  ={[styles.searchButton,{width:50}]} onPress = {() => searchNotes()}>
                    <ApplicationProvider {...eva} theme = {eva.light}>
                        <Icon name = 'search' fill = "white" style = {{width: 25, height: 40, alignSelf: 'center'}}/>
                    </ApplicationProvider>
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
                                <Text style={styles.text}>{item}</Text>
                            </View>

                            <TouchableOpacity onPress={() => deleteNote(index)}>
                            <IconRegistry icons ={EvaIconsPack} />
                                 <ApplicationProvider {...eva} theme = {eva.light}>
                                    <Icon name = 'trash-2-outline' fill = {Style.color} style = {{width: 25, height: 50, alignSelf: 'center'}}/>
                                </ApplicationProvider>
                            </TouchableOpacity>
                    </View>
                    <View style={styles.dateContainer}>
                            <Text>Date: {props.date}</Text>
                            <TouchableOpacity onPress = {()=> navigation.navigate('EditNote',{
                                i: index,
                                n: item
                            })}>
                            <IconRegistry icons ={EvaIconsPack} />
                                 <ApplicationProvider {...eva} theme = {eva.light}>
                                    <Icon name = 'edit-2-outline' fill = {Style.color} style = {{width: 25, height: 50, alignSelf: 'center'}}/>
                                </ApplicationProvider>
                            </TouchableOpacity>
                        </View>
                        </View>
                )}
            </ScrollView>
        </View>
    )
}

export const styles = StyleSheet.create({
    noteContainer:{
        paddingTop:10,
        paddingHorizontal: 20,
        marginBottom: 70,
        opacity: 0.9
    },
    heading: {
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
    searchContainder:{
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
    }
})

export default Notes;