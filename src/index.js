import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Carousel } from 'react-responsive-carousel';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Header from './components/Header'
import Portfolio from './components/Portfolio'
import Home from './components/Home'
import AboutKendall from './components/AboutKendall'
import Contact from './components/Contact'
import Services from './components/Services'
import Testimonials from './components/Testimonials'

ReactDOM.render(
<Router>
  <div>
    <Route path='/' component={App} />
    <Route exact path= '/' component={Home} />
    <Route path='/Portfolio' component={Portfolio} />
    <Route path='/AboutKendall' component={AboutKendall} />
    <Route path='/Contact' component={Contact} />
    <Route path='/Services' component={Services} />
    <Route path='/Testimonials' component={Testimonials} />
  </div>
</Router>,

  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept()
}
