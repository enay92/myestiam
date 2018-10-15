import React, { Component } from 'react'
import { Alert, Text, TextInput, StyleSheet, StatusBar, Picker, View, Image, TouchableOpacity } from 'react-native'
import { Container, Header, Title, Content, Accordion, Footer, FooterTab, Button, Left, Right, Body, Icon, ActionSheet, Textarea, DatePicker, Input } from 'native-base'
import { AppLoading, DocumentPicker, ImagePicker } from 'expo'
import RNPickerSelect from 'react-native-picker-select'



var BUTTONS = ["Chat", "Support", "Devoir", "Cours", "Quizz", "Mon Compte", "+"]

class Justification extends Component {
    static navigationOptions = {
        header: null
    }

    state = {
        fontLoaded: false,
        image: null,
    }

    _pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({})
        alert(result.uri)
        console.log(result)
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        })

        alert(result.uri)
        console.log(result)

        if (!result.cancelled) {
            this.setState({ image: result.uri })
        }
    }

    async componentWillMount() {
        try {
            await Expo.Font.loadAsync({
                'Roboto': require('./../node_modules/native-base/Fonts/Roboto.ttf'),
                'Roboto_medium': require('./../node_modules/native-base/Fonts/Roboto_medium.ttf'),
            })
            this.setState({ fontLoaded: true })
        } catch (error) {
            console.log('erreur les fonts chargent pas yanso', error)
        }
    }

    reminder = () => {

    }
    constructor(props) {
        super(props)

        this.inputRefs = {}

        this.state = {

            chosenDate: new Date(),
            ABSRetard: undefined,
            items: [
                {
                    label: 'Absence',
                    value: 'absence',
                },
                {
                    label: 'Retard',
                    value: 'retard',
                },

            ],
            motif: undefined,
            items2: [
                {
                    label: 'Bus',
                    value: 'bus',
                },
                {
                    label: 'Train',
                    value: 'train',
                },
                {
                    label: 'Malade',
                    value: 'malade',
                },
                {
                    label: 'Autre',
                    value: 'autre',
                },
            ],
        }
        this.setDate = this.setDate.bind(this)
    }

    setDate(newDate) {
        this.setState({ chosenDate: newDate })

    }


    render() {
        const { navigate } = this.props.navigation
        if (!this.state.fontLoaded) {
            return <AppLoading />
        }
        let { image } = this.state
        return (
           
            <Container>
                <Header style={styles.head}>
                    <StatusBar barStyle='light-content' />
                    <Left >
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Image style={styles.icon} source={require('./../image/fleche.png')} />
                            <Text note style={styles.skill} >
                            </Text>

                        </Button>

                    </Left>
                    <Body>
                        <Title style={styles.justi}>
                            Justification
                </Title>
                    </Body>
                    <Right />

                </Header>

                <View style={styles.container}>


                    <View style={{ paddingVertical: '5%', paddingBottom: '2%' }} />

                    <Text>Absence/retard</Text>
                    <RNPickerSelect
                        placeholder={{
                            label: 'Select',
                            value: null,
                        }}
                        items={this.state.items}
                        onValueChange={(value) => {
                            this.setState({
                                ABSRetard: value,
                            })
                        }}
                        onUpArrow={() => {
                            this.inputRefs.name.focus()
                        }}
                        onDownArrow={() => {
                            this.inputRefs.picker2.togglePicker()
                        }}
                        style={{ ...pickerSelectStyles }}
                        value={this.state.ABSRetard}
                        ref={(el) => {
                            this.inputRefs.picker = el
                        }}
                    />

                    <View style={{ paddingVertical: '5%', paddingBottom: '2%' }} />

                    <Text>Motif</Text>
                    <RNPickerSelect
                        placeholder={{
                            label: 'Select',
                            value: null,
                        }}
                        items={this.state.items2}
                        onValueChange={(value) => {
                            this.setState({
                                motif: value,
                            })
                        }}
                        onUpArrow={() => {
                            this.inputRefs.picker.togglePicker()
                        }}
                        onDownArrow={() => {
                            this.inputRefs.company.focus()
                        }}
                        style={{ ...pickerSelectStyles }}
                        value={this.state.motif}
                        ref={(el) => {
                            this.inputRefs.picker2 = el
                        }}
                    />

                    <View style={{ paddingVertical: '5%', paddingBottom: '4%' }}>
                        <DatePicker
                            defaultDate={new Date()}
                            minimumDate={new Date(2018, 1, 1)}
                            maximumDate={new Date(2050, 12, 31)}
                            locale={"fr"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Select date"
                            textStyle={{ color: "green" }}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={this.setDate}
                        />
                        <Text>
                            Date: {this.state.chosenDate.toString().substr(4, 12)}
                        </Text>
                    </View>


                    <Text>Justification</Text>
                    <Textarea rowSpan={5} bordered
                        ref={(el) => {
                            this.inputRefs.company = el
                        }}
                        returnKeyType="go"
                        enablesReturnKeyAutomatically
                        style={pickerSelectStyles.inputIOS}
                        onSubmitEditing={() => {
                            Alert.alert('Success', 'Form submitted', [{ text: 'Okay', onPress: null }])
                        }}
                    />

                </View>
               
                    <Button
                        title="Select Document"
                        onPress={this._pickDocument}
                    />

                    
                        <Button
                            title="Select Image"
                            onPress={this._pickImage}
                        />
                        {image &&
                            <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                            <Button first active style ={styles.bouton} > <Text> Envoyer </Text> </Button> 
            </Container>
          
        )
    }
}

const styles = StyleSheet.create({

  bouton :{
    alignItems: 'center',
  },

    container: {
        paddingTop: 30,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },

    justi: {
        marginTop: '2%',
        color: 'white',
    },

    head: {
        backgroundColor: '#09396A',
    },
    
    picker: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
})

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
})

export default Justification