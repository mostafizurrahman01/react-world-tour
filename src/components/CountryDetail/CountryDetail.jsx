import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
    const {country, handleVisitedCountry} = props;
    return (
        <div>
            <h5>Country Details: </h5>
            {/* <CountryData 
                country = {country}
                handleVisitedCountry = {handleVisitedCountry}>
            </CountryData> */}

            <CountryData {...props} ></CountryData>
        </div>
    );
};

export default CountryDetail;