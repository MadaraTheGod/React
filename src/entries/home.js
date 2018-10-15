import React, { Component } from 'react'
//Forma abreviada de importar render de React-DOM
import { render } from 'react-dom'
//importamos un componente
//Siempre debemos importarlo con la primera letra en mayuscula
// import Playlist from './src/playlist/componentes/playlist'
// import Custom_Media from './src/playlist/componentes/custom_media'
// import data from './src/api.json'
import Home from '../pages/containers/home'
import data from '../api.json'

// Renderizamos un mensaje en el explorador
// ReactDOM.render(lo que voy a renderizar, donde lo hare)

const app = document.getElementById('app')
const saludo = <h1>Hola mundote</h1>;

render(<Home data={data}/>, app)
//render(<Custom_Media('Titulote', '') />, app)
