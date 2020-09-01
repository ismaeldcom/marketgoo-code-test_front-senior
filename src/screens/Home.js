import React from 'react'
import PlayerForm from 'containers/PlayerForm'
import PlayersTable from 'containers/PlayersTable'

const Home = () => {
    return (
        <>
            <h1>League Champion</h1>
            <PlayerForm />
            <PlayersTable />
        </>
    )
}

export default Home
