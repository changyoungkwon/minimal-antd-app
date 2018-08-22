import React, { Component } from 'react';

export default class MyComponent extends Component {
  constructor(){
    super();
    this.state = {
      isCat: true
    }
  }

  render() {
    const txt = 'asdf';
    return (
      <p>
        {txt}
      </p>
    );
  }
}
