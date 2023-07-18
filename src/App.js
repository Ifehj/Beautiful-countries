import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountryHeader from "./components/Header";
import Countries from "./components/countries";
import Country from "./components/country";
import { Container } from "./components/styles";
import { DarkMode } from "./components/DarkMode";
import { GlobalStyles, lightTheme, darkTheme } from "./components/customProperties";
import { ThemeProvider } from "styled-components";
import React, { useState, useEffect } from "react";




function App() {
  const [theme, toggleTheme] = DarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  const [country, setCountry] = useState([]);
  const fetchCountryData = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/name/}`);
    const countryData = await response.json();
    setCountry(countryData);
  };

  

  useEffect(() => {
    fetchCountryData();
  }, []);


  return (
   <ThemeProvider theme={themeMode}>
     <Container>
      <GlobalStyles/>
      <CountryHeader theme={theme} toggleTheme={toggleTheme}/>
       <Router>
       <Routes>
          <Route exact path="/" element={<> <Navbar country={country} /> <Countries/></>}></Route>
          <Route path="/:name" element={<Country/>}></Route>
        </Routes>
       </Router>
    </Container>
   </ThemeProvider>
  );
}

export default App;
