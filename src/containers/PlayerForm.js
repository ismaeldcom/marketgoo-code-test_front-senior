import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-form'
import { Button } from '@marketgoo/ola'
import InputField from 'components/InputField'
import { addPlayer } from 'store/players'
import validation from 'helpers/validation'
import styles from './PlayerForm.module.css'

const PlayerForm = () => {
    const dispatch = useDispatch()

    const defaultValues = React.useMemo(
        () => ({
            name: '',
            team: '',
            score: ''
        }),
        []
    )
    const {
        Form,
        meta: { canSubmit }
    } = useForm({
        defaultValues,
        onSubmit: async (values, instance) => {
            try {
                await dispatch(addPlayer(values))
                instance.reset()
            } catch (error) {
                console.log(error)
            }
        }
    })

    return (
        <Form className={styles.form}>
            <InputField
                field='name'
                label='Name'
                placeholder='Player name'
                validate={validation.required}
            />
            <InputField
                field='team'
                label='Team'
                placeholder='Team name'
                validate={validation.required}
            />
            <InputField
                field='score'
                label='Score'
                type='number'
                placeholder='Team Score'
                validate={validation.required}
                min='0'
            />
            <Button
                type='submit'
                variant='primary'
                className={styles.button}
                disabled={!canSubmit}
            >
                Add
            </Button>
        </Form>
    )
}

export default PlayerForm
