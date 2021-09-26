import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'wouter';
import Icon from './Icon';

const AnchorRouterContainer = styled(Link)`
  color: ${({ theme }) => `${theme.colors.linkColor}`};
  font-size: ${({ theme }) => `${theme.fontSizes.xsmall}`};
  line-height: ${({ theme }) => `${theme.lineHeight.small}`};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 15px;

  .text {
    font-weight: ${({ theme }) => `${theme.fontWeight.semibold}`};
  }
`;

const AnchorContainer = AnchorRouterContainer.withComponent('a');

const Anchor = ({ icon, to, href, children }) => {
  if (href) {
    return (
      <AnchorContainer href={href} target="_blank">
        <span className="text">{children}</span>
      </AnchorContainer>
    );
  }

  return (
    <AnchorRouterContainer to={to}>
      {icon && <Icon icon={icon} />}

      <span className="text">{children}</span>
    </AnchorRouterContainer>
  );
};

export default Anchor;
