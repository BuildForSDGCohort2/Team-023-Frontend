import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import InfoCardTest from './components/InfoCard/test';

function App() {
  return (
    <Router className="App">
      <Route exact path="/infocard" component={InfoCardTest} />
    </Router>
  );
}

export default App;
