import React from 'react';
import styled from '@emotion/styled';
import ItemType from './ItemType';
import { JOB_TYPES } from '../utils/constants';

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction === 'vertical' ? 'column' : 'row')};
  align-items: ${({ direction }) => (direction === 'vertical' ? 'initial' : 'center')};
  gap: ${({ gap }) => `${gap}px`};
  justify-content: ${({ direction }) => (direction === 'vertical' ? 'center' : 'initial')};
  flex-wrap: wrap;
  
  .title {
    color: ${({ theme }) => `${theme.colors.textColor}`};
    font-size: ${({ theme, size }) => `${theme.fontSizes[size]}`};
    font-weight: ${({ theme }) => `${theme.fontWeight.regular}`};
    line-height: ${({ theme }) => `${theme.lineHeight.medium}`};
    text-align: left;
  }
`;

const Heading = ({ children, type, direction = 'vertical', size = 'small', gap = 12, style }) => {
  return (
    <HeadingContainer direction={direction} size={size} gap={gap} style={style}>
      <div className="title">{children}</div>
      <ItemType type={JOB_TYPES[type]} />
    </HeadingContainer>
  );
};

export default Heading;
