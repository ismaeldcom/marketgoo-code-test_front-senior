import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Table,
    TableRow,
    TableCell,
    Check,
    Button,
    Select,
    Field
} from '@marketgoo/ola'
import { removePlayer, getPlayers } from 'store/players'

const actions = [{ value: 'remove', label: 'Remove' }]

const PlayersTable = () => {
    const dispatch = useDispatch()
    const players = useSelector(state => state.players)
    const [selected, SetSelected] = useState([])

    useEffect(() => {
        dispatch(getPlayers())
    }, [])

    return (
        <>
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
                            <TableCell variant='numeric'>
                                {player.score}
                            </TableCell>
                            <TableCell variant='right'>
                                <Button
                                    variant='destructive'
                                    onClick={() =>
                                        dispatch(removePlayer(player))
                                    }
                                >
                                    Remove
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
            {/* <h2 class='ola-callout'>Actions</h2> */}
            {/* <span>{selected.length} Selected</span> */}
        </>
    )
}

export default PlayersTable
