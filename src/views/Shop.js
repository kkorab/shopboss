import React, { useState } from 'react';
import styled from 'styled-components';
import { Advert, ProductCard } from 'components/molecules';
import firstWave from 'assets/svg/adv-wave.svg';
import { CategoryHeadline } from 'components/atoms';
import data from 'data';

const StyledShop = styled.div`
  padding: 2rem 0;
  width: 100%;
  overflow: hidden;
`;

const StyledWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* Nav padding */
  padding-top: 100px;
`;

const props1 = {
  headline: 'spend more, save more!',
  primaryParagraph: 'get $100 off',
  secondaryParagraph: 'when you spend $300',
  tertiaryParagraph: 'use code Money300',
  bubbleColors: {
    primaryBubColor: 'rgba(253, 183, 21, 1) 0%',
    secondaryBubColor: 'rgba(255, 235, 193, 1) 100%',
  },
  contentColors: {
    primaryColor: 'rgba(167, 154, 230, 1)',
    secondaryColor: 'rgba(104, 92, 162, 1)',
  },
  waves: {
    firstWave,
  },
};

const Shop = () => {
  const [products] = useState([...data]);
  return (
    <StyledShop>
      <StyledWrapper>
        <CategoryHeadline>Promotions</CategoryHeadline>
        <Advert params={props1} />
        <CategoryHeadline>New In</CategoryHeadline>
        {products.map(
          item => item.isNew && <ProductCard key={item.id} productData={item} />
        )}
      </StyledWrapper>
    </StyledShop>
  );
};

export default Shop;
