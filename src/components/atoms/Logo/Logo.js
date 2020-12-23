import React from 'react';
import priceTag from 'assets/svg/price-tag.svg';
import styled from 'styled-components';

const flexDisplay = `display: flex; justify-content: center; align-items: center;`;

const StyledWrapper = styled.div`
  height: 100%;
  ${flexDisplay}
`;

const StyledImage = styled.img`
  width: 40px;
  position: relative;
`;

const StyledCircle = styled.div`
  width: 55px;
  height: 55px;
  background: #ffebc1;
  border-radius: 50%;
  ${flexDisplay}
`;

const StyledLogo = styled.h1`
  padding: 1rem 0 1rem 0.7rem;
  letter-spacing: -1px;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  position: relative;
`;

const Logo = () => (
  <StyledWrapper>
    <StyledCircle>
      <StyledImage src={priceTag} />
    </StyledCircle>
    <StyledLogo>shopboss</StyledLogo>
  </StyledWrapper>
);

export default Logo;
