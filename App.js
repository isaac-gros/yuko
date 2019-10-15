import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

/* 
 * Routes
 * --------
 */
import ProductsList from './pages/ProductsList';
import Scan from './pages/Scan';
import ProductPage from './pages/ProductPage';

const AppNavigator = createStackNavigator(
  {
    Produits: ProductsList,
    Scan: Scan,
    Produit: ProductPage,
  },
  {
    initialRouteName: 'Produits',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer style={{ margin: 0, padding: 0, width: '100%', flexDirection: 'column', flex: 1 }}/>;
  }
}