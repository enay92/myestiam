import React from 'react'
import renderIf from '../../renderif'
import { View, styleheet, StatusBar, Platform, height, width } from 'react-native'
import { Body, Text, Title, Image, Content, Container, Header, Left, Right, Button, Card, CardItem } from 'native-base'



if (Platform.OS == 'ios') {
    headstyle = { backgroundColor: "#004080", paddingTop: '90px', paddingBottom: '90px' }
    remind ={ backgroundColor: '#E84039', paddingBottom: '6%', borderWidth: 0 }
    remind2 = { backgroundColor: '#E84039', left: 10, height: 150, width: 60 }
    profilname = { textAlign: 'right', color: '#8AD2FA', color:'white' }
    profiltitlename = { textAlign: 'center',color: '#8AD2FA' }

}
if (Platform.OS == 'android') {
    remind ={ backgroundColor: '#E84039', paddingBottom: '6%', borderWidth: 0 }
    headstyle = { backgroundColor: '#004080', paddingBottom: '20%', paddingTop: '8%', flex: 1, flexDirection: 'row', justifyContent: 'space-between', }
    profilname = { paddingLeft: '13%', textAlign: 'center', color:'white' }
    profiltitlename = { textAlign: 'center', color: '#8AD2FA' }
    picstyle = { paddingRight: '19%' }
    remind2 = { backgroundColor: '#E84039', left: 10, height: 80, width: 60, top: 10, paddingLeft: 15, paddingBottom: 9 }

}
if (Platform.OS == 'ios' || height == 812 || width == 812) {

    profilname = { textAlign: 'right', color: 'white' }
    headstyle = { backgroundColor: '#004080' }
    profiltitlename={color: '#8AD2FA'}
    remind = { backgroundColor: '#E84039', paddingBottom: '6%', borderWidth: 0 }
    remind2 = { backgroundColor: '#E84039', left: 10, height: 60, width: 50, top: 10, paddingLeft: 10, paddingBottom: 7 }
}

export default class HomeHeaderBlock extends React.Component {
    
    constructor(){
        super();
        this.state ={
          status:false
        }
      }
    
      toggleStatus(){
        this.setState({
          status:!this.state.status
        });
      }
    
    render(){
        var {name, title, lvl, pic, reminder} = this.props;
        return (
            <View>

<Header style = {headstyle}>
            <StatusBar barStyle='light-content'></StatusBar>
            <Left style={picstyle}>
                {pic}
                <Text note style={{ color: '#8AD2FA', fontSize: 12, }}>LvL {lvl}</Text>
            </Left>
            <Body>
                <Title style={profilname}>Hello {name}</Title>
                <Text note style={profiltitlename}>{title}</Text>
            </Body>
            <Right>
                <Button style={remind2} onPress={() => this.toggleStatus()}>
                    {reminder}
                </Button>
            </Right>
</Header>
{renderIf(this.state.status)(
<Content style={remind}>

                <Text style ={{textAlign: 'center', color: '#FFEE00'}}>
                    Cours de SQL en salle B5
                </Text>

            </Content>
            )}
            </View>
        )
    }
}