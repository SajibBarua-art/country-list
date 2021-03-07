import React, { useEffect, useState } from 'react';
import CountriesDetails from '../CountriesDetails/CountriesDetails';

const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1> Total countries: {countries.length}</h1>
            {
                countries.map(country => 
                <CountriesDetails 
                    key={country.alpha3Code}
                    country={country}
                ></CountriesDetails>)
            }
        </div>
    );
};

export default Home;