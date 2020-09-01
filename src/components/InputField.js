import React, { forwardRef } from 'react'
import { useField, splitFormProps } from 'react-form'
import { Field, Input } from '@marketgoo/ola'

const InputField = forwardRef((props, ref) => {
    const [field, fieldOptions, rest] = splitFormProps(props)
    const { label } = rest
    const {
        meta: { error },
        getInputProps
    } = useField(field, fieldOptions)

    return (
        <Field
            id={`field-${field}`}
            label={label || field}
            error={!!error}
            description={error}
        >
            <Input {...getInputProps({ ref, ...rest })} />
        </Field>
    )
})

export default InputField
