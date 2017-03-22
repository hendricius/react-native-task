import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class TopBar extends Component {
  constructor(props){
    super(props)
  }
  renderIconRight(){
    if(this.props.rightIcon){
      return(
        <TouchableHighlight onPress={this.props.rightIcon.onPress} underlayColor='transparent'>
            <Icon name={this.props.rightIcon.icon} size={30} color="white"/>
        </TouchableHighlight>
      )
    }
  }
  renderIconLeft(){
    if(this.props.leftIcon){
      return(
        <TouchableHighlight onPress={this.props.leftIcon.onPress} underlayColor='transparent'>
            <Icon name={this.props.leftIcon.icon} size={30} color="white"/>
        </TouchableHighlight>
      )
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.iconleft}>
          {this.renderIconLeft()}
        </View>
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.textHeader}>Tripl</Text>
          </View>
          <View>
            <Text>{this.props.user}</Text>
          </View>
        </View>
        <View style={styles.iconRight}>
          {this.renderIconRight()}
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingTop:20,
    paddingBottom:10,
    backgroundColor:'#6fa1f2',
  },
  textContainer:{
    alignItems:'center',
  },
  textHeader:{
    color:'white',
    fontSize:30
  },
  iconleft:{
    marginLeft:20,
  },
  iconRight:{
    marginRight:20
  },
});

var mapStateToProps = (state) => {
  return {
    user:state.logIn.user
  }
}

export default connect(mapStateToProps)(TopBar)
