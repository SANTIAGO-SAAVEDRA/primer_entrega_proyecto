import React from 'react';
import { useEffect, useState } from 'react'
import { Router as Router, Switch, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { CartContextProvider } from './context/CartContext';
import { Home } from  './pages/Home/Home';
import { Contacto } from './pages/Contacto/Contacto';
import { Envios } from './pages/Envios/Envios';
import { Nosotros } from './pages/Nosotros/Nosotros';
import { Cart } from './pages/Cart/Cart';
import CartWidget from './components/CartWidget/CartWidget';


function App() {

  return (
    <div className="App">
<CartContextProvider>

      <NavBar />
<BrowserRouter>
<Link to="/">Home</Link>
      <Switch>

        <Route path='category/:idCategory' exact component={ItemListContainer}></Route>
        <Route path='/category/envios'>
          <Envios/>
        </Route>

        <Route exact path='/nosotros'>
          <Nosotros/>
        </Route>

        <Route exact path='/contacto'>
          <Contacto/>
        </Route>

        <Route exact path='/cart'>
          <CartWidget/>
          {iconCart()}
          <Cart/>
        </Route>
      </Switch>

</BrowserRouter>
</CartContextProvider>
    </div>

  )
}

export default App;
