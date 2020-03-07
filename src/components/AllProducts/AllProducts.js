import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import Product from '../Product'

const AllProducts = ({ products, setCount, setLikes }) => {
  const [productLikes, setProductLikes] = useState([])
  const allProducts = products.map(item => item)

  const addProductLikes = title => {
    const newArray = [...productLikes, title]
    setProductLikes(newArray)
  }

  useEffect(() => {
    setLikes(productLikes)
  }, [productLikes, setLikes])

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
        productBrand={brand}
        productSize={size}
        productPrice={price}
        addProductLikes={addProductLikes}
      />
    )
  })
}

AllProducts.propTypes = {
  products: PropTypes.array.isRequired,
  setCount: PropTypes.func,
}

export default AllProducts
