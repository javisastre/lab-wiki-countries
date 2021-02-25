import React from 'react';
import countries from './../countries.json';
import { Link } from 'react-router-dom';

function CountryDetails(props) {
  const { countryId } = props.match.params;
  const country = countries.find((oneCountry) => oneCountry.cca3 === countryId);

  return (
    <div>
      <div className="col-10    ">
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area}
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {country.borders.map((neighbourCCA3) => {
                    const neighbourObj = countries.find(
                      (c) => c.cca3 === neighbourCCA3
                    );
                    return (
                      <li key={neighbourObj.area}>
                        <Link to={`/${neighbourObj.cca3}`}>
                          {neighbourObj.name.common}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountryDetails;
