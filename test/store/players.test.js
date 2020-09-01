import players, { getPlayers, addPlayer, removePlayer } from 'store/players'

const mockPlayers = [
    {
        id: 1,
        name: 'Peter',
        team: 'Pandas',
        score: 1
    },
    {
        id: 2,
        name: 'Jhon',
        team: 'Cobrakay',
        score: 10
    },
    {
        id: 3,
        name: 'Tommy',
        team: 'Space',
        score: 20
    }
]

describe('Store', () => {
    describe('player slice', () => {
        it('should return the initial state', () => {
            expect(players(undefined, {})).toEqual(null)
        })

        it('should handle getPlayers', () => {
            const action = {
                type: getPlayers.fulfilled.type,
                payload: mockPlayers
            }
            expect(players([], action)).toEqual(mockPlayers)
        })

        it('should handle addPlayer', () => {
            const firstPlayer = {
                ...mockPlayers[0],
                id: mockPlayers[0].name + mockPlayers[0].team
            }
            const action = {
                type: addPlayer.fulfilled.type,
                payload: firstPlayer
            }
            expect(players([], action)).toEqual([firstPlayer])
        })

        it('should handle removePlayer', () => {
            const [firstPlayer, ...othersPlayers] = mockPlayers
            const action = {
                type: removePlayer.fulfilled.type,
                payload: firstPlayer.id
            }
            expect(players(mockPlayers, action)).toEqual(othersPlayers)
        })
    })
})
