import React from 'react';
import styled from '@emotion/styled';

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  input[type='checkbox'] {
    visibility: hidden;
  }
  label {
    color: ${({ theme }) => `${theme.colors.textColor}`};
    font-size: ${({ theme }) => `${theme.fontSizes.xsmall}`};
    font-weight: ${({ theme }) => `${theme.fontWeight.semibold}`};
    cursor: pointer;
    position: absolute;
    left: 0;
    width: max-content;
  }
  input[type='checkbox'] + label:before {
    border: 1px solid ${({ theme }) => `${theme.colors.grayColor}`} !important;
    content: '\\00a0';
    display: inline-block;
    font: 16px/1em sans-serif;
    margin: 0 12px 0 0;
    padding: 0;
    vertical-align: top;
    height: 18px;
    width: 18px;
  }
  input[type='checkbox']:checked + label:before {
    border: 1px solid ${({ theme }) => `${theme.colors.textColor}`} !important;
    background-color: ${({ theme }) => `${theme.colors.textColor}`} !important;
    content: '\\2713';
    text-align: center;
    color: white;
  }
`;

const Checkbox = ({ label, name, value, onChange }) => {
  return (
    <CheckboxContainer>
      <input 
        name={name} 
        type="checkbox" 
        id="checkbox"
        value={value} 
        onChange={onChange} />
      <label htmlFor="checkbox">{label}</label>
    </CheckboxContainer>
  );
};

export default Checkbox;
