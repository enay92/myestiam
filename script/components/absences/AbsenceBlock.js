import React from 'react'
import { Button, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail, Content } from 'native-base'
var attention = "warning"
var infor = "info"
const AbsenceBlock = ({ date, name, justifie, lien }) => (
  
    <Card>
        <CardItem>
            <Left>
                <Thumbnail source={{ uri: 'https://static8.viadeo-static.com/vRyj2WncThPwOAd49eQPxrGZ8Qg=/fit-in/200x200/filters:fill(white)/5f2ca60e2eb64508b6aea3197f9d78d7/image.png' }} />
                <Body>
                    <Text>Absence du {date}</Text>
                    {<Text note>{justifie ? "Justifié" : "Non Justifié"}</Text>}
                </Body>
            </Left>
        </CardItem>
        <CardItem>
            <Body>
                <Content>
                {lien}
                </Content>
            </Body>
            <Right><Text title>{name}</Text></Right>
        </CardItem>
    </Card>
   
)

export default AbsenceBlock