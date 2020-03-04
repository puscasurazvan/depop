import React, { useState, useEffect } from 'react'
import Product from '../Product'

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

  return products
    .filter(({ sold }) => sold === true)
    .map(({ id, title, brand, size, price, img }) => {
      return (
        <Product
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

export default AvailableProducts
