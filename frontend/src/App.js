import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Client from './pages/customer/index.jsx';
import Ressource from './pages/ressource/index.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path={['/', '/accueil']} exact component={Client} />
        <Route path="/ressource" exact component={Ressource} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
