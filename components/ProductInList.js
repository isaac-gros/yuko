import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import ProductInListButton from './ProductInListButton';


export default class ProductInList extends React.Component {

    //Apparence
    render() {
        return (
            <View style={styles.productInList}>
                <Image style={ styles.productImage } resizeMode="contain" source={{ uri: this.props.product_image }}></Image>
                <Text style={ styles.productBrand }>{this.props.product_brand}</Text>
                <ProductInListButton 
                    product_id={this.props.product_id}
                ></ProductInListButton>
            </View>
        );
    }
}

//Styles
const styles = StyleSheet.create({
    productInList: {
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        flex: 1/2,
        height: 300,
        padding: 15,
        marginHorizontal: 5,
        marginTop: 10,
    },
    productImage: {
        width: 'auto',
        height: 150,
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