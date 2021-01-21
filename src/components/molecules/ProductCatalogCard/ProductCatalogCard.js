import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProductWrapper = styled.div`
  width: 100%;
  min-height: 200px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 50%;
  max-height: 100px;
`;

const ProductCatalogCard = ({ product }) => {
  const { image, title } = product;
  return (
    <ProductWrapper>
      <StyledImg src={image} alt={title} />
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
