import React, { Component } from 'react'
import { StyleSheet, ImageBackground, Image, StatusBar,PropTypes } from 'react-native'
import { Container, Title, Header, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, ActionSheet, Card, CardItem, View } from 'native-base'
import { AppLoading } from 'expo'
import ProfilBlock from './components/profil/profilBlock'

var BUTTONS = ["Chat", "Support", "Devoir", "Cours", "Quizz", "Mon Compte", "+"]

export default class Profil extends Component {
  

  
  static navigationOptions = {
    header: null
  }

  state = {
    fontLoaded: false
  }
  async componentWillMount() {
    try {
      await Expo.Font.loadAsync({
        'Roboto': require('./../node_modules/native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('./../node_modules/native-base/Fonts/Roboto_medium.ttf'),
      })
      this.setState({ fontLoaded: true })
    } catch (error) {
      console.log('erreur les fonts chargent pas yanso', error)
    }
  }

  reminder = () => {
  }

  render() {

    let pic = {
      uri: './../image/icon.png'
    }


    const profils = [
      {
        key: "4578",
        lvl: "82",
        connected: false,
        name: "Sion",
        pic: <Image source={require('./../image/icon.png')} />,
        title: "Chef Soldat de l'Estiam"
      },
      {
        key: "2568",
        lvl: "120",
        connected: true,
        name: "Marc",
        pic: <Image source={require('./../image/icon.png')} />,
        title: "Grand Maître de l'Estiam"
      },
      {
        key: "9863",
        lvl: "30",
        connected: false,
        name: "Solene",
        pic: <Image source={require('./../image/icon.png')} />,
        title: "Assistante Magicienne de l'Estiam"
      },
      {
        key: "5236",
        lvl: "15",
        connected: false,
        name: "Yanis",
        pic: <Image source={require('./../image/icon.png')} />,
        title: "Apprentit Soldat l'Estiam"
      },
    ]

    let i = 0

    const profil_co = profils.filter(profil => profil.connected)
    const profiles = profil_co.map(profil => {
      const temp = (
        <ProfilBlock key={`pro_${i}`} name={profil.name} pic={profil.pic} connected={profil.connected} title={profil.title} lvl={profil.lvl} />
      )
      i++
      return temp
    })


    const { navigate } = this.props.navigation

    if (!this.state.fontLoaded) {
      return <AppLoading />
    }

    return (
     
      <Container style={{ backgroundColor: '#F9F9FA' }}>

        <Header style={styles.head}>
          <StatusBar barStyle='light-content' />
          <Left >
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Image style={styles.icon} source={require('./../image/fleche.png')} />
              <Text note style={styles.skill} >
              </Text>
            </Button>
          </Left>
          {profiles}
          <Right />
        </Header>

        <Content>
          <Card>
            <CardItem>
              <Text> soso@hotmail.com</Text>
              </CardItem>
              <CardItem>
              <Text> 0636584978 </Text>
            </CardItem>
            <CardItem>
              <Text> Homme </Text>
              </CardItem>
              <CardItem>
              <Text> Etudiant de quatrième années </Text>
            </CardItem>
          </Card>
        </Content>

        <Footer style={styles.foot}>
          <FooterTab>
            <Button>
              <Icon style={styles.hello} name="home" onPress={() => navigate('Home')} />
            </Button>
            <Button>
              <Icon style={styles.hello} name="ios-paper" onPress={() => navigate('Note')} />
            </Button>
            <Button onPress={() =>
              ActionSheet.show(
                {
                  options: BUTTONS,

                  title: "My Estiam"
                },
                buttonIndex => {
                  this.setState({ clicked: BUTTONS[buttonIndex] })
                }
              )}>
              <Icon style={styles.hello} name="apps" />
            </Button>
            <Button>
              <Icon style={styles.hello} name="time" onPress={() => navigate('Absence')} />
            </Button>
            <Button>
              <Icon style={styles.hello} name="calendar" onPress={() => navigate('Planning')} />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    
    )
  }
}


const styles = StyleSheet.create({
  icon: {

    width: '40%',
    height: '100%',
  },
  head: {
    backgroundColor: '#09396A',
    paddingBottom: '40%'
  },
  foot: {
    backgroundColor: '#09396A',
  },
  body: {
    backgroundColor: '#f9f9fa',

  },
  hello: {
    color: 'white',
    fontSize: 30
  },
  skill: {
    color: 'white',
    fontSize: 12,
  },
  honneur: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
  text: {
  },
  Notes: {
    fontSize: 17,
    color: 'white',

  },
  lvl: {
    color: 'white',
    paddingTop: '10%'
  }
})