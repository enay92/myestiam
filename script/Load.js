import React, { Component } from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { LinearGradient } from 'expo'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Spinner } from 'native-base'

class Load extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {


    return (

      <View>
        <LinearGradient
          colors={['#073260', '#0A3E72', '#010A13']}
          style={styles.gradient}>
          <View style={styles.image}>
            <Image source={require('./../image/logo_estiam2.png')} onPress={() => navigate('Home')} />
          </View>

          <View style={styles.spine}>
            <Spinner color='white'/>
          </View>
        </LinearGradient>
      </View>
    )
  }
}
export default Load

const styles = StyleSheet.create({
  image: {
    alignItems: 'center',
    marginTop: '50%',
  },
  gradient: {
    height: '100%',
    width: '100%',
  },
  spine: {
    alignItems: 'center',
    marginTop: '40%',
  },
})