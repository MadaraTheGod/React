import React, { PureComponent } from 'react'
//Cambiamos el diseno que tenemos en Styles de Media por la config de media.css
import PropTypes from 'prop-types';
import './media.css'
import Select from 'react-select'

const optionsMain = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const optionsDC = [
  { value: 'batman', label: 'Batman' },
  { value: 'Robin', label: 'Robin' },
  { value: 'joker', label: 'The Joker' }
];

var options = [{}]

options = optionsDC

//Existen tres modos de componentes
	// Funcional
	// Puro
	// Estado

//Ejemplo de un componente de estados
//class Media extends React.Component {

//Modificamos el componente para hacerlo uno puro, para lo cual necesitamos importar PureComponent de react
// La diferencia con un componente de estado, es que el pure ya tiene un shoudComponentUpdate asignado, por lo
// no redenderisida cuando los componen no han cambiado.
class Media extends PureComponent {
	// No es necesario crear un constructor para pasar el contexto ahandleCLick si utilizamos arrow function


	// //Enlaza el handleClick con mi componente Media asi que handle podra usar las propiedades de Media (ECMAScrip6)
	// constructor(props) {
	// 	super(props) //Nos permite usar las propiedades de Media
	// 	//Enlaza el evento handleClick del DOM a la clase Media, cambiandole el contexto a la funcion
	// 	this.handleClick = this.handleClick.bind(this);
	// }


	// Las propiedades son inmuables, asi que para "actualizar" estas propiedades se utilizan los estados de los componentes
	// Para trabajar con este state se hace lo sig (ECMAScript6)
	// constructor(props) {
	// 	super(props) //Nos permite usar las propiedades de Media
	// 	// Cambiamos el state de nuestro componente
	// 	this.state = {
	// 		author: props.author // Ahora llamamos a la  propiedad como this.state.author
	// 	}
	// }


	// Las propiedades son inmuables, asi que para "actualizar" estas propiedades se utilizan los estados de los componentes
	// el cual permite tener contenido dinámico
	// Para trabajar con este state se hace lo sig (ECMAScript7)
	state = {
        title: this.props.title,
		author: 'Juan Carlos Gutierrez',
		newImage: true,
		selectedOption: null,
        image: this.props.cover
	}

	// Creamos la funcion handleClick como una ArrowFunction (ECMAScript7)
	handleClick = (event) => {
		// El state de un componente se cambia con un metodo especial llamado setState
		if (this.state.newImage) {
			console.log('true')
			this.setState({
				author: 'Ricardo Celis',
				image: './images/covers/op5-dark.jpg',
				newImage: false
			})
		}
		else {
			console.log('false')
			this.setState({
				author: 'Juan Carlos Gutierrez',
				image: './images/covers/op5-light.png',
				newImage: true
			})
		}
	}

	handleChangeSelect = (selectedOption) => {
	    this.setState({ selectedOption });
	    console.log(`Option selected:`, selectedOption);
  	}

	handleChange = value => {
		this.setState({value})
		this.props.onChange(value)
	}

    showOri = () => {
        this.setState({image: this.props.cover})
    }

	render() {
		//Ya no se necesita ahora empleamos un media.css
		/*
		const styles = {
			container: {
				color: '44546b',
				cursor: 'pointer',
				wedth: 260,
				border: '1px solid red'
			}
		}*/

		return (
			<div className="Media" >
				<div className='Media-cover'>
					<img
						className='Media-cover'
                        onClick={this.handleClick}
						src={this.state.image}
						alt=''
						width={240}
						height={160}
						border= '1px solid red'
					/>
					<h3 className='Media-title'>{this.state.title}</h3>
					<p className='Media-author'>{this.state.author}</p>



                      <button type='button' onClick={this.showOri}>Show Ori</button>
				</div>
			</div>
		)
	}
}

Media.propTypes = {
	//Valida que tipo de valor va a recir el componente desde index.js
	cover: PropTypes.string,
	//isRequired obliga a que se reciba un valor para la propiedad title
	title: PropTypes.string.isRequired,
	author: PropTypes.string,
	type: PropTypes.oneOf(['video', 'audio']),

}

export default Media
