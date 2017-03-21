import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


class TopBar extends Component {
  render(){
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.textHeader}>Tripl</Text>
        </View>
        <View>
          <Text>{this.props.user}</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    paddingTop:20,
    paddingBottom:10,
    backgroundColor:'#6fa1f2',
  },
  textHeader:{
    color:'white',
    fontSize:30
  },
});

var mapStateToProps = (state) => {
  return {
    user:state.logIn.user
  }
}

export default connect(mapStateToProps)(TopBar)
