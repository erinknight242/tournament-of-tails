import React, { Component } from 'react';
import * as firebase from 'firebase';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Round from './Round.js';
import { config } from '../config.js';
require('../assets/css/style.scss');

injectTapEventPlugin();

export default class App extends Component {
    constructor(props, context) {
    super(props, context);

    // Initialize Firebase
    firebase.initializeApp(config);

    this.state = {
    };
  }

  render() {
    return <Round/>;
  }
}
