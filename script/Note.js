import React, { Component } from "react"
import NoteBlock from './components/note/NoteBlock'
var BUTTONS = ["Chat", "Support", "Devoir", "Cours", "Quizz", "Mon Compte", "+"]
import { View, Text, StyleSheet, StatusBar, Image, Platform } from 'react-native'
import { ListItem, Separator, Body, Content, Container, Header, Right, Left, Button, Footer, FooterTab, Icon, ActionSheet } from 'native-base'

var BUTTONS = ["Chat", "Support", "Devoir", "Cours", "Quizz", "Mon Compte", "X"]


export default class Note extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    const { navigate } = this.props.navigation
    const notes = [
      {
        matter: 'Langage C',
        average: '16',
        lesson: 'Les Bases',
        mark: '15',
        lesson2: 'Algorithmes',
        mark2: '17',
        lesson3: 'Final',
        mark3: '14',
        validate: true
        

      },
      {
        matter: 'SQL',
        average: '16',
        lesson: 'Modélisation',
        mark: '15',
        lesson2: 'Base de données',
        mark2: '17',
        lesson3: 'Final',
        mark3: '14',
        validate: true

      },
      {
        matter: 'Développement Web',
        average: '17',
        lesson: 'Html CSS',
        mark: '14',
        lesson2: 'Utilisation de JavaScript',
        mark2: '16',
        lesson3: 'Application Web',
        mark3: '19',
        validate: true

      },
      {
        matter: 'Anglais',
        average: '20',
        lesson: 'Restitution des Bases',
        mark: '14',
        lesson2: 'Oral',
        mark2: '16',
        lesson3: 'Anglais appliqué à l\'informatique',
        mark3: '19',
        validate: true

      },
      {
      matter: 'IOT',
        average: '8',
        lesson: 'Introduction',
        mark: '8',
        lesson2: 'Arduino',
        mark2: '10',
        lesson3: 'Projet Final',
        mark3: '6',
        validate: false
      },
    ]
    if (Platform.OS == 'android')
{
    styles.head = {backgroundColor: '#004080',paddingBottom:'20%', paddingTop:'8%', flex  : 1, flexDirection : 'row',justifyContent: 'space-between',}
    styles.foot = {backgroundColor:  '#004080',}
}
    let i = 0
    const tab_note = notes.map(note => {
      const temp = (
        <NoteBlock key={`abs_${i}`} mark={note.mark} mark2={note.mark2} mark3={note.mark3} matter={note.matter} average={note.average} lesson={note.lesson} lesson2={note.lesson2} lesson3={note.lesson3} validate={note.validate} />
      )
      i++
      return temp
    })
    return (
 
      <Container>
        <Header style={styles.head}>

          <StatusBar barStyle='light-content' />

          <Left >
            <Button transparent onPress={() => navigate('Home')}>
              <Image style={styles.icon} source={require('./../image/fleche.png')} />
            </Button>
          </Left>
          <Body>
            <Text style={{ color: 'white', fontSize: 20 }}> Notes </Text>
          </Body>
          <Right />
        </Header>
        <Content style={{backgroundColor:'#5A56A2'}}>
          {tab_note}
        </Content>

        <Footer >
          <FooterTab style={styles.foot}>
            <Button>
              <Icon style={styles.hello} name="ios-home" onPress={() => navigate('Home')} />
            </Button>
            <Button>
              <Icon style={styles.hello} name="ios-paper" onPress={() => navigate('Note')} />
            </Button>
           
            <Button>
              <Icon style={styles.hello} name="ios-time" onPress={() => navigate('Absence')} />
            </Button>
            <Button>
              <Icon style={styles.hello} name="ios-calendar" onPress={() => navigate('Planning')} />
            </Button>
          </FooterTab>
        </Footer>
      </Container >
     

    )
  }
}

const styles = StyleSheet.create({

  matter: {
    fontSize: 22,
    color: 'red',
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
    backgroundColor: '#004080',
  },

  foot: {
    backgroundColor: '#004080',
  },
  body: {
    backgroundColor: '#878787',
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
  average: {
    textAlign: 'right',
    color: 'red',
    fontSize: 22

  }
})
