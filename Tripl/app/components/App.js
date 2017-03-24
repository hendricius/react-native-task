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
import NavigatorApp from './NavigatorApp'
class App extends Component{
  renderMainView(){
    if(this.props.user){
      console.log('navigator');
      return(
        <NavigatorApp/>
      )
    } else {
      console.log('login');
      return(
        <Login/>
      )
    }
  }
  render(){
    return(
      <View style={{flex:1}}>
        {this.renderMainView()}
      </View>
    )
  }
}

var mapStateToProps = (state) => {
  return {
    user:state.logIn.user
  }
}

export default connect(mapStateToProps)(App)
