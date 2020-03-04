import React from 'react'
import { mount } from 'enzyme'
import AllProducts from './AllProducts'

const minProps = {
  products: [],
  setCount: jest.fn(),
}

describe('AllProducts', () => {
  it('should render with the right props', () => {
    const wrapper = mount(<AllProducts {...minProps} />)
    expect(wrapper.props().products).toStrictEqual([])
    expect(wrapper.find('AllProducts').length).toEqual(1)
  })

  it('should render without exploding', () => {
    const wrapper = mount(<AllProducts {...minProps} />)
    expect(wrapper.length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })
})
