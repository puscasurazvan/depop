import React from 'react'
import { mount } from 'enzyme'
import Product from './Product'

const minProps = {
  productTitle: 'No description specified',
  productBrand: 'No brand specified',
  productSize: 'No size specified',
  productPrice: 200,
  imageURL: 'https://image.url',
}

describe('Product', () => {
  it('should render with the right props', () => {
    const wrapper = mount(<Product {...minProps} />)
    expect(wrapper.props().productBrand).toBe('No brand specified')
    expect(wrapper.props().productTitle).toBe('No description specified')
    expect(wrapper.props().productSize).toBe('No size specified')
    expect(wrapper.props().productPrice).toBe(200)
    expect(wrapper.find('Product').length).toEqual(1)
  })

  it('should render without exploding', () => {
    const wrapper = mount(<Product {...minProps} />)
    expect(wrapper.length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })
})
