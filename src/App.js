import React, { useState } from 'react';
import CountryInfo from './CountryInfo';
import TypeAheadBox from './typeAhead';
import './App.css';

function App() {
  const [selectedCountryInfo, setSelectedCountryInfo] = useState(null);
  const [typeaheadOptions, setTypeaheadOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Country Information App</h1>

        <div className="search-container">
          <TypeAheadBox
            isLoading={isLoading}
            typeaheadOptions={typeaheadOptions}
            selectedCountryInfo={selectedCountryInfo}
            setTypeaheadOptions={setTypeaheadOptions}
            setSelectedCountryInfo={setSelectedCountryInfo}
            setIsLoading={setIsLoading}
          />
        </div>

        {selectedCountryInfo && (
          <CountryInfo selectedCountryInfo={selectedCountryInfo} />
        )}
      </header>
    </div>
  );
}

export default App;
