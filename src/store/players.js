import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from 'helpers/api'
import notify from 'helpers/notify'

export const getPlayers = createAsyncThunk('players/get', () =>
    api.get('/players')
)

export const addPlayer = createAsyncThunk('players/add', player =>
    api.post('/players', player)
)

export const removePlayer = createAsyncThunk('players/remove', player =>
    api.delete(`/players/${player.id}`).then(_ => player)
)

const playersSlice = createSlice({
    name: 'players',
    initialState: null,
    extraReducers: {
        [getPlayers.fulfilled]: (state, { payload }) => payload,
        [getPlayers.rejected]: (state, { error }) => {
            notify.error('Getting players', error.message)
            return state
        },
        [addPlayer.fulfilled]: (state, { payload }) => {
            notify.success(`Adding player ${payload.name}`)
            return [...state, payload]
        },
        [addPlayer.rejected]: (state, { error, meta }) => {
            notify.error(`Adding player ${meta.arg.name}`, error.message)
            return state
        },
        [removePlayer.fulfilled]: (state, { payload }) => {
            notify.success(`Removing player ${payload.name}`)
            return state.filter(player => player.id !== payload.id)
        },
        [removePlayer.rejected]: (state, { error, meta }) => {
            notify.error(`Removing player ${meta.arg.name}`, error.message)
            return state
        }
    }
})

export const { reloadPlayers } = playersSlice.actions

export default playersSlice.reducer
