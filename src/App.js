import './App.css';
import React, {useState,useEffect} from 'react'
import Navbar from './components/Navbar';
import SubtitleConverter from './components/SubtitleConverter'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

return(
  <>
  <Router>
    <Navbar />
    <SubtitleConverter />
    <switch>
      {/* <Route path="/" exact /> */}
    </switch>
  </Router>
  </>
)
}

export default App;
