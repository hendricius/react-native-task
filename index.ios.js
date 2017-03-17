import { AppRegistry, StyleSheet, Text, View, Image  } from 'react-native';
import React, { Component } from "react";
import { 
  Container,
  CardItem,
  Card,
  Thumbnail,
  Header,
  DeckSwiper,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon
} from "native-base";
import Cards from './src/Components/Cards';
import Footer from './src/Components/Footer';



export default class App extends Component {

  constructor() {
    super();
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
  }

  state = {
    votes: {
      upvoted: [],
      downvoted: [],
    }
  };

  // defini upvote fn to be passed as callbacks
  upvote(subreddit) {
    console.log('upvoted');
    this.setState({
      votes: {
        upvodted: 'subreddit',
      }
    })
  }

  // define downvote fn to be passed as callbacks
  downvote(subreddit) {
    console.log('downvoted');
    this.setState({
      votes: {
        downvoted: 'subreddit',
      }
    });
  }


  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>RAAWWWW</Title>
          </Body>
          <Right />
        </Header>
        <Cards callbacks={{ 
            upvote: this.upvote, 
            downvote: this.downvote,
          }}
        />
        <Footer />
      </View>
    );
  }
};

AppRegistry.registerComponent('reddit', () => App);
