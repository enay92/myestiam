import React, { Component, Alert } from 'react';
import { WebView } from 'react-native';


class O365WebView extends Component {
    constructor(props) {
        super(props);
        this.onMessage = this.onMessage.bind(this);
    }

    onMessage(message) {
        console.log(message);
        Alert.alert('You\'ve got mail !', message, [{ text: 'Ok' }]);
    }

    render() {
        return (
            <WebView
                source={{ uri: 'https://api.captain.estiam.com' }}
                style={{ marginTop: 20 }}
                onMessage={event => console.log(event)}
            />
        );
    }
}

export default O365WebView;