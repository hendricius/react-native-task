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
        <Cards />
        <Footer />
      </View>
    );
  }
};

AppRegistry.registerComponent('reddit', () => App);
