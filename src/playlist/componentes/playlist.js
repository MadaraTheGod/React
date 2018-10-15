import React, { Component } from 'react'
import Media from './media'
import Play from '../../Icons/components/play.js'
import Pause from '../../Icons/components/pause'
import FullScreen from  '../../Icons/components/full_screen'
import Volume from '../../Icons/components/volume'

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
		return (
				<div className='Playlist'>
							{
								props.playlist.map((item) => {
									return <Media {...item} key={item.id} />
								})
							}
				</div>
				)
}

export default Playlist
