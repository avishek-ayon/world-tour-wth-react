import React from 'react';
import './Country.css'

const Country = (props) => {
    //console.log(props.country)
    const { name, flag, capital, population, region } = props.country;//destructing 
    return (
        <div className="country bg-secondary bg-gradient">
            <h3 className="bg-danger">{name}</h3>
            <img src={flag} alt="" />
            <p><small>{region}</small></p>
            <h3>This Capital <span className="text-dark">{capital}</span> and Population {population}</h3>
        </div>
    );
};

export default Country;