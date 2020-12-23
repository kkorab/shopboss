import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.fontColors.tertiaryColor};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

const MenuLink = ({ children }) => (
  <StyledLink as={Link} to="/">
    {children}
  </StyledLink>
);

MenuLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuLink;
