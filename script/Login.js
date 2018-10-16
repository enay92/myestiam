import React from 'react';
import { Platform } from 'react-native';
import { StyleSheet, View, Image, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo';
import { Button, Text, } from 'native-base';


class Login extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <LinearGradient style={styles.gradient} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}
        colors={['#A7AFB7', '#073260']}>

        <View style={styles.logo}>
          <Image source={require('./../image/logo_estiam2.png')} />
        </View>

        <Text style={{ marginLeft: '25%', color: 'white' }}>Your studies companion. </Text>
        
        <TouchableOpacity activeOpacity={.5} onPress={() => navigate('Home')}>
          <LinearGradient colors={['#01254E', '#041324']} start={{ x: 0, y: 0 }} end={{ x: 1.3, y: 0 }} style={styles.LinearGradientStyle} >
            <Text style={styles.text}> LOG IN</Text>
            <Image style={{ marginLeft: '28%', marginTop: '2%' }}
              source={require('./../image/office.png')}>
            </Image>
          </LinearGradient>
        </TouchableOpacity>
        <Button transparent light style={{ marginLeft: '40%', marginTop: 'auto' }} onPress={() => navigate('Home')}>
          <Text>Guest</Text>
        </Button>
      </LinearGradient>

    );
  }
}
export default Login



const styles = StyleSheet.create({
  logo: {
    marginTop: '60%',
    alignItems: 'center',
    justifyContent: 'center'
  },


  gradient: {
    width: '100%',
    height: '100%',
  },

  text: {


    marginTop: '5%',
    marginLeft: '40%',
    color: 'white'

  },
  LinearGradientStyle: {

    flexDirection: 'row',
    paddingBottom: '2%',
    marginLeft: '5%',
    width: '90%',
    marginTop: '15%',
    borderRadius: 10

  },
});
