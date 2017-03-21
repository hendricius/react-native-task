/**
 * React Native App Task
 * Leticia Trinidad Valderas Rodriguez
 * https://github.com/monaLeti
 */

import React, { Component } from 'react';
import {Provider} from "react-redux";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {configureStore} from './app/store'
import App from './app/components/App'

export default class Tripl extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <App/>
      </Provider>
    );
  }
}
AppRegistry.registerComponent('Tripl', () => Tripl);
