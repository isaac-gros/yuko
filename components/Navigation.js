import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View,  } from 'react-native';

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#EEE',
        flexDirection: 'column',
        padding: 20,
        flex: 0.25,
    },
    title: {
        fontSize: 24
    },
    content: {
        fontSize: 16
    },
    input: {
        paddingTop: 20,
        paddingBottom: 20
    }
})

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    render() {
        return (
            <View style={[styles.box]}>
                <TextInput 
                    style={styles.input}
                    placeholder="Votre titre sera..."
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}></TextInput>
                <Text style={styles.title}>{this.state.text}</Text>
                <Text style={styles.content}>{this.props.content}</Text>
            </View>
        )
    }
}

export default Box;