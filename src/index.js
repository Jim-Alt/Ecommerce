// Import React Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import Context
import { CartContextProvider } from './context/CartContext';
import { NavContextProvider } from './context/NavContext';
import { PreviewSliderContextProvider } from './context/PreviewSliderContext';

// Import Component
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Account from './pages/Account/Account';

import ItemSelectorPage from './pages/Items/ItemSelectorPage';
import ItemSubcategorySelectorPage from './pages/Items/ItemSubCategorySelectorPage';
import ItemDetailPage from './pages/Items/ItemDetailPage';

// Import Style
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;  
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

function App () {
  return (
    <NavContextProvider>
      <CartContextProvider>
        <React.StrictMode>
          <PreviewSliderContextProvider>
            <Router>
              <Header/>
              <HomeWrapper>
                <ContentWrapper>
                  <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="Shelter" element={<ItemSubcategorySelectorPage itemCategory='Shelter'/>} >
                      <Route path="SingleWall" element={<ItemSelectorPage itemCategory='Shelter' itemSubCategory='SingleWall'/>}>
                        <Route path=":id" element={<ItemDetailPage itemCategory='Shelter' itemSubCategory='SingleWall'/>}/>
                      </Route>
                      <Route path="DoubleWall" element={<ItemSelectorPage itemCategory='Shelter' itemSubCategory='DoubleWall'/>}>
                        <Route path=":id" element={<ItemDetailPage itemCategory='Shelter' itemSubCategory='DoubleWall'/>}/>
                      </Route>
                      <Route path="Accessory" element={<ItemSelectorPage itemCategory='Shelter' itemSubCategory='Accessory'/>}>
                        <Route path=":id" element={<ItemDetailPage itemCategory='Shelter' itemSubCategory='Accessory'/>}/>
                      </Route>
                    </Route>

                    <Route path="Bedding" element={<ItemSubcategorySelectorPage itemCategory='Bedding'/>} >
                      <Route path="SleepingBag" element={<ItemSelectorPage itemCategory='Bedding' itemSubCategory='SleepingBag'/>}>
                        <Route path=":id" element={<ItemDetailPage itemCategory='Bedding' itemSubCategory='SleepingBag'/>}/>
                      </Route>
                      <Route path="Mattress" element={<ItemSelectorPage itemCategory='Bedding' itemSubCategory='Mattress'/>}>
                        <Route path=":id" element={<ItemDetailPage itemCategory='Bedding' itemSubCategory='Mattress'/>}/>
                      </Route>
                      <Route path="Hammock" element={<ItemSelectorPage itemCategory='Bedding' itemSubCategory='Hammock'/>}>
                        <Route path=":id" element={<ItemDetailPage itemCategory='Bedding' itemSubCategory='Hammock'/>}/>
                      </Route>
                      <Route path="Accessory" element={<ItemSelectorPage itemCategory='Bedding' itemSubCategory='Accessory'/>}>
                        <Route path=":id" element={<ItemDetailPage itemCategory='Bedding' itemSubCategory='Accessory'/>}/>
                      </Route>
                    </Route>

                    <Route path="Cooking" element={<ItemSubcategorySelectorPage itemCategory='Cooking'/>} >
                      <Route path="Cooking" element={<ItemSelectorPage itemCategory='Cooking' itemSubCategory='Cooking'/>}>
                        <Route path=":id" element={<ItemDetailPage itemCategory='Cooking' itemSubCategory='Cooking'/>}/>
                      </Route>
                      <Route path="Stove" element={<ItemSelectorPage itemCategory='Cooking' itemSubCategory='Stove'/>}>
                        <Route path=":id" element={<ItemDetailPage itemCategory='Cooking' itemSubCategory='Stove'/>}/>
                      </Route>
                    </Route>

                    <Route path="Portage" element={<ItemSubcategorySelectorPage itemCategory='Portage'/>} >
                      <Route path="Minus30L" element={<ItemSelectorPage itemCategory='Portage' itemSubCategory='Minus30L'/>}>
                        <Route path=":id" element={<ItemDetailPage itemCategory='Portage' itemSubCategory='Minus30L'/>}/>
                      </Route>
                      <Route path="Plus30L" element={<ItemSelectorPage itemCategory='Portage' itemSubCategory='Plus30L'/>}>
                        <Route path=":id" element={<ItemDetailPage itemCategory='Portage' itemSubCategory='Plus30L'/>}/>
                      </Route>
                    </Route>

                    <Route path="/Account" element={<Account />} />
                  </Routes>
                </ContentWrapper>
              </HomeWrapper>
              <Footer/>

          </Router>
        </PreviewSliderContextProvider>
      </React.StrictMode>
    </CartContextProvider>
  </NavContextProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
