import { useEffect, useState } from 'react'
import { Router as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { Home } from  './pages/Home/Home';
import { Contacto } from './pages/Contacto/Contacto';
import { Envios } from './pages/Envios/Envios';
import { Nosotros } from './pages/Nosotros/Nosotros';
import { Cart } from './pages/Cart/Cart';


function App() {

  return (

    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/home'>
          <Home/>
        </Route>

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
          <Cart/>
        </Route>

      </Switch>
    </Router>

  )
}

export default App;
