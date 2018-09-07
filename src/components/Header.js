import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div className='Nav-Bar'>

        <div className = 'landing'>
          <Link to="/"><img className='logo' src={require('../assets/house.png')} /></Link>
          <p>STYLED</p>
        </div>

          <div className='links'>
          <Link to="/Portfolio" className='leggo'> PORTFOLIO | </Link>
          <Link to="/AboutKendall" className='leggo'> ABOUT KENDALL | </Link>
          <Link to="/Services" className='leggo'> SERVICES |</Link>
          <Link to="/Testimonials" className='leggo'> TESTIMONIALS |</Link>
          <Link to="/Contact" className='leggo'> CONTACT </Link>
          </div>


        </div>

    );
  }
}
