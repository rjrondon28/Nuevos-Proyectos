import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Registro} from './Registro'
import {Filtro} from './Filtro'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Registro clas="register" href="google.com" nombre="Registro" />
    <Filtro clas="filtrar" />
    <App stilo="border" usuario= { [{nombre:"Ricardo",
                                        grupo: "Admin",
                                        sede:"Ais",
                                        fecha_h:"16/04/1999" },
                                        {nombre:"Jose",
                                        grupo: "Super Admin",
                                        sede:"Agronomia",
                                        fecha_h:"16/04/2001" },
                                        {nombre:"Pedro",
                                        grupo: "Operador",
                                        sede:"Veterinaria",
                                        fecha_h:"29/11/1977" },
                                        {nombre:"Manuel",
                                        grupo: "Estudiante",
                                        sede:"Medicina",
                                        fecha_h:"08/09/2002" }] } />
  </>
);

