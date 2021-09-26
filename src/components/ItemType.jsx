import React from 'react'
import styled from '@emotion/styled'

const ItemContainer = styled.div`
  color: ${({ theme }) => `${theme.colors.textColor}`};
  font-size: ${({ theme }) => `${theme.fontSizes.xxsmall}`};
  font-weight: ${({ theme }) => `${theme.fontWeight.bold}`};
  border-radius: ${({ theme }) => `${theme.borderRadius.small}`};
  border: ${({ theme }) => `1px solid ${theme.colors.textColor}`};
  font-family: 'Roboto';
  height: 26px;
  width: max-content;
  display: flex;
  align-items: center;
  padding: 6px 8px;
`;

const ItemType = ({ type }) => {
  return (
    <ItemContainer>{type}</ItemContainer>
  );
};

export default ItemType;
