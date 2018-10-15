import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Body, Text, Title, Right,Left,Image } from 'native-base'





const ProfilBlock = ({ name, title, lvl, pic }) => (
 
    <Body style={{ paddingBottom: '10%', paddingTop: '30%' }} >
        <Title style={{ color: 'white' }}>{name}</Title>
        {pic}
        <Text note style={{ color: 'red', textAlign: 'center', fontSize: 14, maxWidth: '100%' }}>{title}</Text>
        <Text note style={{ color: 'white', paddingTop: '10%' }}> LVL {lvl}</Text>
    </Body>
 
)

export default ProfilBlock

const styles = StyleSheet.create({
    namep:
    {

    }
})
