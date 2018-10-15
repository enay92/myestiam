import React from 'react'
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native"
import { Button, Left, Right, Body, Icon, Text, Separator, ListItem } from 'native-base'
import {StyleSheet} from 'react-native'


const NoteBlock2 =({ lesson, mark, commentary}) => (

    <ListItem >
            <Left>
              <Text style={styles.lesson}>{lesson}</Text>
              </Left>
              <Right>
                <Text style={styles.mark}>{mark}</Text>
              </Right>
            
            <Right>
              <Text style={styles.commentary}>{commentary}</Text>
            </Right>
          </ListItem>
    )
    export default NoteBlock2
    
    const styles = StyleSheet.create({
    
      matter: {
        fontSize: 18,
        paddingRight: 50,
    
      },
      lesson: {
    
      },
      mark: {
        paddingRight: 150,
        width: 200,
      },
      commentary: {
     textAlign: 'right'
      },
      separator: {
        height: 50,
      },
    
      head: {
        backgroundColor: '#09396A',
      },
    
      foot: {
        backgroundColor: '#09396A',
      },
      body: {
        backgroundColor: '#f9f9fa',
      },
      hello: {
        textAlign: 'center',
        color: 'white',
    
      },
    
      skill: {
    
        color: 'red',
        fontSize: 12,
      },
      honneur: {
    
        color: 'green',
        textAlign: 'center',
        fontSize: 10,
      },
      text: {
    
      },
      reminderBar: {
        backgroundColor: 'red'
      },
      average:{
        textAlign: 'right',
        fontSize: 19
    
      }
    
    
    })