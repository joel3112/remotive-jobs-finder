import React from 'react';
import styled from '@emotion/styled';
import Icon from './Icon';
import { bps } from '../styles';

const ItemContainer = styled.div`
  color: ${({ theme }) => `${theme.colors.grayColor}`};
  font-size: ${({ theme }) => `${theme.fontSizes.xxsmall}`};
  display: flex;
  align-items: center;

  span {
    margin-right: 7.5px;
  }
  & + & {
    margin-left: 28.5px;
  }
  
  ${bps.mobile} {
    div {
      max-width: 70px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

const ItemIcon = ({ icon, children, style }) => {
  return (
    <ItemContainer style={style}>
      <Icon icon={icon} />
      <div>{children}</div>
    </ItemContainer>
  );
};

export default ItemIcon;
