import React from 'react';
import { Platform, StyleSheet, View, Animated, Text, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Loading extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            iconPrefix: (Platform.OS == "ios" ? "ios-" : "md-")
        }
    }
    
    render() {
        return (
            <View style={ styles.container }>
                <Icon 
                    name={
                       this.state.iconPrefix + ((typeof(this.props.icon) !== "undefined") ? this.props.icon : "hourglass")
                    }
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
        width: '100%',
        textAlign: 'center',
    }
});