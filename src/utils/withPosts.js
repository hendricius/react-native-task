import React, { Component as C } from 'react';
import axios from 'axios';

const withPosts = (reqUrl) => (Component) => {
  return class extends C {
    
    constructor() {
      super();

      this.state = {
        data: []
      }
    };

    componentDidMount() {
      axios.get(reqUrl)
        .then(response => response.data.data.children)
        .then(data => {
          const cardsData = data.reduce((obj, { data: item }) => {
            return [
              ...obj,
              { 
                 text: item.author,
                 score: item.score,
                 image: item.thumbnail,
              }
            ];
          }, []);
          this.setState({ data: cardsData })
        })
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //   return this.state.data != nextState.data;
    // };

    render() {
      const { data } = this.state;
      console.log('her', this.props);
      return (
        <Component data={data} {...this.props} />
      )
    }
  }
};

export default withPosts;