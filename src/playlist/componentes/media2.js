import React, { Component } from 'react'
import PropsTypes from 'props-types'; //No se que hace (Nota: volver a repasar)
import './media.css'
import Select from 'react-select'

//Select Opcion 1
const opcAnimes = [
    {valie: 'onepiece', label: 'One Piece' },
    {value:"naruto", label: "Naruto",
    {value:"hunterxhunter"}, label: "Hunter X Hunter"
]

class Media extends Component {
    //Constructor en forma ECMAScript7
    state = {
        author: "Juan Carlos",
        newImage: true,
        selectedOption: null
    }

    handleClick = (event) => {
        if(this.state.newImage) {
            console.log('true');
            this.setState{
                author: "Carlos Soto",
                image: "./imagenes/covers/op5-dark.jpg",
                newImage: false
            }
        }
        else {
            console.log('false');
            this.setState{
                author: "Juan Carlos",
                image: "./imagenes/covers/op5-light.png",
                newImage: true
            }
        }
    }

    handleChangeSelect = (selectedOption) => {
        this.setState({selectedOption})
        console.log(`Opc: ${selectOption}`);
    }

    render() {
        return(
            <div className="Media" onClick{this.handleClick}>
                <div className='Media-cover'>
                    <img
                        className="Media-cover"
                        src={this.state.image}
                        alt=''
                        width={260}
                        height={160}
                        border='1px solid red'
                    />
                    <h3 className='Media-title'>{this.props.title}</h3>
                    <p className='Media-author'>{this.props.author}</p>

                    <Select
                        value={this.state.selectedOption}
                        onChange={this.handleChangeSelect}
                        options={opcAnimes}
                    />
                </div>
            </div>
        )
    }
}


Media.propsTypes = {
    cover: PropTypes.string,
    title: PropTypes.sting.isRequired,
    author: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['video','audio'])
}

export default Media
//Select Opcion 2
