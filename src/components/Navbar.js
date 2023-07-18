import React from "react";
import { BsSearch } from "react-icons/bs";
import { SearchNavigation } from "./styles";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [filtered, setFiltered] = useState([]);
  const [searchInput, setSearchInput] = useState("");


  const url = 'https://restcountries.com/v3.1/all'
  const [country, setCountry] = useState([]);
  const fetchCountryData = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/name/}`);
    const countryData = await response.json();
    setCountry(countryData);
  };
  useEffect(() => {
    fetchCountryData();
  }, []);

  
	const [countries, setCountries] = useState([]);
	const CountryData = async () => {
	  const response = await fetch(url);
	  const countries = await response.json();
	  setCountries(countries);
	};
  
	useEffect(() => {
	  CountryData();
	}, []);

  const regions = [
    {
      name: "Europe",
    },
    {
      name: "Asia",
    },
    {
      name: "Africa",
    },
    {
      name: "Oceania",
    },
    {
      name: "Americas",
    },
    {
      name: "Antarctica",
    },
  ];

  const searchCountries = (searchValue) => {
    setSearchInput(searchValue);

    if (searchValue) {
      const filteredCountries = countries.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
      setFiltered(filteredCountries);
    } else {
      setFiltered(countries);
    }
  };

  return (
    <SearchNavigation>
      <div className="search-container">
        <form className="search-country">
          <span>
            <BsSearch />
          </span>
          <input
            placeholder="search for a country"
            name="search"
            id="search"
            value={searchInput}
            onChange={(e) => searchCountries(e.target.value)}
          />
        </form>

        <select name="select" id="select" className="select">
          {regions.map((region, index) => (
            <option key={index} value={region.name}>
              {region.name}
            </option>
          ))}
        </select>
      </div>
    </SearchNavigation>
  );
};

export default Navbar;
