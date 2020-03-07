import React, { useEffect, useState } from 'react'
import Product from '../Product'

import PropTypes from 'prop-types'

const AvailableProducts = ({ products, setCount, setLikes }) => {
  const filteredProducts = products.filter(({ sold }) => sold === true)
  const [productLikes, setProductLikes] = useState([])

  const addProductLikes = title => {
    const newArray = [...productLikes, title]
    setProductLikes(newArray)
  }

  useEffect(() => {
    setLikes(productLikes)
  }, [productLikes, setLikes])

  useEffect(() => {
    if (filteredProducts) {
      setCount(filteredProducts.length)
    }
  }, [setCount, filteredProducts])

  return filteredProducts.map(
    ({ id, title, brand, size, price, img, sold }) => {
      return (
        <Product
          key={id}
          productTitle={title}
          imageURL={img}
          productBrand={brand}
          productSize={size}
          productPrice={price}
          addProductLikes={addProductLikes}
        />
      )
    }
  )
}

AvailableProducts.propTypes = {
  products: PropTypes.array.isRequired,
  setCount: PropTypes.func,
}

export default AvailableProducts
