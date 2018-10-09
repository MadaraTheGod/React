import React, { Component } from 'react'
import PropsTypes from 'props-types'; //No se que hace (Nota: volver a repasar)
import './media.css'
import Select from 'react-select'

//Select Opcion 1
const mejoresAnimes = [
    {valie: 'onepiece', label: 'One Piece' },
    {value:"naruto", label: "Naruto",
    {value:"hunterxhunter"}, label: "Hunter X Hunter"
]

class Media extends Component {
    //Constructor en forma ECMAScript7
    state = {
        author: "Juan Carlos",
        newImage: true,
        selectOption: null
    }

    handleClick = (event) => {
        if(this.state.newImage) {
            console.log('true');
            this.setState{
                author: "Carlos Soto",
                image: "'./imagenes/covers/logoBatman1.jpg",
                newImage: false
            }
        }
        else {
            console.log('false');
            this.setState{
                author: "Juan Carlos"
                image: "./imagenes/covers/batman-new.jpg",
                newImage: true
            }
        }
    }

handleChangeSelect = (selectedOption) => {
    this.setState({selectOption: selectedOption})
    console.log(`Opc: ${selectOption}`);
}

render() {
    return(
        <div className="Media" onCclick{this.handleClick}>
            <div className='Media-cover'>
                <img
                    className="Media-cover"
                    src={this.stateimage}
                />
            </div>
        </div>
    )
}


}

//Select Opcion 2
