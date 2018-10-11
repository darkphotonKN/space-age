import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="moon-images col-12">
            <h1>Moon Images</h1>

            {/* Back Button */}
            <Link to="/moons">Back</Link>
        </div>
    );
};

export default Landing;
