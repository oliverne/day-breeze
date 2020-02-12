import { ADD_ITEM, itemReducer } from '../itemReducer'

describe('itemReducer', () => {
  test('ADD_ITEM', () => {
    const state = itemReducer([], {
      type: ADD_ITEM,
      payload: {
        id: 'any',
        title: 'any',
        content: 'any',
        labels: [],
        createdAt: Date.now(),
        updatedAt: Date.now()
      }
    })

    expect(state.length).toBe(1)
    expect(state[0]).toEqual({
      id: 'any',
        title: 'any',
        content: 'any',
        labels: expect.any(Array),
        createdAt: expect.any(Number),
        updatedAt: expect.any(Number),
    })
  })
})
