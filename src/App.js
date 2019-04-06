import React, { Component } from 'react';
import * as firebase from 'firebase';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Round from './Round.js';
require('../assets/css/style.scss');

injectTapEventPlugin();

export default class App extends Component {
    constructor(props, context) {
    super(props, context);

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAAoQAEaFXydEmvRttMHPQqH6N3UMhqgbw",
      authDomain: "tournament-of-tails.firebaseapp.com",
      databaseURL: "https://tournament-of-tails.firebaseio.com",
      projectId: "tournament-of-tails",
      storageBucket: "tournament-of-tails.appspot.com",
      messagingSenderId: "660262587596"
    };
    firebase.initializeApp(config);

    this.state = {
    };
  }

  render() {
    return <Round/>;
  }
}
