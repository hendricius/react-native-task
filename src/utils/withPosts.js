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

    convertTimestampToDate(timestamp) {
      const date = new Date (timestamp * 1000);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      var seconds = date.getSeconds();
      return `${hours}:${minutes}:${seconds}`;
    }

    componentDidMount() {
      axios.get(reqUrl)
        .then(response => response.data.data.children)
        .then(data => {
          const cardsData = data.reduce(
            (obj, { data: { author, score, thumbnail, created } }) => {
            return [
              ...obj,
              { 
                 score,
                 text: author,
                 image: thumbnail,
                 created: this.convertTimestampToDate(created),
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