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
        console.log(response);
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
    console.log('handleYup',data);
  }
  handleNope(data){
    console.log('handleNope',data);
  }

  render(){
    console.log('render', this.state.cards);
    return (
      <View style={styles.container}>
        <TopBar/>
        <SwipeCards
          cards={this.state.cards}
          renderCard={(cardData) => <Card {...cardData} />}
          renderNoMoreCards={() => {return(<View></View>)}}
          handleYup={this.handleYup.bind(this)}
          handleNope={this.handleNope.bind(this)}
          showYup={false}
          showNope={false}
        />
      </View>
    );
  }
}

const Cards = [
  {text: 'Tomato', backgroundColor: 'red'},
  {text: 'Aubergine', backgroundColor: 'purple'},
  {text: 'Courgette', backgroundColor: 'green'},
  {text: 'Blueberry', backgroundColor: 'blue'},
  {text: 'Umm...', backgroundColor: 'cyan'},
  {text: 'orange', backgroundColor: 'orange'},
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main
