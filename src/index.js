import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from 'store'
import Home from 'screens/Home'

import 'helpers/socket'
import './index.css'

render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.getElementById('app')
)
