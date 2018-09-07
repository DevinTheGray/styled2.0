import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Header from './Header.js'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div>
          <img className='carousel' src={require('../assets/new-living.jpg')} />
        </div>

      </div>

    );
  }
}
