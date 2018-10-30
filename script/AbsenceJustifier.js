import React, { Component } from 'react'
import { Container, Content,Button,Icon,Text } from 'native-base'
import AbsenceBlock2 from './components/absences/AbsenceBlock2'

export default class Absence_justify extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
 

    const Absences = [
      {
      
        justifie: true,
        name: "Langage C",
        date: "16 Octobre",
        type: "Absence",
        motif: "Malade",
        justificatif: true,
      },
      {
       
        justifie: true,
        name: "SQL",
        date: "26 Janvier",
        type: "Retard",
        motif: "Bus",
        justificatif: true,
      },
      {
       
        justifie: true,
        name: "Comportement Pro",
        date: "5 Mars",
        type: "Absence",
        motif: "Train",
        justificatif: false,
      },
      {
       
        justifie: false,
        name: "Dev Web",
        date: "26 Juin",
        type: "Absence",
        motif: "Train",
        justificatif: true,
      }
    ]

    let i = 0
    const abs_justifie = Absences.filter(absence => absence.justifie)
    const absences = abs_justifie.map(absence => {
      const temp = (
        <AbsenceBlock2 key={`abs_${i}`} name={absence.name} date={absence.date} justifie={absence.justifie} type={absence.type} motif={absence.motif} justificatif={absence.justificatif} />
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

