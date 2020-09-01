import React from 'react'
import renderer from 'react-test-renderer'
import { useSelector } from 'react-redux'
import PlayersTable from 'containers/PlayersTable'

jest.mock('react-redux', () => ({
    useDispatch: () => jest.fn(),
    useSelector: jest.fn()
}))

describe('Snapshots', () => {
    describe('PlayersTable', () => {
        it('renders placeholder', () => {
            useSelector.mockReturnValue(null)
            const tree = renderer.create(<PlayersTable />).toJSON()
            expect(tree).toMatchSnapshot()
        })

        it('renders player', () => {
            useSelector.mockReturnValue([
                {
                    id: 1,
                    name: 'Peter',
                    team: 'Pandas',
                    score: 1
                }
            ])
            const tree = renderer.create(<PlayersTable />).toJSON()
            expect(tree).toMatchSnapshot()
        })
    })
})
