import React from 'react';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class ProductInListButton extends React.Component {
  render() {
    return (
      <Button
        title="Voir"
        onPress={() => {
            this.props.navigation.navigate('Produit', {product_id: this.props.product_id});
        }}/>
    );
  }
}

export default withNavigation(ProductInListButton);