import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import Card from './Card'
import TopBar from './TopBar'

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      cards: []
    }
  }
  componentDidMount() {
    fetch('https://www.reddit.com/r/aww.json').then(response => response.json()).then(
      response => {
        this.setState({
          cards:response.data.children
        })
      },
      error => {
        console.log('error', error);
      }
    )
  }
  handleYup(data){
    data.approved = true
  }
  handleNope(data){
    data.approved = false
  }
  goToSecondView(){
    this.props.navigator.push({id:'SecondView'})
  }
  render(){
    return (
      <View style={styles.container}>
        <TopBar
          rightIcon={{
            icon:'ios-arrow-dropright-circle-outline',
            onPress:this.goToSecondView.bind(this)
          }}/>
        <SwipeCards
          cards={this.state.cards}
          renderCard={(cardData) => <Card {...cardData} />}
          renderNoMoreCards={() => {return(<View></View>)}}
          handleYup={this.handleYup.bind(this)}
          handleNope={this.handleNope.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main
