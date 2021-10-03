import React from 'react';
import styled from '@emotion/styled';
import { useForm } from '../hooks/useForm';
import Checkbox from './Checkbox';
import Input from './Input';

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const LocationContainer = styled.div`
  .location {
    color: ${({ theme }) => `${theme.colors.grayLightColor}`};
    font-size: ${({ theme }) => `${theme.fontSizes.xsmall}`};
    font-weight: ${({ theme }) => `${theme.fontWeight.bold}`};
    margin: 33px 0 5px 0;
  }
  & > div {
    margin-top: 20px;
  }
`;

const Filters = ({ fullTime, location, onChangeFulltime }) => {
  const [{ fullTimeCheckbox }, handleCheckboxChange] = useForm({ fullTimeCheckbox: fullTime }, 'checked');
  // const [{ searchLocation }, handleInputChange] = useForm({ searchLocation: location });
  const [ usa, europe, anywhere ] = (location || '').split(',').map(l => Boolean(l));
  const [{ usaCheckbox }, handleUsaCheckboxChange] = useForm({ usaCheckbox: usa }, 'checked');
  const [{ europeCheckbox }, handleEuropeCheckboxChange] = useForm({ europeCheckbox: europe }, 'checked');
  const [{ anywhereCheckbox }, handleAnywhereCheckboxChange] = useForm({ anywhereCheckbox: anywhere }, 'checked');

  return (
    <FiltersContainer>
      <Checkbox
        label="Full time"
        name="fullTimeCheckbox"
        onChange={handleCheckboxChange}
        value={fullTimeCheckbox} />

      <LocationContainer>
        <div className="location">LOCATION</div>

        {/* <Input
          name="searchLocation"
          placeholder="City or country"
          icon="public"
          onChange={handleInputChange}
          value={searchLocation} /><br /> */}
          
        <Checkbox
          label="USA Only"
          name="usaCheckbox"
          onChange={handleUsaCheckboxChange}
          value={usaCheckbox} />

        <Checkbox
          label="Europe"
          name="europeCheckbox"
          onChange={handleEuropeCheckboxChange}
          value={europeCheckbox} />

        <Checkbox
          label="Anywhere"
          name="anywhereCheckbox"
          onChange={handleAnywhereCheckboxChange}
          value={anywhereCheckbox} />
      </LocationContainer>
    </FiltersContainer>
  );
};

export default Filters;
