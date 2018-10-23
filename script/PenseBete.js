import React from 'react'
import {Content, Text} from 'native-base'
import {StyleSheet, Platform} from 'react-native'


const PenseBete =({name, salle}) =>(
            <Content style={remind}>
                <Text style ={{textAlign: 'center', color: 'black'}}>
                    Cours de SQL en salle B5
                </Text>
            </Content>
        )
        export default PenseBete

        let remind = {backgroundColor:'#DFA2C', paddingBottom:'6%', borderWidth:0}

        if (Platform.OS == 'android') {
            remind = {backgroundColor:'#DFA2C', paddingBottom:'6%', borderWidth:0} 
        }

        if (Platform.OS =='ios') {
            remind = {backgroundColor:'#DFA2C', paddingBottom:'6%', borderWidth:0}
        }
        
            
