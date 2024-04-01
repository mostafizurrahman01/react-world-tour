const CountryData = (props) => {
    const {country, handleVisitedCountry} = props;
    return (
        <div>
            <h5>Name: {props.country.name.common}</h5>
            <h4>Population : {props.country.population}</h4>
        </div>
    );
};

export default CountryData;