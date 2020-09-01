import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from 'helpers/api'

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
        [addPlayer.fulfilled]: (state, { payload }) => [...state, payload],
        [removePlayer.fulfilled]: (state, { payload }) =>
            state.filter(player => player.id !== payload.id)
    }
})

export const { reloadPlayers } = playersSlice.actions

export default playersSlice.reducer
