import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { NavLink } from 'react-router-dom';

const HamburgerMenu = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 100;
`;

const StyledOverlay = styled.div`
  display: block;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: 1s all;
`;

const StyledMenu = styled.div`
  width: 80vw;
  height: 100vh;
  background: ${({ theme }) => theme.bgColors.quinaryColor};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s all;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
`;

const StyledMenuListWrapper = styled.ul`
  width: 80%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
`;

const StyledMenuItem = styled.li`
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 6px;
  text-align: center;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.bgColors.primaryColor};
  font-size: ${({ theme }) => theme.fontSizes.l};
  transition: 0.4s all;

  &.active {
    color: ${({ theme }) => theme.fontColors.waveColor};
  }
`;

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const styleIcon = {
    fontSize: 45,
    transition: 'color 1s',
    color: isOpen && '#ffebc1',
  };
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <HamburgerMenu onClick={handleOpen}>
        {isOpen ? (
          <CloseIcon style={styleIcon} />
        ) : (
          <MenuIcon style={styleIcon} />
        )}
      </HamburgerMenu>
      <StyledOverlay isOpen={isOpen} />
      <StyledMenu isOpen={isOpen}>
        <StyledMenuListWrapper>
          <StyledMenuItem onClick={handleOpen}>
            <StyledLink exact to="/">
              Home
            </StyledLink>
          </StyledMenuItem>
          <StyledMenuItem onClick={handleOpen}>
            <StyledLink to="/shop">Shop</StyledLink>
          </StyledMenuItem>
          <StyledMenuItem onClick={handleOpen}>
            <StyledLink to="/blog">Blog</StyledLink>
          </StyledMenuItem>
          <StyledMenuItem onClick={handleOpen}>
            <StyledLink to="/contact">Contact</StyledLink>
          </StyledMenuItem>
        </StyledMenuListWrapper>
      </StyledMenu>
    </>
  );
};

export default MobileMenu;
