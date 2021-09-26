import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'wouter';
import ItemIcon from './ItemIcon';
import Heading from './Heading';
import Image from './Image';
import { formattedDate } from '../utils/helpers';
import { bps } from '../styles';

const CardContainer = styled(Link)`
  border-radius: ${({ theme }) => `${theme.borderRadius.small}`};
  background-color: ${({ theme }) => `${theme.bgColors.light}`};
  color: ${({ theme }) => `${theme.colors.textColor}`};
  box-shadow: ${({ theme }) => `${theme.boxShadows.type1}`};
  min-height: 114px;
  width: 100%;
  padding: 12px;
  text-decoration: none;

  :hover {
    transform: scale(1.01);
  }
  ${bps.mobile} {
    min-height: 147px;
  }
`;

const TopContainer = styled.div`
  display: flex;
  flex: 100%;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  float: left;
  color: ${({ theme }) => `${theme.colors.textColor}`};
  font-size: ${({ theme }) => `${theme.fontSizes.xxsmall}`};
  font-weight: ${({ theme }) => `${theme.fontWeight.bold}`};
  line-height: ${({ theme }) => `${theme.lineHeight.xxsmall}`};
  font-family: 'Roboto';
  height: fit-content;

  .company {
    margin-bottom: 8px;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 100%;
  clear: both;
  margin-top: -10px;
  
  ${bps.mobile} {
    margin-top: 14px;
    justify-content: flex-start;
    padding-left: 106px;
  }
`;

const Card = ({ id, image = null, company, title, type, location, date }) => {
  return (
    <CardContainer to={`job/${id}`}>
      <TopContainer>
        <Image image={image} style={{ marginRight: 16, float: 'left' }} />
        <DataContainer>
          <div className="company">{company}</div>
          <Heading type={type}>{title}</Heading>
        </DataContainer>
      </TopContainer>
      <BottomContainer>
        {location && <ItemIcon icon="public">{location}</ItemIcon>}
        <ItemIcon icon="query_builder">{formattedDate(date)}</ItemIcon>
      </BottomContainer>
    </CardContainer>
  );
};

export default Card;
