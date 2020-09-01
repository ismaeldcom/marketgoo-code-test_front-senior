import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Table,
    TableRow,
    TableCell,
    Check,
    Button,
    Select,
    Field,
    Spinner
} from '@marketgoo/ola'
import TablePlaceholder from 'components/TablePlaceholder'
import { removePlayer, getPlayers } from 'store/players'

const actions = [{ value: 'remove', label: 'Remove' }]

const PlayersTable = () => {
    const dispatch = useDispatch()
    const players = useSelector(state => state.players)

    useEffect(() => {
        dispatch(getPlayers())
    }, [])

    return (
        <>
            <Table
                responsive
                caption={
                    players && players.length === 0 && 'No players created'
                }
            >
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
                    {!players ? (
                        <TablePlaceholder />
                    ) : (
                        players.map(player => (
                            <TableRow key={player.id || player.name}>
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
                        ))
                    )}
                </tbody>
            </Table>
        </>
    )
}

export default PlayersTable
