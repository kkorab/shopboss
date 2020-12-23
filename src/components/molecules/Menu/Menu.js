import React from 'react';
import styled from 'styled-components';
import { MenuItem, MenuLink } from 'components/atoms';

const StyledHamburgerMenu = styled.button`
  display: flex;
  flex-direction: column;
  background: black;
  width: 34px;
  height: 2px;
  position: fixed;
  top: 48px;
  right: 20px;
  border: none;

  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 2px;
    background: black;
    position: absolute;
    top: -12px;
  }

  &::after {
    top: 12px;
  }
`;

const StyledMenu = styled.ul`
  list-style: none;
`;

const Menu = () => (
  //   const [isOpen, setIsOpen] = useState(false);
  <>
    <StyledHamburgerMenu
      onClick={() => {
        console.log('hello');
      }}
    />
    <StyledMenu>
      <MenuItem>
        <MenuLink>Home</MenuLink>
      </MenuItem>
    </StyledMenu>
  </>
);
export default Menu;
