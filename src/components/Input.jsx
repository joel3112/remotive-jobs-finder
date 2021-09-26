import React from 'react'
import styled from '@emotion/styled'
import Icon from './Icon';

const InputContainer = styled.div`
  border-radius: ${({ theme }) => `${theme.borderRadius.small}`};
  background-color: ${({ theme }) => `${theme.bgColors.light}`};
  color: ${({ theme }) => `${theme.colors.grayColor}`};
  box-shadow: ${({ theme }) => `${theme.boxShadows.type1}`};
  height: 48px;
  max-width: 100%;
  display: flex;
  align-items: center;
  padding: 0 14px;  

  input {
    font-size: ${({ theme }) => `${theme.fontSizes.xsmall}`};
    font-weight: ${({ theme }) => `${theme.fontWeight.regular}`};
    line-height: ${({ theme }) => `${theme.lineHeight.xxsmall}`};
    border: none;
    outline: none;
    margin-left: 10px;
    height: 100%;
    width: 100%;
    font-family: 'Roboto';

    ::placeholder {
      color: ${({ theme }) => `${theme.colors.grayColor}`};
    }
  }
`;

const Input = ({ name, value, placeholder, icon, width = 379, onChange }) => {
  return (
    <InputContainer style={{ width: width }}>
      {icon && <Icon icon={icon} />}
      <input 
        name={name}
        placeholder={placeholder}
        onChange={onChange} 
        value={value} />
    </InputContainer>
  )
}

export default Input
