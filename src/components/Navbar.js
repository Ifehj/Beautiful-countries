import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { SearchNavigation } from "./styles";
import { Link } from "react-router-dom";


const Navbar = ({ region, onRegionChange }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleRegionChange = (event) => {
    const selectedRegion = event.target.value;
    onRegionChange(selectedRegion);
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput) {
      // Navigate to the path `/:name` with the name of the country
      window.location.href = `/${searchInput}`;
    }
  };

  const regions = [
    {
      name: "All",
    },
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
  ];

  return (
    <SearchNavigation>
      <div className="search-container">
        <form className="search-country" onSubmit={handleSubmit}>
          <span>
            <BsSearch />
          </span>
          <input
            placeholder="search for a country"
            name="search"
            id="search"
            value={searchInput}
            onChange={handleInputChange}
          />
        </form>

        <select name="select" id="select" className="select" onChange={handleRegionChange} value={region}>
          {regions.map((region, index) => (
            <option key={index} value={region.name}>
              {region.name}
            </option>
          ))}
        </select>
      </div>
      {searchInput && (
        <Link to={`/${searchInput}`} style={{ display: "none" }}>
          {/* This Link is hidden and will be triggered when the form is submitted */}
          Search
        </Link>
      )}
    </SearchNavigation>
  );
};

export default Navbar;