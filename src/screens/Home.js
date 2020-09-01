import React from 'react'
import PlayerForm from 'containers/PlayerForm'
import PlayersTable from 'containers/PlayersTable'
import {
    Panel,
    PanelHeader,
    PanelContent,
    Section,
    SectionHeader
} from '@marketgoo/ola'
import styles from './Home.module.css'

const Home = () => {
    return (
        <section className={styles.home}>
            <h1 className='ola-title'>League Champion</h1>
            <Panel>
                <PanelContent title='Add player'>
                    <PlayerForm />
                </PanelContent>
                <PanelContent title='Current players'>
                    <PlayersTable />
                </PanelContent>
            </Panel>
        </section>
    )
}

export default Home
