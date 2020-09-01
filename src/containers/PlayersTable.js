import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table, TableRow, TableCell, Button, Check } from '@marketgoo/ola'
import TablePlaceholder from 'components/TablePlaceholder'
import { removePlayer, getPlayers } from 'store/players'
import styles from './PlayersTable.module.css'

const PlayersTable = () => {
    const dispatch = useDispatch()
    const players = useSelector(state => state.players)

    const [checked, setChecked] = useState([])
    const [removeBusy, setRemoveBusy] = useState(false)

    useEffect(() => {
        dispatch(getPlayers())
    }, [])

    const handleCheck = ({ target }, id) => {
        if (target.checked) setChecked([...checked, id])
        else setChecked(checked.filter(v => v !== id))
    }

    const handleRemove = async () => {
        setRemoveBusy(true)
        try {
            await Promise.all(checked.map(id => dispatch(removePlayer(id))))
            setChecked([])
        } finally {
            setRemoveBusy(false)
        }
    }

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
                        <TableCell header variant='check' />
                        <TableCell header>Player</TableCell>
                        <TableCell header>Team</TableCell>
                        <TableCell header variant='numeric'>
                            Score
                        </TableCell>
                    </TableRow>
                </thead>
                <tbody>
                    {!players ? (
                        <TablePlaceholder />
                    ) : (
                        players.map(player => (
                            <TableRow
                                key={player.id}
                                check={
                                    <Check
                                        type='checkbox'
                                        checked={
                                            checked.includes(player.id) || false
                                        }
                                        onChange={e =>
                                            handleCheck(e, player.id)
                                        }
                                    />
                                }
                                checked={checked.includes(player.id)}
                            >
                                <TableCell>{player.name}</TableCell>
                                <TableCell>{player.team}</TableCell>
                                <TableCell variant='numeric'>
                                    {player.score}
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </tbody>
            </Table>
            <div className={styles.actions}>
                <div className='ola-body'>Actions</div>
                <div>{checked.length} selected</div>
                <Button
                    variant='destructive'
                    busy={removeBusy ? 'Remove' : false}
                    onClick={handleRemove}
                >
                    Remove
                </Button>
            </div>
        </>
    )
}

export default PlayersTable
