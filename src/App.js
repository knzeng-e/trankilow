import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Voyages from './components/Voyages';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Voyages />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
