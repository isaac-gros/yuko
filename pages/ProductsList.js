import React from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';

//Composants
import ProductInList from '../components/ProductInList';
import Loading from '../components/Loading';
import ScanButton from '../components/ScanButton';

export default class ProductsList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            productsListPage: 1,
            productsList: [],
        }
    }

    //Titre de navigation
    static navigationOptions = {
        title: 'Produits',
    };

    //DOM
    render() {
        if(this.state.isLoaded) {
            return (
                <View style={styles.width100}>
                    <View style={styles.productsContainer}>
                        <FlatList
                            horizontal={false}
                            numColumns={2}
                            keyExtractor={item => item.id}
                            data={this.state.productsList}
                            onEndReachedThreshold={0.1}
                            onEndReached={this.updatePagination}
                            renderItem={({ item }) => (
                                <ProductInList
                                    product_id={item.id}
                                    product_image={item.image_front_url}
                                    product_brand={(item.brands !== '') ? item.brands : 'Marque inconnue'}
                                ></ProductInList>
                            )}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <ScanButton></ScanButton>
                    </View>
                </View>
            );
        } else {
            return (
                <Loading message="Chargement des produits..."></Loading>
            )
        }
    }

    componentDidMount() {
        this.updateProductList();
    }

    updateProductList = () => {
        return fetch(`https://fr-en.openfoodfacts.org/category/waters/${this.state.productsListPage}.json`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    productsList: [...this.state.productsList, ...responseJson.products],
                    isLoaded: true,
                });
            }).catch((error) => {
                console.error(error);
        });
    }

    updatePagination = () => {
        this.setState({
            productsListPage: this.state.productsListPage + 1,
        }, () => {
            this.updateProductList();
        });
    }
}

//Styles
const styles = StyleSheet.create({
    width100: {
        width: '100%',
        backgroundColor: '#fff',
        flex: 1
    },
    productsContainer: {
        marginBottom: 75,
        backgroundColor: 'transparent'
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flex: 1,
    },
});