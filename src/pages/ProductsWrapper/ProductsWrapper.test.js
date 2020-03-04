import React from 'react'
import { mount } from 'enzyme'
import ProductsWrapper from './ProductsWrapper'

describe('ProductsWrapper', () => {
  it('should render without exploding', () => {
    const wrapper = mount(<ProductsWrapper />)
    expect(wrapper.length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })
})
