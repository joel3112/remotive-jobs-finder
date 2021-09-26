import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const ImageContainer = styled.div`
  background-color: ${({ theme }) => `${theme.bgColors.gray}`};
  color: ${({ theme }) => `${theme.colors.grayLightColor}`};
  border-radius: ${({ theme }) => `${theme.borderRadius.small}`};
  font-size: ${({ theme }) => `${theme.fontSizes.xxsmall}`};
  font-weight: ${({ theme }) => `${theme.fontWeight.regular}`};
  line-height: ${({ theme }) => `${theme.lineHeight.xxsmall}`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  font-family: 'Roboto Medium';
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => `${size}px`};
  min-width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
`;

const Image = ({ image, size = 90, style }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    if (image) {
      imgRef.current.style.backgroundImage = `url(${image})`;
      imgRef.current.style.backgroundColor = `white`;
    }
  }, [image]);

  return (
    <ImageContainer ref={imgRef} size={size} style={style}>
      {!image && <span>not found</span>}
    </ImageContainer>
  );
};

export default Image;
