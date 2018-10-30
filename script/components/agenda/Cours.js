import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base"
const styles = StyleSheet.create({

});

export default class Cours extends Component {

    render() {

        return (

                <Content padder>
                    <Card>
                        <CardItem footer bordered >
                            <Text>POO </Text>
                            <Text>en salle E</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    10:00 -
                                    13:00
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text style={{ color: 'blue', textAlign: 'center', fontWeight: 'bold', }}>
                                    Devoir :
                                </Text>
                                <Text>
                                    Faire les exercices 1a jusqu'au 5
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem footer bordered>
                            <Text>Langage C en salle A</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    14:00 -
                                    17:00
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text style={{ color: 'blue', textAlign: 'center', fontWeight: 'bold', }}>
                                    Devoir :
                                </Text>
                                <Text>
                                    Faire le jeux du juste prix en C
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
        );

    }

}
