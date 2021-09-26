import React from 'react';
import styled from '@emotion/styled';
import { bps } from '../styles';
import Card from './Card';

const CardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${bps.mobile} {
    gap: 23px;
  }
`;

const CardList = ({ items }) => {
  return (
    <CardListContainer>
      {items.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </CardListContainer>
  );
};

export default CardList;
