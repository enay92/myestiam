import React, { Component } from 'react'
import { Image, StyleSheet, StatusBar, Platform } from 'react-native'
import { Tab, TabHeading, Tabs, Container, Header, ActionSheet, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, TabStyle } from 'native-base'
import Absence_justify from './AbsenceJustifier'
import Absence_injustify from './AbsenceInjustifier'
import Justification from './Justification'
import AbsenceBlock from './components/absences/AbsenceBlock'
var BUTTONS = ["Chat", "Support", "Devoir", "Cours", "Quizz", "Mon Compte", "X"]

const styles = StyleSheet.create({
  head: {
    backgroundColor: '#EE7113',
    paddingBottom: '5%',
  },
  seg: {
    backgroundColor: '#004080',
  },
  foot: {
    backgroundColor: '#EE7113',
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

});

class Absence extends Component {
  static navigationOptions = {
    header: null

  }
  render() {
    if (Platform.OS == 'android') {
      styles.head = { backgroundColor: '#EE7113', paddingBottom: '15%', paddingTop: '5%', flex: 1, flexDirection: 'row', justifyContent: 'space-between', }
    }
    const { navigate } = this.props.navigation;

    const tabInjustheading = (<TabHeading style={{ backgroundColor: '#EE7113' }}>
      <Text style={{ color: '#FFF' }}>Injustifié</Text>
    </TabHeading>);


    const tabJustheading = (<TabHeading style={{ backgroundColor: '#EE7113' }}>
      <Text style={{ color: '#FFF' }}>Justifié</Text>
    </TabHeading>);
    return (

      <Container>
        <Header hasTabs style={styles.head}>
          <StatusBar barStyle='light-content' />
          <Left >
            <Button transparent onPress={() => navigate('Home')}>
              <Image style={styles.icon} source={require('./../image/fleche.png')} />
            </Button>
          </Left>
          <Body>
            <Text style={{ color: 'white', fontSize: 20 }}> Absences </Text>
          </Body>
          <Right />
        </Header>
        <Tabs style={{ backgroundColor: '#004080' }}>
          <Tab heading={tabInjustheading}>
            <Absence_injustify navigation={navigate}>
            </Absence_injustify>
          </Tab>
          <Tab heading={tabJustheading}>
            <Absence_justify>
            </Absence_justify>
          </Tab>
        </Tabs>
        <Footer >
          <FooterTab style={styles.foot}>
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

