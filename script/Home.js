import React, { Component } from 'react'
import renderIf from './renderif'
import Load from './Load'
import { Image, StyleSheet, View, Text,Platform } from 'react-native'
import HomeBlock from './components/home/HomeBlock'
import HomeHeaderBlock from './components/home/HomeHeaderBlock'
import { Container, Content, Footer, FooterTab, Button, Icon, Thumbnail, ActionSheet, CardItem, Card, Header } from 'native-base'

var BUTTONS = ["Chat", "Support", "Devoir", "Cours", "Quizz", "Mon Compte", "X"]


class Home extends Component {

state ={
    fontLoaded: false
  }
  

  static navigationOptions = {
    header: null
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
  render() {


    const fluxs = [
      {
        logo: <Thumbnail source={require('./../image/siren.jpg')} />,
        name: "Absence",
        note: "Pensez à justifier vos absences",
        image: <Image source={require('./../image/run.gif')} style={{ height: 180, width: null, flex: 1 }} />,
        note2: <Button  style={styles.warning} onPress={() => navigate('Absence')}>
          <Text style={{ includeFontPadding: false, color: 'yellow', paddingLeft: '16%' }}>JUSTIFIER</Text>
        </Button>,
      },
      {
        logo: <Thumbnail source={require('./../image/newspaper.png') } />,
        name: "Estiam News",
        note: "Les étudiants de Master 1 ont participé à un hackathon organisé en collaboration avec le Grand Paris Express",
        image: <Image source={require('./../image/hackathon.jpg')} style={{ height: 150, width: null, flex: 1 }} />,
        note2: <Button  style={styles.info} onPress={() => navigate('Instagram')} >
          <Text style={{ includeFontPadding: false, color: 'black', paddingLeft: '16%' }}>Savoir plus</Text>
        </Button>,
      },
      {
        logo: <Thumbnail source={ require('./../image/newspaper.png') } />,
        name: "Estiam News",
        note: "l'école au 52ème étage de la Tour Montparnasse !! ça fait haut quand même",
        image: <Image source={require('./../image/tour.jpeg')} style={{ height: 130, width: null, flex: 1 }} />,
        note2: <Button  style={styles.info} onPress={() => navigate('Instagram')}>
          <Text style={{ includeFontPadding: false, color: 'black', paddingLeft: '16%' }}>Savoir plus</Text>
        </Button>,
      },
      {
        logo: <Thumbnail source={ require( './../image/newspaper.png') }/>,
        name: "Estiam News",
        note: "Y'aurait-il des micros dans l'enceinte de l'école ?!",
        image: <Image source={require('./../image/bigbrother.png')} style={{ height: 150, width: null, flex: 1 }} />,
        note2: <Button  style={styles.info} onPress={() => navigate('Instagram')} >
          <Text style={{ includeFontPadding: false, color: 'black', paddingLeft: '16%' }}>Savoir plus</Text>
        </Button>,
      },
    ]
    let i = 0
    const flux = fluxs.map(flu => {
      const temp = (
        <HomeBlock key={`flx_${i}`} logo={flu.logo} name={flu.name} note={flu.note} image={flu.image} note2={flu.note2} />
      )
      i++
      return temp
    })


    const profils = [
      {
        key: "4578",
        lvl: "82",
        connected: false,
        name: "Sion",
        pic: <Image source={require('./../image/icon.png')} />,
        title: "Chef Soldat de l'Estiam",
        reminder: <Image source={require('./../image/reminder.png')} />
      },
      {
        key: "2568",
        lvl: "120",
        connected: false,
        name: "Marc",
        pic: <Image source={require('./../image/icon.png')} />,
        title: "Grand Maître de l'Estiam",
        reminder: <Image source={require('./../image/reminder.png')} />
      },
      {
        key: "9863",
        lvl: "30",
        connected: true,
        name: "Solene",
        pic: <Button transparent onPress={() => navigate('profil')}>
          <Image source={require('./../image/icon.png')} /> </Button>,
        title: "Assistante Magicienne de l'Estiam",
        reminder: <Image source={require('./../image/reminder.png')} />
      },
      {
        key: "5236",
        lvl: "15",
        connected: false,
        name: "Yanis",
        pic: <Image source={require('./../image/icon.png')} />,
        title: "Apprentit Soldat l'Estiam",
        reminder: <Image source={require('./../image/reminder.png')} />
      },
    ]
    let r = 0

    const student = {
      name: 'Test',
      pic: '',
      connected: '',
      title: '',
      lvl: '',

    }
    const prf = profils[1];
    const profil = <HomeHeaderBlock key={`prf_${r}`} name={prf.name} pic={prf.pic} connected={prf.connected} title={prf.title} lvl={prf.lvl} reminder={prf.reminder} />
    const { navigate } = this.props.navigation
    if (!!this.state.fontLoaded) {
      return (
        <Container style={{ backgroundColor: '#ffff' }}>
          {profil}
          <Content style={styles.body}>
            {flux}
          </Content>
          <Footer >
            <FooterTab style={styles.foot}>
              <Button onPress={() => navigate('Home')}>
                <Icon style={styles.hello} name="ios-home"  />
              </Button>
              <Button onPress={() => navigate('Note')}>
                <Icon style={styles.hello} name="ios-paper" />
              </Button>
              
              
              <Button onPress={() => navigate('Absence')}>
                <Icon style={styles.hello} name="ios-time"  />
              </Button>
              <Button onPress={() => navigate('Planning')}>
                <Icon style={styles.hello} name="ios-calendar"  />
              </Button>
            </FooterTab>
          </Footer>
        </Container>


      )
    }
    else
      return (
        <View>
        <Load/>
        </View>
      )
  }
}
const styles = StyleSheet.create({
headstyle :{
  backgroundColor: '#004080', paddingBottom: '17%', paddingTop: '6%' 
},
  head: {
    backgroundColor: '#005799'
  },

  foot: {
    backgroundColor: '#004080'
  },
  body: {
    backgroundColor: '#C0C4C4',
    
  }, 
  hello: {
    textAlign: 'center',
    color: 'white'

  },
  hello2:{
    backgroundColor: 'white',
    alignItems:'center'

  },
  warning :{
    backgroundColor :'#EE7113',
    marginRight: 20,
    width: 100
  },
  info :{
    backgroundColor: '#8AD2FA',
    marginRight: 30,
     width: 100,
  },

  skill: {

    color: 'red',
    fontSize: 12
  },
  honneur: {

    color: 'green',
    textAlign: 'center',
    fontSize: 10
  },
  reminderBar: {
    backgroundColor: 'red'
  }


})
if (Platform.OS == 'ios') {
  headstyle = { backgroundColor: "#004080" }

}


  export default Home
