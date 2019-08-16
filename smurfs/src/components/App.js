import React, { Component } from "react";
import "./App.css";
import List from './List'

function App () {
  
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>

        <List />
      </div>
    );
  }


export default (App);
