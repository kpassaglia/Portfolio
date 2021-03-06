import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {
  Home,
  About,
  Projects,
  Contact,
  Futbol,
  Tech,
  Music,
  Creators,
  NotFound,
} from './pages';
import './App.css';
import HeaderNav from './components/HeaderNav';
import {ParallaxProvider} from 'react-scroll-parallax';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ParallaxProvider>
          <HeaderNav></HeaderNav>
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/futbol' component={Futbol} />
              <Route exact path='/tech' component={Tech} />
              <Route exact path='/music' component={Music} />
              <Route exact path='/creators' component={Creators} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;
