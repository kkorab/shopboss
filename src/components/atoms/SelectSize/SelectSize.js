import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  display: block;
  width: 200px;
  margin: 2rem auto;
  padding: 1rem 0;
  font-size: ${({ theme }) => theme.fontSizes.s};
  text-align: center;
`;

const StyledOption = styled.option`
  font-size: ${({ theme }) => theme.fontSizes.s};
`;

const SelectSize = () => (
  <StyledSelect>
    <StyledOption value="" selected disabled hidden>
      Choose your size
    </StyledOption>
    <StyledOption>xs</StyledOption>
    <StyledOption>s</StyledOption>
    <StyledOption>m</StyledOption>
    <StyledOption>l</StyledOption>
    <StyledOption>xl</StyledOption>
    <StyledOption>xxl</StyledOption>
  </StyledSelect>
);

export default SelectSize;
