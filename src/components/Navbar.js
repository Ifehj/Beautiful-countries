import React from "react";
import { BsSearch} from "react-icons/bs"
import {SearchNavigation} from "./styles"
import { useState } from "react";
import Countries from "./countries";

const Navbar = () => {
	const {countries} = Countries
	const [filtered, setFiltered] = useState([])
	const [searchInput, setSearchInput] = ("")
	
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
	]

	const searchCountries = (searchValue) => {
		setSearchInput(searchValue)

		if(searchInput) {
			const filteredCountries = countries.filter((country) => (
				Object.values(country).join("").toLowerCase().includes(searchValue.toLowerCase())
			))
			setFiltered(filteredCountries)
		}else {
			setFiltered(countries)
		}
	}

	return( 
		<SearchNavigation>
		<div className="search-container">
			<form  className="search-country">
				<span><BsSearch/></span>
				<input placeholder="search for a country" name="search" id = "search" value={searchInput} onChange={(e) => searchCountries(e.target.value)} />
			</form>

			<select name = "select" id = "select" className="select">
				{ regions.map((region, index) => (
					<option key={index} value={region.name}>{region.name}</option>
				))}
			</select>
		</div>
		</SearchNavigation>
	)
}

export default Navbar