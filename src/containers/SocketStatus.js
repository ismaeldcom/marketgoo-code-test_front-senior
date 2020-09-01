import React from 'react'
import { useSelector } from 'react-redux'
import styles from './SocketStatus.module.css'

const SocketStatus = () => {
    const { socketOnline } = useSelector(state => state.ui)

    return (
        <div
            className={`${styles.dot} ola-bg-${
                socketOnline ? 'success' : 'error'
            }`}
        />
    )
}

export default SocketStatus
