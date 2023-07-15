import styled from "styled-components";

export const Container = styled.div`
  
  `

export const Header = styled.div`
  border: solid 2px black;
  max-width: 100%;
  height: 5rem;
  padding-inline: 2rem;
  /* background-color: #2b3743; */
  /* color: black; */
  background: ${({ theme }) => theme.element};
	color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 0px 10px  ${({ theme }) => theme.boxshadow}; 


  .Home-nav {
    display: flex;
    justify-content: space-between;
    border: 2px solid red;
  }

  .mode {
    display: flex;
    place-items: center;
  }

  .mode > :first-child {
    margin-right: 0.5rem;
    font-size: 1.5rem;
  }

  .Home-nav > h1,
  .mode > h2 {
    font-size: 1rem;
  }

  @media (min-width: 1110px) {
    .Home-nav > h1,
    .mode > h2 {
      font-size: 1.4rem;
    }

    .mode > :first-child {
    margin-right: 0.5rem;
    font-size: 1.5rem;
    margin-top: 5px;
  }
  }
`;
export const SearchNavigation = styled.div`
  border: 2px solid blue;
  margin-top: 3rem;
  padding-inline: 2rem;

  .search-container {
    /* border: 2px solid red; */
    align-content: center;
    justify-content: space-between;
  }

  .search-country {
    display: flex;
    border: 2px solid yellow;
    /* padding: 0.3rem 6rem 0rem 1rem; */
    height: 3rem;
    background: ${({ theme }) => theme.element};
	  color: ${({ theme }) => theme.text};
    border-radius: 7px;
    box-shadow: 0px 0px 10px  ${({ theme }) => theme.boxshadow}; 
  }

  .search-country input {
    margin-left: 1.5rem;
    /* border: 2px solid yellow; */
    outline: none;
    border: none;
    width: 15rem;
    background: ${({ theme }) => theme.element};
	  color: ${({ theme }) => theme.text};
    font-family: inherit;
    border-radius: 7px;
  }

  .search-country input::placeholder{
    color: ${({ theme }) => theme.input};
  }

  .search-country input:focus,
  .search-country input:active {
    outline: none;
  }

  .search-country span {
    border: 2px solid black;
    width: fit-content;
    padding-top: 10px;

    color: ${({ theme }) => theme.input};
  }

  .search-container select option {
    padding-right: 5rem;
    color: ${({ theme }) => theme.text};
  }

  .select {
    background: ${({ theme }) => theme.element};
	  color: ${({ theme }) => theme.text};
    font-family: inherit;
    width: 200px;
    padding: 0.5rem 0 0.5rem 0.5rem;
    margin-top: 2rem;
    box-shadow: 0px 0px 10px  ${({ theme }) => theme.boxshadow}; 
  }

  @media (min-width: 1110px) {
    .search-container {
      display: flex;
      border: 2px solid red;
      justify-content: space-between;
    }

    .select {
    margin-top: 0;
  }

  .search-country input {
    width: 20rem;
  }
  }
`

export const CountryInfo = styled.div`
  .img-wrap img {
    width: 100%;
    height: 100%;
  }

  .card-link{
	text-decoration: none;
	color: white;
  }

  .card-wrap {
    border: 2px solid green;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
    max-height: 23rem;
    width: 13.5rem;
    height: 21rem;
    margin: auto;
    background: ${({ theme }) => theme.element};
	  color: ${({ theme }) => theme.text};
    box-shadow: 0px 0px 15px  ${({ theme }) => theme.boxshadow};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  }

  .img-wrap {
    /* border: 2px solid blue; */
    max-width: 100%;
    max-height: 10rem;
    height: 10rem;
  }

  .country-detail {
    border: 2px solid black;
    padding-left: 1rem;
    margin-top: 1rem;
    font-size: 14px;
  }

  .country-detail h3 {
    padding-bottom: 15px;
  }

  .country-detail h4 {
    font-weight: 600;
    text-transform: capitalize;
    padding-bottom: 5px;
    letter-spacing: 1px;
  }

  .country-detail h4 span {
    font-weight: 100;
  }
`;

export const CountryContainer = styled.div`
  padding-inline: clamp(0.1rem, 5vw, 2rem);
  border: 2px solid blue;

  .grid {
    border: 5px solid black;
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 4rem;
    row-gap: 5rem;
    column-gap: 2rem;
  }

  @media (min-width: 660px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 750px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1110px) {
    .grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
export const CountryDetail = styled.div`
  border: 2px solid black;
  padding: 3rem 2rem;

  article {
    margin: auto;
    border: 3px solid blue;
    margin-top: 1.5rem;
  }

  .flag img {
    width: 100%;
    height: 100%;
  }

  .flag {
    width: 100%;
    max-width: 100%;
    border: 2px solid red;
    /* max-height: 100%; */
    height: 20rem;
  }
  .country-details {
    border: 2px solid darkgreen;
    margin-top: 2.5rem;
    padding-left: 2rem;
  }

  .country-details  h2 {
    padding-bottom: 2rem;
    border: 2px solid darkgoldenrod;
  }

  .country-details .info-1 h5 {
    padding-bottom: 0.5rem;
  }

  .info-2 {
    border: 2px solid darkgray;
    margin-top: 1rem;
  }

  .info-2 * {
    padding-bottom: 0.5rem;
  }

  .info-3 {
    margin-top: 1.5rem;
  }

  .borders {
    border: 2px solid brown;
    display: grid;
    margin-top: 1rem;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .borders * {
    width: 7rem;
    border: none;
    border-radius: 5px;
    text-align: center;
    background: ${({ theme }) => theme.element};
	  color: ${({ theme }) => theme.text};
    box-shadow: 0px 0px 10px  ${({ theme }) => theme.boxshadow};
  }

  .button {
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: rgb(43, 55, 67);
    background: ${({ theme }) => theme.element};
	  color: ${({ theme }) => theme.text};
    box-shadow: 0px 0px 10px  ${({ theme }) => theme.boxshadow};
  }

  .button .arrow-icon{
    padding-right: 5px;
    height: fit-content;
    font-size: 0.8rem;
  }

  @media (min-width: 1140px) {
    article {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    .flag {
      width: 100%;
      max-width: 100%;
      width: 30rem;
      border: 2px solid red;
      height: 20rem;
    }

    .info12-wrap {
      border: 2px solid blue;
      display: flex;
	    justify-content: space-between;
    }

    .country-details {
    margin-top: 1rem;
	  width: 30rem;
    padding: 0;
    }

    .borders {
    border: 2px solid brown;
    display: flex;
  }
  }
`