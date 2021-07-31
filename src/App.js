import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch,Route,Link } from "react-router-dom";
import Home from './components/Home';
import SortingVisualizer from './components/sorting/SortingVisualizer';
//import TOI from './components/sortingAlgorithms/TOI';
//import {floodfill} from './components/algo/floodfill';

//import {motion} from 'framer-motion';

function App() {
  return (
    <SortingVisualizer />
    /*
      <div>
      <Router>
        <div className="topnav">
            <ul className="ul">
              <li>
                <Link style={{color: 'orange', fontSize:'30px'}} to="/Home">Home</Link>
              </li>
              <li>
                <Link style={{color: 'orange', fontSize:'30px'}} to="/SortingVisualizer">SortingVisualizer</Link>
              </li>
              <li>
                <Link style={{color: 'orange', fontSize:'30px'}} to="/TOI">TOI</Link>
              </li>
            </ul>
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>

            <Route path="/SortingVisualizer">
              <SortingVisualizer />
            </Route>


          </Switch>
        </div>
      </Router>
      </div>
      */
  );
}

export default App;
