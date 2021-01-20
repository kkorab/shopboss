import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledBubble = styled.div`
  width: ${({ params }) => params.size};
  height: ${({ params }) => params.size};
  border-radius: 50%;
  background: ${({ params }) =>
    `linear-gradient(45deg, ${params.primaryBubColor}, ${params.secondaryBubColor})`};
  position: absolute;
  left: ${({ params }) => params.x};
  top: ${({ params }) => params.y};
  opacity: 0.9;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Bubble = ({ params }) => <StyledBubble params={params} />;

Bubble.propTypes = {
  params: PropTypes.shape({
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    primaryBubColor: PropTypes.string.isRequired,
    secondaryBubColor: PropTypes.string.isRequired,
  }).isRequired,
};

export default Bubble;
