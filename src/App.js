import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Layout from './Layout';
import config from '../config.js';
// require('../assets/css/style.scss');

injectTapEventPlugin();

export default class App extends Component {
    constructor(props, context) {
    super(props, context);

    // Initialize Firebase
    !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
    
    const db = firebase.firestore();
    this.state = {
      db,
      data: []
    };
  }

  componentDidMount() {
    const data = [];
    this.state.db.collection("pets").get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              data[doc.id] = (doc.data());
          });
      this.setState({ data });
    });
  }

  render() {
    return <Layout data={this.state.data}/>;
  }
}
