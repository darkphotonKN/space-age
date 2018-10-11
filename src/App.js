import React, { Component } from 'react';
import './styles/App.css';
import { Switch, Route, Link } from 'react-router-dom';
// pages
import Planets from './components/pages/Planets';
import Moons from './components/pages/Moons';
import ImageDatabase from './components/pages/ImageDatabase';
import Contact from './components/pages/Contact';
import MoonImages from './components/pages/MoonImages';
// other
import Landing from './components/Landing';
import Navigation from './components/utils/Navigation';

class App extends Component {
    render() {
        return (
            <div id="app">
                <div className="landing-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-3" />
                            <div className="col-6">
                                {/* NAVIGATION */}
                                <Navigation />
                            </div>
                            <div className="col-3" />
                        </div>
                    </div>

                    {/* ROUTES */}
                    <Switch>
                        <Route path="/" exact component={Landing} />
                        <Route path="/planets" component={Planets} />
                        <Route path="/moons/:id" component={MoonImages} />
                        <Route path="/moons" component={Moons} />
                        <Route
                            path="/image_database"
                            component={ImageDatabase}
                        />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
