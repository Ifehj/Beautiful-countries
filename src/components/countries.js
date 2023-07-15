import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CountryCard from "./countrycard";
import { CountryContainer } from "./styles";
import Navbar from "./Navbar";

const url = 'https://restcountries.com/v3.1/all'

const Countries = () => {
	const {filtered, searchInput} = Navbar
	const [countries, setCountries] = useState([])
	
	const fetchCountryData = async() => {
		const response = await fetch(url)
		const countries = await response.json()
		setCountries(countries)
	}

	useEffect(() => {
		fetchCountryData()
	}, [])

	return(
		<CountryContainer>
			<div className="grid">
			{searchInput.length > 0 }? 
			{filtered.map((country) => {
			return <CountryCard item = {country}/>
			})}:{countries.map((country) => {
			return <CountryCard item = {country}/>
			})}
			</div>
		</CountryContainer>
	)
}

export default Countries