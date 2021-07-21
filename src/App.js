import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Proyectos from './pages/Proyectos';
import Conocimientos from './pages/Conocimientos';
import Contacto from './pages/Contacto';
import Error from './pages/Error';

export function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/conocimientos' exact component={Conocimientos} />
          <Route path='/proyectos' exact component={Proyectos} />
          <Route path='/contacto' exact component={Contacto} />
          <Route path='/' component={Error} />
        </Switch>
      </Router>

    </>
  );
}

export default App;