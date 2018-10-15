import React from 'react'
import { Button, Left, Right, Body, Text, Card, CardItem} from 'native-base'
import {View} from 'react-native'
var attention = "warning"
var infor = "info"

let buttonstyle={margin : '100%', fontFamily:'Roboto_medium' }

const HomeBlock = ({ logo, name, note, image, note2 }) => (
  <Card>
    <CardItem>
      <Left>
        {logo}
        <Body>
          <Text >{name}</Text>
          <Text note>{note}</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem cardBody>
      {image}
    </CardItem>
    <CardItem>
      <Left>
      </Left>
      <Body sytle={buttonstyle}>
        {note2}
      </Body>
      <Right>
        <Text >11h ago</Text>
      </Right>
    </CardItem>
  </Card>

)

export default HomeBlock