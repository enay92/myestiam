import React from 'react'

import { Left, Right, Body, Text, Icon, Card, CardItem, Content } from 'native-base'
import { StyleSheet, View, } from 'react-native'

const NoteBlock = ({ matter, average, lesson, lesson2, lesson3, mark, mark2, mark3, commentary }) => (


    <Card styles={{backgroundColor: '#5A56A2'}}>

      <CardItem style={styles.titlefont}>
      <Left>
        <Body style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}> 
          <Content>
            <Text title style={styles.matter}>{matter}</Text>
          </Content> 
          <Content>  
          <Right>
            <Text title style={styles.average}>{average}</Text>
          </Right>
          </Content>
        </Body>
        </Left>
      </CardItem>


      <CardItem>

        <Body style={styles.lesson}>
          <Content style={styles.trait}>
            <Text />
          </Content>
          <Content>
            <Text>{lesson}</Text>
          </Content>
          <Content style={styles.trait}>
            <Text />
          </Content>
          <Content>
            <Text> {lesson2}</Text>
          </Content>
          <Content style={styles.trait}>
            <Text />
          </Content>
          <Content>
            <Text> {lesson3}</Text>
          </Content>
          <Content style={styles.trait}>
            <Text />
          </Content>
        </Body>

        <Right>
          <Content style={styles.trait}>
            <Text />
          </Content>
          <Content>
            <Text>{mark}</Text>
          </Content>
          <Content style={styles.trait}>
            <Text />
          </Content>
          <Content>
            <Text>{mark2}</Text>
          </Content>
          <Content style={styles.trait}>
            <Text />
          </Content>
          <Content>
            <Text>{mark3}</Text>
          </Content>
          <Content style={styles.trait}>
            <Text />
          </Content>
        </Right>

      </CardItem>


    </Card>

 

)

export default NoteBlock

const styles = StyleSheet.create({

  trait: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    borderWidth: 0.5,
    margin: 5,

  },
  titlefont: {
    backgroundColor: '#009B8F'
  },
  matter: {
    textAlign: 'left',
    fontSize: 18,
    color: 'white'

  },
  lesson: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
   
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
  average: {
    textAlign: 'right',
    fontSize: 19,
    color: 'white'

  }


})