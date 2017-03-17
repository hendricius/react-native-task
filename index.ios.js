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
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon
} from "native-base";
import Cards from './src/Components/Cards';

export default class App extends Component {
  render() {
    return (
      <Container>
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
      </Container>
    );
  }
};

AppRegistry.registerComponent('reddit', () => App);
