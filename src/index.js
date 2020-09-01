import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import socketIOClient from 'socket.io-client'
import store from 'store'
import Home from 'screens/Home'

import './index.css'

render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.getElementById('app')
)

const socket = socketIOClient(process.env.API_URL)
socket.on('update/players', data => {
    console.log(data)
})
