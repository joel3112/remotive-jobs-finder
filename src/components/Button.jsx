import React from 'react';
import styled from '@emotion/styled';

const ButtonContainer = styled.button`
  color: ${({ theme }) => `${theme.colors.whiteColor}`};
  background-color: ${({ theme }) => `${theme.bgColors.primary}`};
  font-size: ${({ theme }) => `${theme.fontSizes.small}`};
  font-weight: ${({ theme }) => `${theme.fontWeight.regular}`};
  line-height: ${({ theme }) => `${theme.lineHeight.small}`};
  border-radius: ${({ theme }) => `${theme.borderRadius.small}`};
  font-family: 'Roboto Medium';
  width: 146px;
  min-width: 146px;
  height: 47px;
  border: none;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const Button = ({ onClick, children }) => {
  return (
    <ButtonContainer onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
