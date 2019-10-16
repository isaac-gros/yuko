import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

/* 
 * Routes
 * --------
 */
import ProductsList from '../pages/ProductsList';
import Scan from '../pages/Scan';
import ProductPage from '../pages/ProductPage';

export default createStackNavigator(
  {
    Produits: ProductsList,
    Scan: Scan,
    Produit: ProductPage,
  },
  {
    initialRouteName: 'Produits',
  }
);