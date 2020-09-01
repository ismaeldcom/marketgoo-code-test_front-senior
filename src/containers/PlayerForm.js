import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input, Field, Button } from '@marketgoo/ola'
import { addPlayer } from 'store/players'

const initialPlayer = {
    name: undefined,
    team: undefined,
    score: undefined
}

const PlayerForm = () => {
    const dispatch = useDispatch()
    const [player, setPlayer] = useState(initialPlayer)

    const handleChange = ({ target }) =>
        setPlayer({ ...player, [target.name]: target.value })

    const handleSubmit = async event => {
        event.preventDefault()
        const { name, team, score } = player
        if (!name || !team || !score) return
        try {
            await dispatch(addPlayer(player))
            setPlayer(initialPlayer)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form>
            <Field id='playerName' label='Name'>
                <Input
                    name='name'
                    placeholder='Player name'
                    onChange={handleChange}
                    required
                />
            </Field>
            <Field id='playerTeam' label='Team'>
                <Input
                    name='team'
                    placeholder='Team name'
                    onChange={handleChange}
                    required
                />
            </Field>
            <Field id='teamScore' label='Score'>
                <Input
                    name='score'
                    type='number'
                    placeholder='Team score'
                    min='0'
                    onChange={handleChange}
                    required
                />
            </Field>
            <Button variant='primary' onClick={handleSubmit}>
                Add
            </Button>
        </form>
    )
}

export default PlayerForm
