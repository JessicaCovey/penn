/*
  App
*/
import React from 'react';

export default class App extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="Home">
        <div className="menu">
          <Header/>
        </div>  
        <Photo/>
        <Flowers/>
      </div>
    )
  }

};