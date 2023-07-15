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



function App() {
  const [theme, toggleTheme] = DarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
   <ThemeProvider theme={themeMode}>
     <Container>
      <GlobalStyles/>
      <CountryHeader theme={theme} toggleTheme={toggleTheme}/>
       <Router>
       <Routes>
          <Route exact path="/" element={<> <Navbar /> <Countries/></>}></Route>
          <Route path="/:name" element={<Country/>}></Route>
        </Routes>
       </Router>
    </Container>
   </ThemeProvider>
  );
}

export default App;
