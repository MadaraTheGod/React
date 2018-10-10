import React, { Component } from 'react'
import Media from './media'
import './playlist.css';


//Cambiamos el componente por uno funcional
/*class Playlist extends Component {
	render() {
		console.log(this.props.data)
		console.log(this.props.libros);
		const playlist_destacados = this.props.data.categories[0].playlist
		const playlist_programar = this.props.data.categories[1].playlist
		const playlist_regue = this.props.data.categories[2].playlist
		const playlists = [playlist_destacados, playlist_programar, playlist_regue]
		return (
			<div>
			{
				playlists.map((categorie) => {
					console.log(categorie);
					return(
						<div className='Playlist'>
						{
							categorie.map((item) => {
								return <Media {...item} key={item.id} />
							})
						}
						</div>)
				})
			}
			</div>
		)
	}
}*/

function Playlist(props) {
		console.log(props.data)
		console.log(props.libros);
		const playlist_destacados = props.data.categories[0].playlist
		const playlist_programar = props.data.categories[1].playlist
		const playlist_regue = props.data.categories[2].playlist
		const playlists = [playlist_destacados, playlist_programar, playlist_regue]
		return (
			<div>
			{
				playlists.map((categorie) => {
					console.log(categorie);
					return(
						<div className='Playlist'>
						{
							categorie.map((item) => {
								return <Media {...item} key={item.id} />
							})
						}
						</div>)
				})
			}
			</div>
		)

}

export default Playlist
