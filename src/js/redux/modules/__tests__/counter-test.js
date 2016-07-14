/* global jest, describe, it, expect */
jest.unmock('../counter')

import counter, * as actions from '../counter'

describe('counter action creators', () => {
  describe('increment', () => {
    it('should return a correctly formed action', () => {
      const expectedAction = {
        type: 'redux-example/counter/INCREMENT'
      }
      expect(actions.increment()).toEqual(expectedAction)
    })
  })

  describe('counter reducer', () => {
    it('should return the initial state', () => {
      expect(
        counter(undefined, {})
      ).toEqual({
        count: 0
      })
    })
    it('increment the counter on receiving an increment action', () => {
      expect(
        counter(undefined, {
          type: 'redux-example/counter/INCREMENT'
        })
      ).toEqual({
        count: 1
      })
    })
    it('increment the counter from a specific state', () => {
      const count = 3
      const startState = {
        count
      }
      expect(
        counter(startState, {
          type: 'redux-example/counter/INCREMENT'
        })
      ).toEqual({
        count: count + 1
      })
    })
  })
})
