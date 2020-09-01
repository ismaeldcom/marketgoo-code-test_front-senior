import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from 'helpers/api'
import notify from 'helpers/notify'

export const getPlayers = createAsyncThunk('players/get', () =>
    api.get('/players')
)

export const addPlayer = createAsyncThunk('players/add', player =>
    api.post('/players', player)
)

export const removePlayer = createAsyncThunk('players/remove', id =>
    api.delete(`/players/${id}`).then(_ => id)
)

const playersSlice = createSlice({
    name: 'players',
    initialState: null,
    reducers: {
        reloadPlayers: (state, { payload }) => payload
    },
    extraReducers: {
        [getPlayers.fulfilled]: (state, { payload }) => payload,
        [getPlayers.rejected]: (state, { error }) => {
            notify.error('Getting players', error.message)
            return state
        },
        [addPlayer.fulfilled]: (state, { payload }) => {
            notify.success(`Adding player ${payload.name}`)
            return [...state, { ...payload, id: payload.name + payload.team }]
        },
        [addPlayer.rejected]: (state, { error, meta }) => {
            notify.error(`Adding player ${meta.arg.name}`, error.message)
            return state
        },
        [removePlayer.fulfilled]: (state, { payload }) => {
            const playerToRemove = state.find(player => player.id === payload)
            notify.success(`Removing player ${playerToRemove.name}`)
            return state.filter(player => player.id !== payload)
        },
        [removePlayer.rejected]: (state, { error, meta }) => {
            const playerToRemove = state.find(player => player.id === meta.arg)
            notify.error(
                `Removing player ${playerToRemove.name}`,
                error.message
            )
            return state
        }
    }
})

export const { reloadPlayers } = playersSlice.actions

export default playersSlice.reducer
