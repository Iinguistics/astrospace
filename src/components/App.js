import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Mecury from './planets/Mecury';
import Venus from './planets/Venus';
import Earth from './planets/Earth';
import Mars from './planets/Mars';
import LandsatEarth from './LandsatEarth';
import PlanetList from './PlanetList';
//import Footer from './Footer';
import '../styles/App.css';


const App = ()=>{

    return(
        <Router>
            <Header />
            <div className="container m-auto">
            <Route path="/" exact component={Home} />
            <Route path="/planet/mecury" exact component={Mecury} />
            <Route path="/planet/venus" exact component={Venus} />
            <Route path="/planet/earth" exact component={Earth} />
            <Route path="/planet/mars" exact component={Mars} />
            <Route path="/landsat/earth" exact component={LandsatEarth} />
            <Route path="/planets" exact component={PlanetList} />
            </div>
           
        </Router>
    )
};

export default App;