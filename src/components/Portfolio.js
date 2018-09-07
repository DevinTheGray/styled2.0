import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Header from './Header.js';

export default class Portfolio extends Component {
  render() {
    return (
      <div className = 'all'>
      <Header></Header>
          <div className='make-em-look'>
            <img className='portfolio' src={require('../assets/living-room.JPG')} />
            <img className='portfolio' src={require('../assets/bar.JPG')} />
            <img className='portfolio' src={require('../assets/eat.jpg')} />
            <img className='portfolio' src={require('../assets/new-living.jpg')} />
            <img className='portfolio' src={require('../assets/basement.jpg')} />
            <img className='portfolio' src={require('../assets/books.JPG')} />
            <img className='portfolio' src={require('../assets/island.JPG')} />
            <img className='portfolio' src={require('../assets/sink.JPG')} />
            <img className='portfolio' src={require('../assets/lamp.jpg')} />
            <img className='portfolio' src={require('../assets/room-lamp.jpg')} />
            <img className='portfolio' src={require('../assets/bedroom-closeup.jpg')} />
            <img className='portfolio' src={require('../assets/bedroom-front.jpg')} />
            <img className='portfolio' src={require('../assets/bedroom-left.jpg')} />
            <img className='portfolio' src={require('../assets/books-tv.jpg')} />
            <img className='portfolio' src={require('../assets/couch.jpg')} />
          </div>
        </div>
    );
  }
}
