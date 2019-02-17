import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import 'semantic-ui-css/semantic.min.css';
import './assets/css/App.css';
import HomepageLayout from './screens/HomepageLayout';
import About from './screens/About';
import Faq from './screens/Faq';

class App extends Component {
  render() {
    return (
      <Switch>
      <Route exact path="/" component={HomepageLayout}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/faq" component={Faq}/>
    </Switch>
    );
  }
}

export default App;
