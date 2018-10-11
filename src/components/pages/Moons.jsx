import React from 'react';
import { Route, Link } from 'react-router-dom';
import MoonImages from './MoonImages';

const Moons = () => {
    return (
        <div className="main-content">
            <div className="container">
                <div id="moons" className="page">
                    <div className="row text-center">
                        <h1>Ganymede</h1>
                    </div>
                    <div className="row">
                        <p className="col-12">
                            Ganymede is the largest and most massive moon of
                            Jupiter and in the Solar System. The ninth largest
                            object in the Solar System, it is the largest
                            without a substantial atmosphere. It has a diameter
                            of 5,268 km (3,273 mi) and is 8% larger than the
                            planet Mercury, although only 45% as massive.[12]
                            Possessing a metallic core, it has the lowest moment
                            of inertia factor of any solid body in the Solar
                            System and is the only moon known to have a magnetic
                            field. It is the third of the Galilean moons, the
                            first group of objects discovered orbiting another
                            planet, and the seventh satellite outward from
                            Jupiter.[13] Ganymede orbits Jupiter in roughly
                            seven days and is in a 1:2:4 orbital resonance with
                            the moons Europa and Io, respectively.
                        </p>
                    </div>
                    <div className="row">
                        <p className="col-6">
                            Ganymede's discovery is credited to Galileo Galilei,
                            who was the first to observe it on January 7,
                            1610.[1] The satellite's name was soon suggested by
                            astronomer Simon Marius, after the mythological
                            Ganymede, cupbearer of the Greek gods, kidnapped by
                            Zeus for the purpose.[22] Beginning with Pioneer 10,
                            several spacecraft have explored Ganymede.[23]{' '}
                        </p>
                        <p className="col-6">
                            {' '}
                            The next planned mission to the Jovian system is the
                            European Space Agency's Jupiter Icy Moon Explorer
                            (JUICE), due to launch in 2022. After flybys of all
                            three icy Galilean moons, the probe is planned to
                            enter orbit around Ganymede. The Voyager probes
                            refined measurements of its size, while Galileo
                            discovered its underground ocean and magnetic field.
                        </p>
                        <Link to="moons/moon_images">Moon Images</Link>
                    </div>
                    {/* <div className="row">
                        <Route
                            path="/moons/moon_images"
                            component={MoonImages}
                        />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Moons;
