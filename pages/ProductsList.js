import React from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import ProductInList from '../components/ProductInList';
import Loading from '../components/Loading';

export default class ProductsList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
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
                    <FlatList
                        horizontal={false}
                        numColumns={2}
                        data={this.state.productsList}
                        renderItem={({ item }) => (
                            <ProductInList
                                product_id={item.id}
                                product_image={item.image_front_url}
                                product_name={item.product_name}
                                product_brand={item.brands}
                            ></ProductInList>
                        )}
                        keyExtractor={item => item.id}
                        //product_name + brand + id + image_front_url
                    />
                </View>
            );
        } else {
            return (
                <Loading></Loading>
            )
        }
    }

    componentDidMount() {
        return fetch('https://fr-en.openfoodfacts.org/category/waters.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    productsList: responseJson.products,
                    isLoaded: true,
                });
            }).catch((error) => {
                console.error(error);
        });
    }
}

//Styles
const styles = StyleSheet.create({
    width100: {
        width: '100%'
    },
});