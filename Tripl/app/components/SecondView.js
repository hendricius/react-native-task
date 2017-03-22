import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import TopBar from './TopBar'

class SecondView extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {

  }
  goToMainView(){
    this.props.navigator.pop()
  }
  render(){
    return (
      <View style={styles.container}>
        <TopBar
          leftIcon={{
            icon:'ios-arrow-dropleft-circle-outline',
            onPress:this.goToMainView.bind(this)
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SecondView
