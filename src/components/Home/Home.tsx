import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => (

    <div>
        <h2>The Internet</h2>
            <ul>
                <li>
                    <Link to="/checkboxes"> Checkboxes </Link>
                </li>
                <li>
                    <Link to="/brokenimages"> Broken Images </Link>
                </li>
                <li>
                    <Link to="/dropdown"> Dropdown </Link>
                </li>
            </ul>
    </div>
);

export default Home;