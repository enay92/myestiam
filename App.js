import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Root } from 'native-base';
import Load from './script/Load';
import Home from './script/Home';
import Planning from './script/Planning';
import Absence from './script/Absence';
import Note from './script/Note';
import Profil from './script/Profil';
import Login from './script/Login';
import Justification from './script/Justification';
import Absence_justify from './script/AbsenceJustifier';
import Absence_injustify from './script/AbsenceInjustifier';
import O365Login from './script/connection/O365WebView';
import Instagram from './script/Instagram';


export default class App extends React.Component {
  state = {
    fontLoaded: false
  };
  async componentWillMount() {
    try {
      await Expo.Asset.loadAsync([
        require('./image/siren.png'),
        require('./image/run.gif'),
        require('./image/hackathon.jpg'),
        require('./image/ring-bell.png'),
        require('./image/tour.jpeg'),
        require('./image/bigbrother.png'),
        require('./image/icon.png'),
        require('./image/reminder.png'),
        require('./image/siren.gif')
  
        ])
      await Expo.Font.loadAsync({
        'Roboto': require('./node_modules/native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('./node_modules/native-base/Fonts/Roboto_medium.ttf'),
      });
      this.setState({ fontLoaded: true });
    } catch (error) {
      console.log('erreur les fonts chargent pas yanso', error);
    }
  }
  render() {
    if (this.state.fontLoaded) {
      return (
        <Root>
          <AppStackNavigator />
        </Root>
      );
    }
    else
      return (
        <View>
          <Load/>
        </View>
      );
  }
}
const AppStackNavigator = createStackNavigator({
  Load,
  Login,
  O365Login,
  Home,
  Instagram,
  Profil,
  Planning,
  Absence,
  Absence_justify,
  Absence_injustify,
  Justification,
  Note
}, {
    initialRouteName: 'Login',
    transitionConfig
  })

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps

      const thisSceneIndex = scene.index
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      })

      return { transform: [{ translateX }] }

    }
  }
}