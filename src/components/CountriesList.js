import React from 'react';
import { Link } from 'react-router-dom';
import countries from './../countries.json';

class CountriesList extends React.Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    this.setState({ countries: countries });
  }

  render() {
    return (
      <div>
        {this.state.countries.map((country) => {
          return (
            <div
              key={country.population}
              className="col-10"
              style={{ maxHeight: '90vh', overflow: 'hidden' }}
            >
              <div className="list-group">
                <Link
                  className="list-group-item list-group-item-action"
                  to={`/${country.cca3}`}
                >
                  <h3>{country.name.common}</h3>
                  <em>{country.name.official}</em>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CountriesList;
