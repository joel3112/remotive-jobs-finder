import React from 'react';
import styled from '@emotion/styled';
import { useForm } from '../hooks/useForm';
import Checkbox from './Checkbox';
import Input from './Input';

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  .location {
    color: ${({ theme }) => `${theme.colors.grayLightColor}`};
    font-size: ${({ theme }) => `${theme.fontSizes.xsmall}`};
    font-weight: ${({ theme }) => `${theme.fontWeight.bold}`};
    margin: 33px 0 14px 0;
  }
`;

const Filters = () => {
  const [{ fullTimeCheckbox }, handleCheckboxChange] = useForm({ fullTimeCheckbox: false }, 'checked');
  const [{ searchLocation }, handleInputChange] = useForm({ searchLocation: '' });
  
  return (
    <FiltersContainer>
      <Checkbox 
        label="Full time" 
        name="fullTimeCheckbox"
        onChange={handleCheckboxChange} 
        value={fullTimeCheckbox} />

      <div className="location">LOCATION</div>

      <Input 
        name="searchLocation"
        placeholder="City or country" 
        icon="public" 
        onChange={handleInputChange}
        value={searchLocation} />
    </FiltersContainer>
  );
};

export default Filters;
