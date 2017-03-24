import React, { Component } from 'react';
import {connect} from 'react-redux'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class ListViewItem extends Component {
  renderReaction(){
    if(this.props.data.approved == null){
      return(
        <View></View>
      )
    }else if(this.props.data.approved){
      return(
        <Icon name={'ios-checkmark-circle'} size={30} color="green"/>
      )
    }else{
      return(
        <Icon name={'ios-close-circle'} size={30} color="red"/>
      )
    }
  }
  render(){
    const data = this.props.data.data;
    return (
      <View style={styles.container}>
        <Image style={styles.thumbnail} source={{uri: data.thumbnail}} />
        <View style={styles.titleText}>
          <Text>{data.title}</Text>
        </View>
        <View>
          {this.renderReaction()}
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems:'center',
    paddingTop:10,
  },
  thumbnail:{
    width:100,
    height:100
  },
  titleText:{
    width:220,
    marginLeft:20,
    marginRight:30,
  }
})

export default ListViewItem
