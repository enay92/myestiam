import React from 'react'
import { Button, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail, Content } from 'native-base'

const AbsenceBlock2 = ({ date, name, justifie, justificatif, type, motif }) => (

    <Card>
        <CardItem>
            <Left>
                <Thumbnail source={{ uri: 'https://static8.viadeo-static.com/vRyj2WncThPwOAd49eQPxrGZ8Qg=/fit-in/200x200/filters:fill(white)/5f2ca60e2eb64508b6aea3197f9d78d7/image.png' }} />
                <Body>
                    <Text>{type} du {date}</Text>
                    {<Text note>{justifie ? "Justifié" : "Non Justifié"}</Text>}
                </Body>
            </Left>
        </CardItem>
        <CardItem>
            <Left>
                <Text note>{name}</Text>
            </Left>
            <Right>
                <Content>
                    <Text style={{textAlign:'center', justifyContent:'center', color:'#EE7113'}}>
                        {motif}
                    </Text>
                </Content>
                <Content>
                    <Text style={{color :'#FBBB1D'}}>
                        {justificatif ? "avec" : "sans"} justificatif
                    </Text>
                </Content>
            </Right>

        </CardItem>
    </Card>

)

export default AbsenceBlock2