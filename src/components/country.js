import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CountryDetail } from "./styles";
import { BsArrowLeft } from "react-icons/bs";

const Country = () => {
  const [country, setCountry] = useState({});
  const { name } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const fetchCountryData = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const countryData = await response.json();
    setCountry(countryData[0]); // Fetch the first country object from the array
    setIsLoading(false); // Set the loading state to false once the data is fetched
  };

  useEffect(() => {
    setTimeout(() => {
      fetchCountryData();
    }, 2500);
  }, [name]);

  const {
    nativeName,
    population,
    flags,
    region,
    capital,
    tld,
    currencies,
    languages,
    subregion,
    borders,
    common,
  } = country;

  let currencyToArray = Object.values(currencies || {});
  let languageToArray = Object.values(languages || {});

  if (!isLoading) {
    return (
      <CountryDetail>
        <Link to="/" className="button">
          <span className="arrow-icon">
            <BsArrowLeft />
          </span>
          Back home
        </Link>
        <article>
          <div className="flag">
            <img src={flags && flags.png} alt={common} />
          </div>

          <div className="country-details">
            <h2>{common}</h2>
            <div className="info12-wrap">
              <div className="info-1">
                <h5>Native Name: {name}</h5>
                <h5>Population: {population}</h5>
                <h5>Region: {region}</h5>
                <h5>SubRegion: {subregion}</h5>
                <h5>Capital: {capital}</h5>
              </div>

              <div className="info-2">
                <h5>Top Level Domain: {tld && tld[0]}</h5>
                <h5>Currencies: {currencyToArray[0] && currencyToArray[0].name}</h5>
                <h5>
                  Languages:{" "}
                  {languageToArray.map((item) => {
                    return ` ${item}`;
                  })}
                </h5>
              </div>
            </div>

            <div className="info-3">
              {borders && (
                <>
                  <h3>Border Countries:</h3>
                  <div className="borders">
                    {borders.map((item) => {
                      return <div key={item}>{item}</div>;
                    })}
                  </div>
                </>
              )}
            </div>
          </div>
        </article>
      </CountryDetail>
    );
  } else {
    return(
<div style={{ textAlign: 'center', margin: '0 auto' }}><h1>Loading.....</h1></div>

      )
  }
};

export default Country;