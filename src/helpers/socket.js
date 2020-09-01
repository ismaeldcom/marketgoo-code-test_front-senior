import io from 'socket.io-client'
import store from 'store'
import { updateSocket } from 'store/ui'
import { reloadPlayers } from 'store/players'

const socket = io(process.env.API_URL)

socket.on('connect', () => {
    store.dispatch(updateSocket(true))
})

socket.on('disconnect', () => {
    store.dispatch(updateSocket(false))
})

socket.on('update/players', data => {
    store.dispatch(reloadPlayers(data))
})
