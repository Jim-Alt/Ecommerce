// Import React Libraries
import React from 'react';

// Import Context
import { useNavContext } from '../../context/NavContext';

// Import compoment
import Dropdown from '../Dropdown/Dropdown';

// Import Functions

// Import Style
import styled from 'styled-components';

// Import Colors
import colors from '../../utils/Colors';

// Import constantes
import { responsiveWidthTablet, headerHeight, zIndexSideNav } from '../../utils/Constant';

//
const StyledUl = styled.ul`
  height: ${headerHeight}px;
  z-index:${zIndexSideNav};
  display: flex;
  align-items: center;
  gap: 2rem;

  list-style: none;
  text-decoration: none;
  padding: 0 20px;
  margin:0;
  background: ${colors.marineBlue};

  @media (max-width: ${responsiveWidthTablet}px){
      flex-flow: column nowrap;

      position: fixed;
      top: 120px;
      right: 0;
      height: 100vh;
      width: 100px;
      padding: 0 3rem;
      align-items: stretch;
      margin-right:0;
      gap:1rem;
      
      justify-content: top-start;
      
      background: #ffffff;

      transform: ${({ burgerButtonState }) => burgerButtonState ? 'translateX(0)' : 'translateX(100%)'};
      li{
          margin-bottom: 0px;
      }
  }
`;
const StyledLi = styled.li`

`;

const ItemSideNav = styled.div`
`;
function NavItems () {
  const { burgerButtonState, setBurgerButtonState } = useNavContext();

  const dropDownTitle1 = 'Shelter';
  const links1 = ['Shelter/SingleWall', 'Shelter/DoubleWall', 'Shelter/Accessory'];
  const linksRender1 = ['Single Wall', 'Double Wall', 'Accessory'];

  const dropDownTitle2 = 'Bedding';
  const links2 = ['Bedding/SleepingBag', 'Bedding/Mattress', 'Bedding/Hammock'];
  const linksRender2 = ['SleepingBag', 'Mattress', 'Hammock'];

  return (
    <ItemSideNav id='itemSideNav'>
      <StyledUl burgerButtonState={burgerButtonState} id='itemUl'>
            <StyledLi><Dropdown dropDownTitle ={dropDownTitle1} options={linksRender1} links={links1} handleCloseBurger={() => setBurgerButtonState(false)}/></StyledLi>
            <StyledLi><Dropdown dropDownTitle ={dropDownTitle2} options={linksRender2} links={links2} handleCloseBurger={() => setBurgerButtonState(false)}/></StyledLi>
        </StyledUl>
    </ItemSideNav>

  );
}

export default NavItems;
