import React from 'react';
import { HomeContainer } from 'containers'
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path='/' component={HomeContainer} />
      </Router>
    );
  }
}

export default App;
