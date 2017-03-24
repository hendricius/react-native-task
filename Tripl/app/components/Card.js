import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Card extends Component {

  render(){
    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{uri: this.props.data.thumbnail}} />
        <Text>{this.props.data.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnail:{
    width:200,
    height:200
  }
})

export default Card
