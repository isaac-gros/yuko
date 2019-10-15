import React from 'react';
import { View, Text } from 'react-native';

export default class Scan extends React.Component {
    
    //Titre de navigation
    static navigationOptions = {
        title: 'Scan',
    };

    //Apparence
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Scan</Text>
            </View>
        );
    }
}