import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Main from './Main.js'

class NavigatorApp extends Component {
  renderScene(route, nav){
    switch (route.id) {
      case 'Main':
        return <Main navigator={nav}/>
    }
  }
  render(){
    return (
      <Navigator
        initialRoute={{id:'Main'}}
        configureScene={(route)=>{
          return Navigator.SceneConfigs.FloatFromRight
        }}
        renderScene={(route, navigator)=>
          {return this.renderScene(route, navigator)}
        }
      />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NavigatorApp
