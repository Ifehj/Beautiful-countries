import React from "react";
import { CountryInfo } from "./styles";
import { Link } from "react-router-dom";

const CountryCard = ({ item }) => {
  const { name, common, population, region, capital, flags } = item;
  return (
    <CountryInfo key={name.common}>
      <Link className="card-link" to={`/${name.common}`}>
        <div className="card-wrap">
          <div className="img-wrap">
            <img src={flags.png} alt={common} />
          </div>

          <div className="country-detail">
            <h3>{name.common}</h3>
            <h4>
              Population: <span>{population}</span>
            </h4>
            <h4>
              region: <span>{region}</span>
            </h4>
            <h4>
              Capital: <span>{capital}</span>
            </h4>
          </div>
        </div>
      </Link>
    </CountryInfo>
  );
};

export default CountryCard;
