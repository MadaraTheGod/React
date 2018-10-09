import React, { Component } from 'react'

//Existen tres modos de componentes
	// Funcional
	// Puro
	// Estado

//Ejemplo de un componente puro

class CustomMedia extends Component {
	constructor (titulo, autor) {
		super();
		this.titulo = titulo
		this.autor = autor
	}

	render() {
		return (
			<div>
				<img 
				src=''
				alt=''
				width={260}
				height={160}
				/>
				<h3>'${this.titulo}'</h3>
				<p>${this.autor}</p>
			</div>
		)
	}
}
export default CustomMedia