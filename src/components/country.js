import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CountryDetail } from "./styles";
import { BsArrowLeft } from "react-icons/bs";

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  const fetchCountries = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const country = await response.json();
    setCountry(country);
  };

  useEffect(() => {
    fetchCountries();
  }, [name]);

  return (
    <>
      <section className="country">
        {country.map((c) => {
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
            name,
          } = c;
          let currencyToArray = Object.values(currencies);
          let languageToArray = Object.values(languages);

          return (
            <CountryDetail>
              <Link to="/" className="button">
                <span className="arrow-icon">
                  <BsArrowLeft />
                </span>
                Back home
              </Link>
              <article key={name.common}>
                <div className="flag">
                  <img src={flags.png} alt={common} />
                </div>

                <div className="country-details">
                  <h2>{name.common}</h2>
                  <div className="info12-wrap">
                    <div className="info-1">
                      <h5>Native Name: {nativeName}</h5>
                      <h5>Population: {population}</h5>
                      <h5>Region: {region}</h5>
                      <h5>SubRegion: {subregion}</h5>
                      <h5>Capital: {capital}</h5>
                    </div>

                    <div className="info-2">
                      <h5>Top Level Domain: {tld[0]}</h5>
                      <h5>Currencies: {currencyToArray[0].name}</h5>
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
                            return <div>{item}</div>;
                          })}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </article>
            </CountryDetail>
          );
        })}
      </section>
    </>
  );
};

export default Country;
