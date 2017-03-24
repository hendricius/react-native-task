import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Main from './Main.js'
import SecondView from './SecondView.js'

class NavigatorApp extends Component {
  renderScene(route, nav){
    switch (route.id) {
      case 'Main':
        return <Main navigator={nav}/>
      case 'SecondView':
        return <SecondView navigator={nav} elements={route.elements} title={route.title}/>
    }
  }
  render(){
    return (
      <Navigator
        initialRoute={{id:'Main'}}
        configureScene={(route)=>{
          return Navigator.SceneConfigs.FadeAndroid
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
