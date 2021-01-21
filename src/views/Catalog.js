import React, { useState } from 'react';
import styled from 'styled-components';
import { PageWrapper } from 'components/atoms';
import FilterListIcon from '@material-ui/icons/FilterList';
import { ProductCatalogCard } from 'components/molecules';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import CloseIcon from '@material-ui/icons/Close';

const ProductsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 48%);
  grid-gap: 10px;
  justify-content: center;
`;

const StyledFilters = styled.div`
  padding: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled.button`
  border: none;
  outline: none;
  background: none;
`;

const iconStyle = {
  fontSize: '4rem',
};

const Catalog = ({ products }) => {
  const [catalogProducts] = useState(products);
  const [isFiltered, setIsFiltered] = useState(false);
  const handleFilters = () => setIsFiltered(!isFiltered);
  return (
    <PageWrapper>
      <StyledFilters>
        <h3>Choose your filters</h3>
        <StyledButton onClick={handleFilters}>
          <FilterListIcon style={iconStyle} />
        </StyledButton>
      </StyledFilters>
      <ProductsWrapper>
        {catalogProducts.map(el => (
          <ProductCatalogCard key={el.id} product={el} />
        ))}
      </ProductsWrapper>
    </PageWrapper>
  );
};

Catalog.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      isNew: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps)(Catalog);
