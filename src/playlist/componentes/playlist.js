import React, { Component } from 'react'
import Media from './media'

class Playlist extends Component {
	render() {
		console.log(this.props.data)
		console.log(this.props.libros);
		const playlist = this.props.data.categories[0].playlist
		return (
			<div>
				{
						playlist.map((item) => {
						return <Media {...item} key={item.id} />
					})
				}
			</div>
		)
	}
}

export default Playlist
