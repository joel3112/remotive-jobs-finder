import React from 'react';
import styled from '@emotion/styled';
import { useForm } from '../hooks/useForm';
import Button from './Button';
import Input from './Input';

const SearchContainer = styled.div`
  border-radius: ${({ theme }) => `${theme.borderRadius.medium}`};
  background-image: url('assets/backgroundImg.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 138px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 18px;
`;

const FormContainer = styled.form`
  border-radius: ${({ theme }) => `${theme.borderRadius.small}`};
  background-color: ${({ theme }) => `${theme.bgColors.light}`};
  color: ${({ theme }) => `${theme.colors.grayColor}`};
  box-shadow: ${({ theme }) => `${theme.boxShadows.type1}`};
  width: 100%;
  max-width: 790px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;
`;

const Search = ({ query = '', onSubmit }) => {
  const [{ searchText }, handleInputChange] = useForm({ searchText: query });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (onSubmit) {
      onSubmit({ searchText });
    }
  };

  return (
    <SearchContainer>
      <FormContainer onSubmit={handleSubmit}>
        <Input 
          name="searchText" 
          placeholder="Title, companies, expertise or benefits" 
          icon="work_outline" 
          onChange={handleInputChange} 
          value={searchText}
          width="100%" />
        <Button>Search</Button>
      </FormContainer>
    </SearchContainer>
  );
};

export default Search;
