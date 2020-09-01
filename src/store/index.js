import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import players from 'store/players'

const reducer = combineReducers({ players })

const store = configureStore({ reducer })

export default store
