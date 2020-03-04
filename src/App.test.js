import React from 'react'
import { mount } from 'enzyme'
import App from './App'

describe('App', () => {
  it('render without exploding', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find('ProductsWrapper').length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })
})
