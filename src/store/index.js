import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import players from 'store/players'
import ui from 'store/ui'

const reducer = combineReducers({ players, ui })

const store = configureStore({ reducer })

export default store
