import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryMoreDetails = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/name/' + countryName)
            .then(res => res.json())
            .then(data => setCountry(data));
    }, []);
    const { capital, flag, languages, population, region, subregion } = country[0] || {};
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Country Name: {countryName}</h1>
            <img style={{ width: '400px', border: '1px solid gray' }} src={flag} alt="none" />
            <p>Capital is: {capital}</p>
            <p>Population is: {population}</p>
            <p>Region is: {region}</p>
            <p>Subregion is: {subregion}</p>
        </div>
    );
};

export default CountryMoreDetails;