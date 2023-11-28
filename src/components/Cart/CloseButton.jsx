// Import React Libraries
import React from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Style
import styled from 'styled-components';

const ClosingCross = styled.div`
    width: 2rem;
    height: 2rem;
    
    position:fixed;
    top: 5px;
    right: 5px;

    border: 1px solid black;
    
    border-radius: 5px;
    padding: 2px;

    z-index: 20;

    color: black;

    div{
        
        height: 0.25rem;
        border-radius: 10px;
        
        transform-origin: 1px;

        background-color: black;

        &:nth-child(1){
            transform: translate(14%, 65%) rotate(45deg);
        }

        &:nth-child(2){
            transform: translate(14%, 500%) rotate(-45deg);
        }
    }
`;

function CloseButton ({ isOpen, setIsOpen }) {
  return (
          <ClosingCross onClick={() => setIsOpen(!isOpen)}>
            <div/>
            <div/>
          </ClosingCross>
  );
}
CloseButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired
};

export default CloseButton;
