import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import TopBar from './TopBar'
import ListViewItem from './ListViewItem'

class SecondView extends Component {
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(props.elements)
    }
  }
  goToMainView(){
    this.props.navigator.pop()
  }
  render(){
    return (
      <View style={styles.container}>
        <TopBar
          leftIcon={{
            icon:'ios-arrow-dropleft-circle-outline',
            onPress:this.goToMainView.bind(this)
          }}/>
        <View style={styles.listView}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData)=><ListViewItem data={rowData}/>}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listView:{
    marginBottom:90,
  },
});

export default SecondView
