import React, { useState, useEffect } from "react";
import CountryCard from "./countrycard";
import { CountryContainer } from "./styles";

const baseURL = 'https://restcountries.com/v3.1';

const Countries = ({ region }) => {
  const url = region === 'All' ? `${baseURL}/all` : `${baseURL}/region/${region}`;
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCountryData = async () => {
    try {
      const response = await fetch(url);
      const countriesData = await response.json();
      setCountries(countriesData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching country data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountryData();
  }, [region]); // Fetch data again whenever the region prop changes

  return (
    <CountryContainer>
      <div className="grid">
        {loading ? (
          <p>Loading...</p>
        ) : (
          countries.map((country) => (
            <CountryCard key={country.name.common} item={country} />
          ))
        )}
      </div>
    </CountryContainer>
  );
};

export default Countries;
