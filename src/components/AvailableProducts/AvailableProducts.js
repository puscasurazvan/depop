import React, { useState, useEffect } from 'react'
import Product from '../Product'
import PropTypes from 'prop-types'

const AvailableProducts = () => {
  const [products, setProducts] = useState([])

  const fetchData = async () => {
    const response = await fetch(
      'https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1/products'
    )
    response
      .json()
      .then(response => setProducts(response))
      .catch(error => console.log(error, 'No Available Products'))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const filteredProducts = products.filter(({ sold }) => sold === true)

  return filteredProducts.map(({ id, title, brand, size, price, img }) => {
    return (
      <Product
        key={id}
        productTitle={title}
        imageURL={img}
        productBrand={brand}
        productSize={size}
        productPrice={price}
      />
    )
  })
}

AvailableProducts.propTypes = {
  result: PropTypes.number,
}

export default AvailableProducts
