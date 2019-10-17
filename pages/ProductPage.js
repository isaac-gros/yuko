import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Loading from '../components/Loading';

export default class ProductsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productId: this.props.navigation.getParam('product_id', 0),
            productDetails: {},
            status: 'loading',
        }
    };

    //Apparence
    render() {
        
        switch(this.state.status) {
            case 'loaded' :
                return (
                    <View>
                        <Image 
                            style={ styles.productImage } 
                            resizeMode="contain" 
                            source={{uri: this.state.productDetails.image_front_url }}
                            defaultSource={require('../assets/noimage.jpg')}
                        ></Image>
                        <Text style={ styles.productName }>{this.state.productDetails.product_name}</Text>
                        <Text style={ styles.productBrand }>{this.state.productDetails.brands}</Text>
                    </View>
                )
            case 'not_found_in_waters' :
                return (
                    <Loading 
                    message="Le produit scanné existe mais n'est pas repertorié dans la liste des bouteilles d'eaux." 
                    icon="information-circle-outline"></Loading>
                )
            case 'not_found' :
                return (
                    <Loading message="Le produit est introuvable." icon="help"></Loading>
                )
            case 'error' :
                return (
                    <Loading message="Le chargement du produit a échoué." icon="sad"></Loading>
                )
            default :
                return (
                    <Loading message="Chargement du produit..."></Loading>
                )
        }
    }

    componentDidMount() {
        return fetch('https://world.openfoodfacts.org/api/v0/water/' + this.state.productId + '.json')
        .then((response) => response.json())
            .then((responseJson) => {

                let product = (typeof(responseJson.product) !== undefined) ? responseJson.product : false;
                let status = responseJson.status;
                let keywordsPattern = ['l\'eau', 'eau', 'eaux', 'water', 'waters', 'agua'];

                if(product) {

                    for(let i = 0; i < keywordsPattern.length; i++) {
                        if(product._keywords.includes(keywordsPattern[i]) && status == 1) {
                            this.setState({
                                status: "loaded",
                                productDetails: product,
                            });
                            break;
                        } else if (status == 1) {
                            this.setState({
                                status: "not_found_in_waters"
                            });
                        }
                    }
                } else {
                    this.setState({
                        status: "not_found"
                    });
                }

            }).catch((error) => {
                this.setState({
                    status: "error",
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