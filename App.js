import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './components/Navigation';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer style={{ margin: 0, padding: 0, width: '100%', flexDirection: 'column', flex: 1 }}/>;
  }
}