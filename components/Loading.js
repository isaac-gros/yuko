import React from 'react';
import { StyleSheet, View, Animated, Text, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Loading extends React.Component {
    
    constructor() {
        super();
        this.RotateValueHolder = new Animated.Value(0);
    }

    componentDidMount() {
        this.StartImageRotateFunction();
    }

    StartImageRotateFunction() {
        this.RotateValueHolder.setValue(0);
        Animated
            .timing(this.RotateValueHolder, {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
            })
            .start(() => this.StartImageRotateFunction());
    }
    
    render() {
    
        const RotateData = this.RotateValueHolder.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });
    
        return (
            <View style={ styles.container }>
                <Icon 
                    name="md-refresh-circle"
                    size={30} color="#fff"/>
                <Text style={ styles.loadingMessage }>{this.props.message}</Text>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        lineHeight: 200,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'rgb(41, 111, 225)'
    },
    loadingMessage: {
        color: '#fff',
    }
});