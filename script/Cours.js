import React from 'react'
import { Left, Right, Body, Text, Icon, Card, CardItem, Content, Thumbnail } from 'native-base'
import { StyleSheet, View, } from 'react-native'


export default class Cours extends React.Component {
  render () {
    var {day, month} = this.props;

    return (

        <Card>
        <CardItem>
          <Left>

                <Text>{day}</Text>
            
            <Body>
              <Text style={{color:'black'}}>Cours de SQL</Text>
              <Text note style={{color:'#0099E6'}}></Text>
            </Body>
          </Left>
        </CardItem>
        </Card>
    )
  }
}