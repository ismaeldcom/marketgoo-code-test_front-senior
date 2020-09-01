import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        socketOnline: false
    },
    reducers: {
        updateSocket: (state, { payload }) => ({
            ...state,
            socketOnline: payload
        })
    }
})

export const { updateSocket } = uiSlice.actions

export default uiSlice.reducer
