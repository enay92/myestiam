import React from 'react'

import { View, StyleSheet, StatusBar, Platform, height, width } from 'react-native'
import { Body, Text, Title, Image, Content, Container, Header, Left, Right, Button, Card, CardItem } from 'native-base'
import { Pensebete } from '../../PenseBete'

const Getreminder = (IsVisible) => {
    const s = [styles.reminderBar]
    if (IsVisible == false) {
        s.push(styles.reminderBar)
    }
    else if (IsVisible == true) {
        s.push()
    }
}

let remind= {backgroundColor: '#DFAF2C', paddingBottom: '6%',  borderWidth:0}
let remind2= {backgroundColor: '#DFAF2C', left: 10, height: 150, width: 60 }
let headstyle = { backgroundColor: '#005799', paddingBottom: '17%', paddingTop: '6%' }
let profilname = { textAlign: 'right', color: 'white', }
let picstyle = {}
let profiltitlename = { textAlign: 'center',  }

if (Platform.OS == 'android') {
    headstyle = { backgroundColor: '#005799', paddingBottom: '20%', paddingTop: '8%', flex: 1, flexDirection: 'row', justifyContent: 'space-between', }
    profilname = { paddingLeft: '13%', textAlign: 'center' }
    profiltitlename = { textAlign: 'center' }
    picstyle = { paddingRight: '19%' }
    remind2= {backgroundColor: '#DFAF2C', left: 10, height: 80, width: 60, top: 10, paddingLeft: 15,paddingBottom: 9}
}
if (Platform.OS == 'ios' || height == 812 || width == 812) {
    headstyle = { backgroundColor: '#005799' }
    picstyle
    remind={backgroundColor: '#DFAF2C', paddingBottom: '6%',  borderWidth:0}
    remind2= {backgroundColor: '#DFAF2C', left: 10, height: 60, width: 50, top: 10,paddingLeft: 10, paddingBottom: 7}
}

const HomeHeaderBlock = ({ name, title, lvl, pic, reminder }) => (
<View > 
    <Header style={headstyle}>
        <StatusBar barStyle='light-content'></StatusBar>
        <Left style={picstyle}>
            {pic}
            <Text note style={{ color: 'grey', fontSize: 12, }}>LvL {lvl}</Text>
        </Left>
        <Body>
            <Title style={profilname}>Hello {name}</Title>
            <Text note style={profiltitlename}>{title}</Text>
        </Body>
        <Right>
            <Button style= {remind2} onPress={() => Getreminder(Pensebete)}>
                {reminder}
            </Button>
        </Right>
        
    </Header>
    
    <Content style={remind}> 
              <Text style= {{ textAlign: 'center', color: 'black'}}> Cours de SQL en salle B5 </Text>
          </Content>
    </View>
    
    )
    
    export default HomeHeaderBlock
    
const styles = StyleSheet.create({

            reminderBar: {
            backgroundColor: 'red'
      }
})
