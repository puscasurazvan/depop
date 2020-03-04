import React, { useEffect } from 'react'

import PropTypes from 'prop-types'

import Product from '../Product'

const AllProducts = ({ products, setCount }) => {
  const allProducts = products.map(item => item)

  useEffect(() => {
    if (allProducts) {
      setCount(allProducts.length)
    }
  }, [setCount, allProducts])

  return products.map(({ id, title, brand, size, price, img, sold }) => {
    return (
      <Product
        sold={sold}
        key={id}
        productTitle={title}
        imageURL={img}
        productBrand={brand || 'No brand specified'}
        productSize={size}
        productPrice={price}
      />
    )
  })
}

AllProducts.propTypes = {
  products: PropTypes.array.isRequired,
  setCount: PropTypes.func,
}

export default AllProducts
