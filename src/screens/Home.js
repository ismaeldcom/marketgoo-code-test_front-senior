import React from 'react'
import PlayerForm from 'containers/PlayerForm'
import PlayersTable from 'containers/PlayersTable'
import SocketStatus from 'containers/SocketStatus'
import { Panel, PanelContent } from '@marketgoo/ola'
import styles from './Home.module.css'

const Home = () => {
    return (
        <section className={styles.home}>
            <h1 className='ola-title'>League Champion</h1>
            <Panel>
                <PanelContent title='Add player'>
                    <PlayerForm />
                </PanelContent>
                <PanelContent
                    title={
                        <div className={styles.current}>
                            <span>Current players</span>
                            <SocketStatus />
                        </div>
                    }
                >
                    <PlayersTable />
                </PanelContent>
            </Panel>
        </section>
    )
}

export default Home
