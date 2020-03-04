import React from 'react'
import { mount } from 'enzyme'
import AvailableProducts from './AvailableProducts'

const minProps = {
  products: [],
  setCount: jest.fn(),
}

describe('AvailableProducts', () => {
  it('should render with the right props', () => {
    const wrapper = mount(<AvailableProducts {...minProps} />)
    expect(wrapper.props().products).toStrictEqual([])
    expect(wrapper.find('AvailableProducts').length).toEqual(1)
  })

  it('should render without exploding', () => {
    const wrapper = mount(<AvailableProducts {...minProps} />)
    expect(wrapper.length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })
})
