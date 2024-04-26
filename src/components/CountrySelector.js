// components/CountrySelector.js

import React from 'react';
import { CountryDropdown } from 'react-country-region-selector';

const CountrySelector = ({ value, onChange }) => {
  return (
    <div>
      <CountryDropdown
        value={value} // Selected country value
        onChange={onChange} // Handle country selection change
        className="country-dropdown border-none" // Optional: Add custom class for styling
      />
    </div>
  );
};

export default CountrySelector;
