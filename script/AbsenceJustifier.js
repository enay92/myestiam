import React, { Component } from 'react'
import { Container, Content,Button,Icon,Text } from 'native-base'
import AbsenceBlock from './components/absences/AbsenceBlock'

export default class Absence_justify extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
 

    const Absences = [
      {
        key: "4578",
        id: "1",
        justifie: true,
        name: "Langage C",
        date: "16 Octobre",
        lien: <Button info ><Text>Voir</Text>
        <Icon name= 'ios-build' />
    </Button>,
      },
      {
        key: "5896",
        id: "2",
        justifie: true,
        name: "SQL",
        date: "26 Janvier",
        lien: <Button info ><Text>Voir</Text>
        <Icon name= 'ios-build' />
    </Button>,
      },
      {
        key: "1248",
        id: "3",
        justifie: true,
        name: "Comportement Pro",
        date: "5 Mars",
        lien: <Button info ><Text>Voir</Text>
        <Icon name= 'ios-build' />
    </Button>,
      },
      {
        key: "9645",
        id: "4",
        justifie: false,
        name: "Dev Web",
        date: "26 Juin",
        lien: <Button info ><Text>Voir</Text>
        <Icon name= 'ios-build' />
    </Button>,
      }
    ]

    let i = 0
    const abs_justifie = Absences.filter(absence => absence.justifie)
    const absences = abs_justifie.map(absence => {
      const temp = (
        <AbsenceBlock key={`abs_${i}`} name={absence.name} date={absence.date} justifie={absence.justifie} lien={absence.lien} />
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

