import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Registro} from './Registro'
import {Filtro} from './Filtro'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Registro href="google.com" nombre="Registro" />
    <Filtro />
    <App stilo="border" usuario= {6} />
  </>
);

