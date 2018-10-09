import React, { Component } from 'react'
import Media from './media'

class PLaylist extends Component {
    render() {
        console.log(this.props.data);
        const playlist = this.props.data.categories[0].playlist
        <div>
            {
                playlist.map((item) => {
                    return<Media {item} key={item.id} />
                })
            }
        </div>

    }
}
