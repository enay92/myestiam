import React, { Component, Alert } from 'react';
import { WebView } from 'react-native';


class Instagram extends Component {

    render() {
        return (
            <WebView
                source={{ uri: 'https://www.instagram.com/estiameducation/' }}
                style={{ marginTop: 20 }}
            />
        );
    }
}

export default Instagram;