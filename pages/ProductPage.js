import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Loading from '../components/Loading';

export default class ProductsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productId: this.props.navigation.getParam('product_id', 0),
            productDetails: {},
            isLoaded: false,
            productTitle: 'Produit',
        }
    };

    //Apparence
    render() {

        if(this.state.isLoaded == true) {
            return (
                <View>
                    <Image style={ styles.productImage } resizeMode="contain" source={{uri: this.state.productDetails.image_front_url }}></Image>
                    <Text style={ styles.productName }>{this.state.productDetails.product_name}</Text>
                    <Text style={ styles.productBrand }>{this.state.productDetails.brands}</Text>
                </View>
            )
        } else {
            return (
                <Loading message="Chargement du produit..."></Loading>
            )
        }
    }

    componentDidMount() {
        return fetch('https://world.openfoodfacts.org/api/v0/product/' + this.state.productId + '.json')
        .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    productDetails: responseJson.product,
                    isLoaded: true,
                });
            }).catch((error) => {
                this.setState({
                    isLoaded: false,
                });
                console.error(error);
        });
    }
}

const styles = StyleSheet.create({
    productImage: {
        width: 'auto',
        height: 300,
    },
    productName: {
        width: '100%',
        textAlign: 'left',
        fontWeight: 'bold',
        padding: 5,
        fontSize: 12,
    },
    productBrand: {
        width: '100%',
        textAlign: 'left',
        fontWeight: 'normal',
        padding: 5,
    }
})