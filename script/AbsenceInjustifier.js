import React, { Component } from 'react'
import { Container, Content, Button, Icon, Text, View } from 'native-base'
import AbsenceBlock from './components/absences/AbsenceBlock'
import Justification from './Justification'



export default class Absence_injustify extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    const navigate = this.props.navigation

    const Absences = [
      {
        type : "Absence",
        key: "7896",
        id: "1",
        justifie: false,
        name: "POO",
        date: "16 Fevrier",
        lien: <Button  style={{backgroundColor:'#FFEE00'}} onPress={() => navigate('Justification')}> 
             <Icon name='warning' style={{color:'#EE7113', marginRight:'-5%'}} />   
             <Text style ={{color:'#EE7113'}}>Justifier</Text>
              </Button>,
      },
      {
        type : "Absence",
        key: "4538",
        id: "2",
        justifie: false,
        name: "SQL",
        date: "17 Fevrier",
        lien: <Button  style={{backgroundColor:'#FFEE00'}} onPress={() => navigate('Justification')}> 
        <Icon name='warning' style={{color:'#EE7113', marginRight:'-5%'}} />   
        <Text style ={{color:'#EE7113'}}>Justifier</Text>
         </Button>,
      },
      {
        type : "Absence",
        key: "1496",
        id: "3",
        justifie: false,
        name: "Anglais",
        date: "22 Avril",
        lien: <Button  style={{backgroundColor:'#FFEE00'}} onPress={() => navigate('Justification')}> 
        <Icon name='warning' style={{color:'#EE7113', marginRight:'-5%'}} />   
        <Text style ={{color:'#EE7113'}}>Justifier</Text>
         </Button>,
      },
      {
        type : "Absence",
        key: "4538",
        id: "2",
        justifie: false,
        name: "CCNA",
        date: "22 Avril",
        lien:<Button  style={{backgroundColor:'#FFEE00'}} onPress={() => navigate('Justification')}> 
        <Icon name='warning' style={{color:'#EE7113', marginRight:'-5%'}} />   
        <Text style ={{color:'#EE7113'}}>Justifier</Text>
         </Button>,
      },
    ]
    let i = 0
    const abs_injustifie = Absences.filter(absence => !absence.justifie)
    const absences = abs_injustifie.map(absence => {
      const temp = (
        <AbsenceBlock key={`abs_${i}`} name={absence.name} date={absence.date} justifie={absence.justifie} lien={absence.lien} type={absence.type} />
      )
      i++
      return temp
    })

    return (
    
      <Container style={{backgroundColor:'#C0C4C4'}}>
        <Content>
          {absences}
        </Content>
      </Container >
   
    )
  }
}