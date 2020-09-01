import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table, TableRow, TableCell, Check, Button } from '@marketgoo/ola'
import { removePlayer, getPlayers } from 'store/players'

const PlayersTable = () => {
    const dispatch = useDispatch()
    const players = useSelector(state => state.players)

    React.useEffect(() => {
        dispatch(getPlayers())
    }, [])

    return (
        <Table responsive>
            <thead>
                <TableRow>
                    <TableCell header>Player</TableCell>
                    <TableCell header>Team</TableCell>
                    <TableCell header variant='numeric'>
                        Score
                    </TableCell>
                    <TableCell header variant='right'>
                        Actions
                    </TableCell>
                </TableRow>
            </thead>
            <tbody>
                {players.map(player => (
                    <TableRow key={player.id}>
                        <TableCell>{player.name}</TableCell>
                        <TableCell>{player.team}</TableCell>
                        <TableCell variant='numeric'>{player.score}</TableCell>
                        <TableCell variant='right'>
                            <Button
                                variant='destructive'
                                onClick={() => dispatch(removePlayer(player))}
                            >
                                Remove
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </tbody>
        </Table>
    )
}

export default PlayersTable
