import React, { useEffect } from 'react'
import Product from '../Product'

const AllProducts = ({ products, setCount }) => {
  const availableProducts = products.map(item => item)

  useEffect(() => {
    if (availableProducts) {
      setCount(availableProducts.length)
    }
  }, [setCount, availableProducts])

  return products.map(({ id, title, brand, size, price, img, sold }) => {
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

export default AllProducts
