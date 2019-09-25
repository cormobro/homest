import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Client from './pages/customer/index.jsx';
import Login from './pages/ressource/index.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path={['/', '/accueil']} exact component={Client} />
        <Route path="/bxQDGAhNPFnLTlk7hWtNNGr0IJg09R3IOXVOVzRZQ3UlcX1t2JJPzicFbt2h" exact component={Login} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
