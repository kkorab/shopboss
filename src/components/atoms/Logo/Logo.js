import React from 'react';
import styled from 'styled-components';
import priceTag from 'assets/svg/price-tag.svg';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

const flexDisplay = `display: flex; justify-content: center; align-items: center;`;

const StyledWrapper = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.fontColors.primaryColor};
  height: 100%;
  ${flexDisplay}
  z-index: 0;
`;

const StyledImage = styled.img`
  width: ${({ pathname }) => (pathname !== '/' ? '35px' : '40px')};
  position: relative;
`;

const StyledCircle = styled.div`
  width: ${({ pathname }) => (pathname !== '/' ? '35px' : '55px')};
  height: ${({ pathname }) => (pathname !== '/' ? '35px' : '55px')};
  background: #ffebc1;
  border-radius: 50%;
  ${flexDisplay}
`;

const StyledLogo = styled.h1`
  padding: 1rem 0 1rem 0.7rem;
  letter-spacing: -1px;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme, pathname }) =>
    pathname !== '/' ? theme.fontSizes.l : theme.fontSizes.xl};
  position: relative;
`;

const Logo = () => {
  let { pathname } = useLocation();
  return (
    <StyledWrapper to="/">
      <StyledCircle pathname={pathname}>
        <StyledImage pathname={pathname} src={priceTag} />
      </StyledCircle>
      <StyledLogo pathname={pathname}>shopboss</StyledLogo>
    </StyledWrapper>
  );
};

export default Logo;
