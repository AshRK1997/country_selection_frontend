import React from 'react';
import axios from 'axios';
import { Typeahead } from 'react-bootstrap-typeahead';
import './typeahead.css';

function TypeAheadBox({
  isLoading,
  typeaheadOptions,
  selectedCountryInfo,
  setTypeaheadOptions,
  setSelectedCountryInfo,
  setIsLoading,
}) {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const handleTypeAhead = (query) => {
    if (query && query.length >= 3) {
      setIsLoading(true);
      axios
        .get(`${BACKEND_URL}/country?typeahead=${query}`)
        .then((response) => {
          setTypeaheadOptions(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    }
  };

  const handleCountrySelection = (query) => {
    if (query && query?.officialName) {
      axios
        .get(`${BACKEND_URL}/country?typeahead=${query.officialName}`)
        .then((response) => {
          setSelectedCountryInfo(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="typeahead-container">
      <Typeahead
        id="country-typeahead"
        labelKey="name"
        isLoading={isLoading}
        options={typeaheadOptions}
        placeholder="Enter a country name"
        onChange={(selected) => handleCountrySelection(selected[0])}
        onInputChange={handleTypeAhead}
      />
    </div>
  );
}

export default TypeAheadBox;
