import React from 'react'
import renderer from 'react-test-renderer'
import PlayerForm from 'containers/PlayerForm'

jest.mock('react-redux', () => ({
    useDispatch: () => jest.fn(),
    useSelector: jest.fn()
}))

describe('Snapshots', () => {
    describe('PlayerForm', () => {
        it('renders', () => {
            const tree = renderer.create(<PlayerForm />).toJSON()
            expect(tree).toMatchSnapshot()
        })
    })
})
