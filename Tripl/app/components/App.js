import React, {Component} from 'react';
import {connect} from 'react-redux'

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Login from './Login'

class App extends Component{
  onLogIn(){
    console.log('onLogIn');
  }
  render(){
    return(
      <Login/>
    )
  }
}

const styles = StyleSheet.create({
});


export default App
