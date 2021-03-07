import React from 'react';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
    const {name, capital, area, region, flag} = props.country;

    const countryStyle = {
        border: '2px solid darkblue',
        textAlign: 'center',
        margin: '10px',
        padding: '10px 0'
    }
    const flagStyle = {
        width: '300px',
        border: '1px solid lightgray'
    }
    const moreBtnStyle = {
        background: 'orange',
        cursor: 'pointer',
        padding: '5px 10px',
    }
    return (
        <div style={countryStyle}>
            <img style={flagStyle} src={flag} alt=""/>
            <h2>{name}</h2>
            <p>Capital: {capital}</p>
            <p>Area: {area}</p>
            <p>region: {region}</p>
            <Link to={`/country/${name}`}>
                <button style={moreBtnStyle}>More</button>
            </Link>
        </div>
    );
};

export default CountryDetails;