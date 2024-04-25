// components/CountrySelector.js

import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

class CountrySelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: '',
      region: ''
    };
  }

  selectCountry = (val) => {
    this.setState({ country: val, region: '' });
  };

  selectRegion = (val) => {
    this.setState({ region: val });
  };

  render() {
    const { country, region } = this.state;
    return (
      <div>
        <CountryDropdown
          value={country}
          onChange={(val) => this.selectCountry(val)}
          className="country-dropdown border-none" // Optional: Add custom class for styling
        />
        {/* <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => this.selectRegion(val)}
          className="region-dropdown border-none" // Optional: Add custom class for styling
        /> */}
      </div>
    );
  }
}

export default CountrySelector;
