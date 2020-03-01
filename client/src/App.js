import React, {Component} from 'react';
import {Container} from '@material-ui/core';
import Background from '../src/components/assets/images/chicago.jpg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import NotFound from './pages/404';
import './App.css';
import GlobalNav from './components/globalNav';

const backgroundStyle = {
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  margin: '0',
  width: '100vw',
  maxWidth: '2000px',
  height: '100vh'
};

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Container className='background-image' style={backgroundStyle}>
          <GlobalNav></GlobalNav>
        </Container>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/porfolio' component={Projects} />
            <Route exact path='/contact' component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
