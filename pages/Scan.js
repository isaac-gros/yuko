import React from 'react';
import { View, Text } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';

import Loading from '../components/Loading';
import BarCodeScanner from '../components/BarCodeScanner';

export default class Scan extends React.Component {
    
    //Titre de navigation
    static navigationOptions = {
        title: 'Scan',
    };

    state = {
        hasCameraPermission: null,
    };
    
    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    //onBarCodeScanned
    async scanBarCode(response) {
        alert(response);
    }

    //Apparence
    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <Loading message="Autorisation en cours..."></Loading>
        } else if (hasCameraPermission === false) {
            return <Loading message="L'accès à la caméra a échoué. Veuillez réessayer." icon="sad"></Loading>
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <BarCodeScanner></BarCodeScanner>
                </View>
            );
        }
    }
}