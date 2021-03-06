import React, { Component } from 'react'
import Cours from './components/agenda/Cours'
import { LocaleConfig, Calendar, CalendarList, Agenda, calendarTheme, ActionSheet} from 'react-native-calendars'
import { StatusBar, StyleSheet, Image, View, Platform } from 'react-native'
import { Container, Header, Left, Button, Text, Body, Right, Footer, FooterTab,Icon } from 'native-base'



class Planning extends React.Component {

  static navigationOptions = {
    header: null
  }

  render() {
const {navigate}= this.props.navigation
    LocaleConfig.locales['fr'] = {
      monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
      monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
      dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
      dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
    }
    LocaleConfig.defaultLocale = 'fr'

    if (Platform.OS == 'android')
{
    styles.head = {backgroundColor: '#292A86',paddingBottom:'20%', paddingTop:'8%', flex  : 1, flexDirection : 'row',justifyContent: 'space-between',}
    
}

    return (
      <Container>
        <Header style={styles.head}>

          <StatusBar barStyle='light-content' />

          <Left >
            <Button transparent onPress={() => navigate('Home')}>
              <Image style={styles.icon} source={require('./../image/fleche.png')} />
            </Button>
          </Left>
          <Body>
            <Text style={{ color: 'white', fontSize: 20 }}> Calendrier </Text>
          </Body>
          <Right />
        </Header>

        <Agenda

          current={'2018-08-01'}
          minDate={'2016-09-01'}
          loadItemsForMonth={(month) => { console.log('trigger items loading', month) }}
          onCalendarToggled={(calendarOpened) => { console.log(calendarOpened) }}
          onDayPress={(day) => { console.log('selected day', day) }}
          onDayLongPress={(day) => { console.log('selected day', day) }}

          onDayChange={(day) => { console.log('day changed', day) }}
          onMonthChange={(month) => { console.log('month changed', month) }}
          renderItem={(item, firstItemInDay) => {
            return (

            <View >
              <Cours>
                {item}
                </Cours>
              </View>
              
              )
          }}
          renderDay={(day, item) => { return (<View />) }}
          renderEmptyDate={() => { return (<View />) }}
          renderEmptyData={() => { return (<View />) }}
       
          rowHasChanged={(r1, r2) => { return r1.text !== r2.text }}
          
          firstDay={1}

          
          onVisibleMonthsChange={(months) => { console.log('now these months are visible', months) }}
          
          pastScrollRange={50}

          futureScrollRange={50}
       
          scrollEnabled={true}
         
          showScrollIndicator={true}
         
          onRefresh={() => console.log('refreshing...')}
  
          refreshing={false}

          refreshControl={null}

          markedDates={{
            '2018-08-16': { marked: true },
            '2018-08-17': { marked: true },
            '2018-08-18': { marked: true },
            '2018-08-19': { disabled: true, disableTouchEvent: true }
          }}

        />

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
const styles = StyleSheet.create({
  head: {

    backgroundColor: '#292A86',
  },
  foot: {
    backgroundColor: '#292A86',
  },
  hello: {
    color: 'white',

  },
})
export default Planning