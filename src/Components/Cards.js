import { Text, View, Image } from 'react-native';
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
import withPostsHoC from '../utils/withPosts';

const renderItem = ({ image, text, score, created }) => ( 
  <Card style={{ 
    elevation: 3,
  }}>
    <CardItem>
      <Left>
          {/*author image available somewhere?*/}
          {/*<Thumbnail source={{uri: image}} />*/}
          <Thumbnail source={{uri: "https://images-na.ssl-images-amazon.com/images/I/512svZc6D5L._AC_UL320_SR318,320_.jpg"}} />
      </Left>
      <Body>
        <Text note>author:</Text>
          <Text>{text}</Text>
      </Body>
    </CardItem>
    <CardItem cardBody>
        <Image
          style={{ 
            resizeMode: 'cover',
            width: null,
            flex: 1,
            height: 300
          }} 
          source={{uri: image}}
        />
    </CardItem>
    <CardItem>
      <Icon name="heart" style={{ color: '#ED4A6A' }} />
      <Text>{score}</Text>
      <Right>
        <Text>Recent?: {created}</Text>
      </Right>
    </CardItem>
  </Card>
);

const Cards = ({ data, ...props }) => {
  const { downvote, upvote } = props.callbacks;
  return (
    <View>
      {data.length === 0 
        ? <View><Text>Loading...</Text></View>
        : <DeckSwiper
            dataSource={data}
            onSwipeLeft={upvote}
            onSwipeRight={downvote}
            renderItem={renderItem}
          />
      }
    </View>
  );
}

const redditApi = "https://www.reddit.com/r/aww/new.json";
export default withPostsHoC(redditApi)(Cards);