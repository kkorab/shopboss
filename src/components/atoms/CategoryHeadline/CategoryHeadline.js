import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeadline = styled.h1`
  padding: 2rem 0;
  color: rgba(0, 0, 0, 0.8);
  font-size: ${({ theme }) => theme.fontSizes.l};
  text-transform: lowercase;
  letter-spacing: 2px;
`;

const CategoryHeadline = ({ children }) => (
  <StyledHeadline>{children}</StyledHeadline>
);

CategoryHeadline.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CategoryHeadline;
