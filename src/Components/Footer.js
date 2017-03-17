import { AppRegistry, StyleSheet, Text, View, Image, TabBarIOS  } from 'react-native';
import React, { Component } from "react";
import { 
  Footer,
  FooterTab,
  Button,
  Icon
} from "native-base";

export default () => {
  return (
    <View style={{
      backgroundColor: '#F8F7F4',
      position: 'absolute',
      width: '100%',
      bottom: 0,
    }}>
      <FooterTab>
        <Button>
            <Icon name="apps" />
        </Button>
        <Button>
            <Icon name="person" />
        </Button>
      </FooterTab>
    </View>
  );
};

StyleSheet.create({

})