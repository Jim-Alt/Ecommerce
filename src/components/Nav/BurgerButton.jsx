// Import React Libraries
import React, { useEffect, useRef } from 'react';

// Import PropType
import PropTypes from 'prop-types';

// Import Context
import { useNav } from '../../context';

// Import Component
import SideNav from './SideNav';
import NavItems from './NavItems';

// Import Style
import styled from 'styled-components';
// import colors from '../../utils/Colors';

// Import Constante
import { responsiveWidthTablet, zIndexBurgerButton } from '../../utils/Constant';

const MenuWrapper = styled.div`
  padding:0;
  width: 100%;
  background-color: transparent;
`;

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;

    position: fixed;
    top: ${({ open }) => open ? '17px' : '10px'};
    right: ${({ open }) => open ? '10px' : '15px'};
    
    border-radius: 5px;
    padding: 2px;

    z-index: ${zIndexBurgerButton};

    display: none;

    @media (max-width: ${responsiveWidthTablet}px){
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
        border-color: black;
        cursor: pointer;
    }

    div{
        
        height: 0.25rem;
        border-radius: 10px;
        
        transform-origin: 1px;

        &:nth-child(1){
            transform: ${({ open }) => open ? 'translate(14%) rotate(45deg)' : 'translate(0) rotate(0)'};
        }

        &:nth-child(2){
            transform: ${({ open }) => open ? 'translate(100%)' : 'translate(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }

        &:nth-child(3){
            transform: ${({ open }) => open ? 'translate(14%) rotate(-45deg)' : 'translate(0) rotate(0)'};
        }

        
        
        @media (max-width: ${responsiveWidthTablet}px){
          background-color: ${({ open }) => open ? 'black' : 'white'};
        }

    }
`;

export const sideNavPropsType = PropTypes.shape({
  open: PropTypes.bool.isRequired,
  handleCloseBurger: PropTypes.func.isRequired
});

function Burger () {
  const { openBurgerButton, setOpenBurgerButton } = useNav();
  const burgerRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside the component
    function handleClickOutside (event) {
      /*
      console.log('burgerRef.current');
      console.log(burgerRef.current);
      console.log('!burgerRef.current.contains(event.target)');
      console.log(!burgerRef.current.contains(event.target));
      console.log('event.target');
      console.log(event.target);
      */

      if (burgerRef.current && !burgerRef.current.contains(event.target)) {
        setOpenBurgerButton(false);
      }
    }

    // Add event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <MenuWrapper ref={burgerRef} id='menuWrapper'>
        <StyledBurger open={openBurgerButton} onClick={() => setOpenBurgerButton(!openBurgerButton)}>
            <div />
            <div />
            <div />
        </StyledBurger>
        <SideNav openBurgerButton={openBurgerButton} handleCloseBurger={() => setOpenBurgerButton(false)}/>
        <NavItems openBurgerButton={openBurgerButton} handleCloseBurger={() => setOpenBurgerButton(false)}/>
    </MenuWrapper>
  );
}

export default Burger;
/*
<SideNav openBurgerButton={openBurgerButton} handleCloseBurger={() => setOpenBurgerButton(false)}/>
            <NavItems openBurgerButton={openBurgerButton} handleCloseBurger={() => setOpenBurgerButton(false)}/>
            */
