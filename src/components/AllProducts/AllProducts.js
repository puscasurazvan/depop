import React, { useEffect } from 'react'
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

export default AllProducts
