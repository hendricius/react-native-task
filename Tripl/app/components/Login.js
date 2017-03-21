import React, {Component} from 'react';
import update from 'react-addons-update';
import {connect} from 'react-redux'

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

class Login extends Component{
  constructor(props){
    super(props)
    this.state = {
      username:{value:'',error:null},
      password:{value:'',error:null},
    }
  }
  onLogin(){
    console.log('onLogin');
    if(this.state.username.value !=='' && this.state.password.value.toLowerCase() ==='password'){
      console.log('llama al dispatch');
    }else{
      this.onCheckInput()
    }
  }
  onCheckInput(){
    console.log('onCheckInput');
    if(this.state.username.value ===''){
      this.setState({
        username: update(this.state.username, {error: {$set: 'Introduce a username'}})
      })
    } else {
      this.setState({
        username: update(this.state.username, {error: {$set: null}})
      })
    }
    if(this.state.password.value ===''){
      this.setState({
        password: update(this.state.password, {error: {$set: 'Introduce a password'}})
      })
    } else if(this.state.password.value.toLowerCase() !=='password') {
      this.setState({
        password: update(this.state.password, {error: {$set: 'Wrong password'}})
      })
    } else{
      this.setState({
        password: update(this.state.password, {error: {$set: null}})
      })
    }
  }
  render(){
   let renderError = (error) => {
     if(error != null){
       return(
        <Text style={styles.errorText}>{error}</Text>
       )
     }
    }
    return(
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Tripl</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.field}>
            <TextInput
              style={styles.textInput}
              placeholder='Username'
              onChangeText={(text) => this.setState({username:{value:text}})}
            />
            <View>
              {renderError(this.state.username.error)}
            </View>
          </View>
          <View style={styles.field}>
            <TextInput
              style={styles.textInput}
              placeholder='Password'
              secureTextEntry = {true}
              onChangeText={(text) => this.setState({password:{value:text}})}
            />
            <View>
              {renderError(this.state.password.error)}
            </View>
          </View>
        </View>
        <View style={styles.buttonLogIn}>
          <TouchableOpacity onPress={this.onLogin.bind(this)}>
              <Text style={styles.buttonText}>
                Log In
              </Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20,
    backgroundColor:'#6fa1f2',
  },
  title:{
    alignItems:'center',
  },
  titleText:{
    color:'white',
    fontSize:50,
  },
  formContainer:{
    flexDirection: 'column',
    marginTop:30,
  },
  field:{
    borderRadius:5,
    padding:5,
    paddingLeft:10,
    margin:20,
    marginBottom:10,
    backgroundColor:'white',
  },
  textInput:{
    height:30,
  },
  buttonLogIn:{
    alignItems:'center',
    backgroundColor:'#0c55cc',
    padding:15,
    borderRadius:5,
    margin:50,
    marginTop:20,
  },
  buttonText:{
    color:'white',
  },
  errorText:{
    color:'red',
  },
});


export default Login
