import React from 'react';
import './countryinfo.css'

function CountryInfo({ selectedCountryInfo }) {
  const handleCountryParticulars = (inp, is_currency = false) => {
    if (is_currency) {
      return Array.isArray(inp) && inp.length > 0
        ? inp.map((obj) => `${obj.name} (${obj.symbol})`).join(', ')
        : '';
    }

    if (Array.isArray(inp)) {
      return inp.length > 0 ? inp.join(', ') : '';
    }

    return inp ? inp : '';
  };

  return (
    <div className="country-info">
      <div className="country-details">
        <div className="country-title">
          <h2>{selectedCountryInfo.official_name}</h2>
        </div>
        <img
          src={selectedCountryInfo.flags}
          alt={selectedCountryInfo.flags_alt}
          className="country-flag"
        />
      </div>

      <div className="country-particulars">
        <div className="particular">
          <strong>Capital:</strong> {handleCountryParticulars(selectedCountryInfo.capital)}
        </div>
        <div className="particular">
          <strong>Language:</strong> {handleCountryParticulars(selectedCountryInfo.languages)}
        </div>
        <div className="particular">
          <strong>Currency:</strong> {handleCountryParticulars(selectedCountryInfo.currency, true)}
        </div>
      </div>

      <div className="country-particulars">
        <div className="particular">
          <strong>Continent:</strong> {handleCountryParticulars(selectedCountryInfo.continent)}
        </div>
        <div className="particular">
          <strong>Area:</strong> {handleCountryParticulars(selectedCountryInfo.area)} sq. m
        </div>
        <div className="particular">
          <strong>Population:</strong> {handleCountryParticulars(selectedCountryInfo.population)}
        </div>
      </div>

      <div className="country-particulars">
        <div className="particular">
          <strong>Gini Index:</strong> {handleCountryParticulars(selectedCountryInfo.gini)}
        </div>
        <div className="particular">
          <strong>Car driving:</strong> {handleCountryParticulars(selectedCountryInfo.car_drive)}
        </div>
        <div className="particular">
          <strong>Top Level domain:</strong> {handleCountryParticulars(selectedCountryInfo.tld)}
        </div>
      </div>
    </div>
  );
}

export default CountryInfo;
