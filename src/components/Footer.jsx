import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.div`
  font-size: ${({ theme }) => `${theme.fontSizes.xsmall}`};
  font-weight: ${({ theme }) => `${theme.fontWeight.semibold}`};
  line-height: ${({ theme }) => `${theme.lineHeight.xsmall}`};
  color: ${({ theme }) => `${theme.colors.grayColor}`};
  padding-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  pre {
    font-family: 'Montserrat' !important;
  }
  span {
    font-weight: ${({ theme }) => `${theme.fontWeight.bold}`};
    text-decoration: underline;
  }
`;

const Footer = ({ username = 'username' }) => {
  return (
    <FooterContainer>
      <div>
        created by <span>{username}</span> - devChallenges.io
      </div>
    </FooterContainer>
  );
};

export default Footer;
