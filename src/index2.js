import React, {Component} from 'react'
import {render} from 'react-dom'

import Plylist from './src/playlist/componentes/playlist.js'
import data from './src/api.json'

const app = document.getElementById('app')

render (<Playlist data={data} />,app)
