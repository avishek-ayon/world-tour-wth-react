import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v2/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1 className="fs-1 fw-bold">World Tour</h1>
            {/* <h2>World Tour{countries.length}</h2> */}
            <div className="country-container">
                {
                    countries.map(country => <Country
                        key={country.alpha3Code}
                        country={country}

                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;