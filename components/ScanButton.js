import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

class ScanButton extends React.Component {
    render() {
        return (
            <TouchableHighlight 
                style={{
                    backgroundColor: 'rgb(70, 154, 233)',
                    padding: 20,
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    marginHorizontal: 0,
                }}
                underlayColor='rgb(39, 105, 225)'
                onPress={() => {
                    this.props.navigation.navigate('Scan');
                }}>
                <Icon name="md-camera" size={30} color="#fff"></Icon>
            </TouchableHighlight>
        )
    }
}

export default withNavigation(ScanButton);