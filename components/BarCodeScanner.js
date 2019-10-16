import React from 'react';
import { View, Vibration } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Camera } from 'expo-camera';

class BarCodeScanner extends React.Component {    

    render() {
        
        return (
            <Camera style={{ flex: 1 }} 
                    onBarCodeScanned={(response) => {
                        this.props.navigation.navigate('Produit', {product_id: response.data});
                    }}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View 
                            style={{
                                width: '60%',
                                borderStyle: 'dashed',
                                borderRadius: 1,
                                borderWidth: 3,
                                borderColor: '#fff',
                                alignSelf: 'center',
                                height: 130
                            }}
                        ></View>
                </View>
            </Camera>
        )
    }
}

export default withNavigation(BarCodeScanner);