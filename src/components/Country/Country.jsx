import { useState } from 'react';
import './Country.css';
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({country, handleVisitedCountry}) => {
    const {name, flags, population, area, cca3} = country;
    // console.log(country);
    
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }

    // console.log(handleVisitedCountry);

    // const passWithParams = () => {
    //     handleVisitedCountry(country);
    // }

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
           
            <p style={{color : visited ? 'white' : 'black'}}>Country Name: {name.common} </p>  {/* conditional css */}

            <img src={flags.png} alt=''></img>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            {/* <button onClick={passWithParams}>Mark Visited</button> */}
            <br />
            <button onClick={handleVisited}> {visited ? 'It is visited' : 'not visited'}</button>
            {/* {visited && 'I am visited'} */}
            <hr />
            <CountryDetail 
                country = {country}
                handleVisitedCountry = {handleVisitedCountry}> 
            </CountryDetail>
        </div>
    );
};

export default Country;