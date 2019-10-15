import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Loading extends React.Component {
    
    render() {
        return (
            <View style={ styles.loading }>
                <Text>Chargement...</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loading: {
        height: '100%',
        width: '100%',
        lineHeight: 200,
        textAlign: 'center'
    }
})