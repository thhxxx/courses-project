import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div className="menu">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/courses">Courses</Link>
                    <ul>
                        <li><i className="fa-solid fa-code"/> Development</li>
                        <li><i className="fa-solid fa-briefcase"/> Business</li>
                        <li><i className="fa-solid fa-chart-line"/> Finance & Accounting</li>
                        <li><i className="fa-solid fa-laptop"/> IT & Software</li>
                        <li><i className="fa-solid fa-object-group"/> Design</li>
                        <li><i className="fa-solid fa-music"/> Music</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Menu;