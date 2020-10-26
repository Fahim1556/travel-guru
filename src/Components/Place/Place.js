import React from 'react';
import {Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Place.css'

const Place = (props) => {
    const {name, image} = props.data;
    return (
        <div className="ContentSizing">
            <div>
            <Link to="/booking"><img fluid className="poster" src={image} alt=""/></Link>
            <h3 className="title">{name}</h3>
            </div>
        </div>
    );
};

export default Place;