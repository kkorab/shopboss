import React from 'react';
import styled from 'styled-components';
import { PageWrapper } from 'components/atoms';

const StyledHeadline = styled.h1`
  padding: 2rem 0;
  width: 100%;
  text-align: left;
  text-transform: capitalize;
`;

const StyledProductsWrapper = styled.div`
  width: 100%;
`;

const StyledProduct = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  background: white;
  justify-content: center;
  align-items: center;

  & img {
    width: 50%;
  }
`;

const Wishlist = () => (
  <PageWrapper>
    <StyledHeadline>my wishlist</StyledHeadline>
    <StyledProductsWrapper>
      <StyledProduct>
        <img
          src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          alt="pic"
        />
      </StyledProduct>
    </StyledProductsWrapper>
  </PageWrapper>
);

export default Wishlist;
