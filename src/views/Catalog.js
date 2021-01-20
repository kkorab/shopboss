import React, { useState } from 'react';
import styled from 'styled-components';
// import FilterListIcon from '@material-ui/icons/FilterList';
// import CloseIcon from '@material-ui/icons/Close';

const StyledWrapper = styled.div`
  padding-top: 100px;
`;

const Catalog = () => {
  const [isFiltered, setIsFiltered] = useState(false);
  const handleFilters = () => setIsFiltered(!isFiltered);
  return (
    <StyledWrapper>
      <h1>Hello from Catalog</h1>
      <button type="submit" onClick={handleFilters}>
        Filters
      </button>
      {isFiltered && <pre>isFiltered!</pre>}
    </StyledWrapper>
  );
};

export default Catalog;
