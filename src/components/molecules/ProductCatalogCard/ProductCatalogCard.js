import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductWrapper = styled.div`
  width: 100%;
  min-height: 200px;
  background: #fff;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 1fr;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img`
  margin: 0 auto;
  width: 50%;
  max-height: 100px;
`;

const StyledSmallBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const StyledInfoButton = styled.button`
  margin-top: 20px;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 10px;
  color: white;
  background: ${({ theme }) => theme.fontColors.tertiaryColor};
  font-family: ${({ theme }) => theme.fontFamilies.raleway};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  outline: none;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const ProductCatalogCard = ({ product }) => {
  const { image, title, id } = product;
  return (
    <ProductWrapper>
      <StyledImg src={image} alt={title} />
      <StyledSmallBox>
        <StyledInfoButton>
          <StyledLink to={`/products/${id}`}>See product &#187;</StyledLink>
        </StyledInfoButton>
      </StyledSmallBox>
    </ProductWrapper>
  );
};

ProductCatalogCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isNew: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ProductCatalogCard;
