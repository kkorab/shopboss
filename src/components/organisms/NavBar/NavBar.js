import React from 'react';
import styled from 'styled-components';
import { Logo } from 'components/atoms';
import { MobileMenu } from 'components/molecules';
import { useLocation } from 'react-router-dom';

const StyledNav = styled.nav`
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ pathname, theme }) =>
    pathname !== '/' ? theme.bgColors.waveColor : null};
  /* box-shadow: 0px 20px 40px -5px rgba(0, 0, 0, 0.3); */
`;

const StyledNavWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: ${({ pathname }) =>
    pathname !== '/' ? 'space-between' : 'center'};
`;

const NavBar = () => {
  let { pathname } = useLocation();
  return (
    <StyledNav pathname={pathname}>
      <StyledNavWrapper pathname={pathname}>
        <Logo />
        {pathname !== '/' && <MobileMenu />}
      </StyledNavWrapper>
    </StyledNav>
  );
};

export default NavBar;
