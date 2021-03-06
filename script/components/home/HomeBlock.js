import React from 'react'
import { Button, Left, Right, Body, Text, Card, CardItem } from 'native-base'
import { View } from 'react-native'
var attention = "warning"
var infor = "info"

let buttonstyle = { margin: '100%', fontFamily: 'Roboto_medium' }

const HomeBlock = ({ logo, name, note, image, note2 }) => (
  <Card style={{marginBottom:-3, marginTop:-2}}>
    <CardItem>
      <Left>
        {logo}
        <Body>
          <Text style={{color:'black'}}>{name}</Text>
          <Text note style={{color:'#0099E6'}}>{note}</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem cardBody>
      {image}
    </CardItem>
    <CardItem>
      <Left>
        <Text note >11h ago</Text>
      </Left>

      <Right>
        <Body sytle={buttonstyle}>
          {note2}
        </Body>
      </Right>
    </CardItem>
  </Card>

)

export default HomeBlock