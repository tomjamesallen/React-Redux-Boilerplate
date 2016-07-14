/* global jest, describe, it, expect */
jest.unmock('../Counter')

import React from 'react'
import { shallow } from 'enzyme'
import Counter from '../Counter'
const noop = () => {}

describe('Counter', () => {
  it('renders the correct counter value', () => {
    const count1 = 0
    const component1 = shallow(<Counter count={count1} onClick={noop} />)
    expect(component1.find('h2').text()).toEqual(`Current value: ${count1}`)

    const count2 = 1
    const component2 = shallow(<Counter count={count2} onClick={noop} />)
    expect(component2.find('h2').text()).toEqual(`Current value: ${count2}`)
  })

  it('calls the click handler on click', () => {
    let spyCalled = 0
    const spy = () => {
      spyCalled++
    }
    const component = shallow(<Counter count={0} onClick={spy} />)

    component.find('button').simulate('click')
    expect(spyCalled).toEqual(1)

    component.find('button').simulate('click')
    expect(spyCalled).toEqual(2)
  })
})
