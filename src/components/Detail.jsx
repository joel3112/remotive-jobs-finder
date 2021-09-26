import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import Heading from './Heading';
import ItemIcon from './ItemIcon';
import Image from './Image';
import { formattedDate } from '../utils/helpers';

const DetailContainer = styled.div``;

const CompanyContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 32px;

  .company {
    color: ${({ theme }) => `${theme.colors.textColor}`};
    font-size: ${({ theme }) => `${theme.fontSizes.small}`};
    font-weight: ${({ theme }) => `${theme.fontWeight.bold}`};
    margin-bottom: 10px;
    text-align: left;
  }
`;

const DescriptionContainer = styled.div`
  font-size: ${({ theme }) => `${theme.fontSizes.small}`};
  text-align: left;

  * {
    color: ${({ theme }) => `${theme.colors.textColor}`} !important;
    font-family: 'Roboto' !important;
  }
`;

const Detail = ({ id, title, type, date, image, company, location, description }) => {
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (description) {
      descriptionRef.current.innerHTML = description;
    }
  }, [description]);

  return (
    <DetailContainer>
      {type && (
        <Heading type={type} direction="horizontal" size="medium">
          <b>{title}</b>
        </Heading>
      )}
      {date && (
        <ItemIcon icon="query_builder" style={{ margin: '9px 0 34px 0' }}>
          {formattedDate(date)}
        </ItemIcon>
      )}
      {image && company && (
        <CompanyContainer>
          <Image image={image} size={42} />
          <div>
            <div className="company">{company}</div>
            {location && <ItemIcon icon="public">{location}</ItemIcon>}
          </div>
        </CompanyContainer>
      )}
      <DescriptionContainer ref={descriptionRef}></DescriptionContainer>
    </DetailContainer>
  );
};

export default Detail;
