import React from 'react';
import { Logo } from 'components/atoms';
import styled from 'styled-components';

const StyledNav = styled.nav`
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 500;
`;

const NavBar = () => (
  <StyledNav>
    <Logo />
  </StyledNav>
);

export default NavBar;
