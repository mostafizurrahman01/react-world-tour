import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);

    useEffect(() =>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountry = country =>{
        // console.log(country);
        const newVisitedCountry = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountry);

    }

    // remove iteam from an array in a state
    // use filter to select all the elements except the one you want to remove

    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            <div>
                <h5>Visited Country : {visitedCountry.length}</h5>
                <ul>
                    {visitedCountry.map(country => <li key = {country.cca3} > {country.name.common}</li>)}
                </ul>
            </div>
            <div className="country-container">
            {
                countries.map(country => <Country 
                    key = {country.cca3} 
                    country = {country}
                    handleVisitedCountry = {handleVisitedCountry} ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;