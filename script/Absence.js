import React, { Component } from 'react'
import { Image, StyleSheet, StatusBar,Platform } from 'react-native'
import { Tab, Tabs, Container, Header, ActionSheet, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, } from 'native-base'
import Absence_justify from './AbsenceJustifier'
import Absence_injustify from './AbsenceInjustifier'
import Justification from './Justification'
import AbsenceBlock from './components/absences/AbsenceBlock'
var BUTTONS = ["Chat", "Support", "Devoir", "Cours", "Quizz", "Mon Compte", "X"]



class Absence extends Component {
  static navigationOptions = {
    header: null
    
  }
  render() {
    if (Platform.OS == 'android')
{
    styles.head = {backgroundColor: '#005799',paddingBottom:'15%', paddingTop:'5%', flex  : 1, flexDirection : 'row',justifyContent: 'space-between',}
}
    const { navigate } = this.props.navigation
    return (

      <Container>
        <Header hasTabs style={styles.head}>
          <StatusBar barStyle='light-content' />

          <Left >
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Image style={styles.icon} source={require('./../image/fleche.png')} />
            </Button>
          </Left>
          <Body>
            <Text style={{ color: 'white', fontSize: 20 }}> Absences </Text>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab heading="Injustifié">
            <Absence_injustify navigation={navigate}>
            </Absence_injustify>
          </Tab>
          <Tab heading="Justifié">
            <Absence_justify>
            </Absence_justify>
          </Tab>
        </Tabs>
        <Footer style={styles.foot}>
          <FooterTab>
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
      </Container>
 
    )
  }
}
export default Absence
const styles = StyleSheet.create({
  head: {
    backgroundColor: '#005799',
    paddingBottom: '5%',
  },
  seg: {
    backgroundColor: '#005799',
  },
  foot: {
    backgroundColor: '#005799',
  },
  body: {
    backgroundColor: '#f9f9fa',
  },
  hello: {
    color: 'white',
    

  },

  skill: {
    color: 'white',
    fontSize: 12,
  },
  Title: {
    color: 'white',
    fontSize: 14,
    paddingTop: '10%',
    textAlign: 'center',
  },
  honneur: {
    color: 'white',
    textAlign: 'center',
    fontSize: 10,
  },
  
  
  icon: {

    width: '40%',
    height: '100%',
  },


})
