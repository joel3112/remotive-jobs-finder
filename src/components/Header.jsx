import React from 'react';
import styled from '@emotion/styled';
import { bps } from '../styles';

const HeaderContainer = styled.div`
  font-size: ${({ theme }) => `${theme.fontSizes.medium}`};
  font-weight: ${({ theme }) => `${theme.fontWeight.light}`};
  line-height: ${({ theme }) => `${theme.lineHeight.medium}`};
  padding-top: 32px;
  display: flex;
  justify-content: flex-start;

  span {
    font-weight: ${({ theme }) => `${theme.fontWeight.bold}`};
  }
  ${bps.mobile} {
    padding-top: 0;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <span>Remotive</span> Jobs
    </HeaderContainer>
  );
};

export default Header;
