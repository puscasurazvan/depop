import React, { useState, useEffect } from 'react'
import Product from '../Product'

const Products = () => {
  const [hasError, setErrors] = useState(false)
  const [products, setProducts] = useState([])
  const [isSold, setIsSold] = useState(true)

  const fetchData = async () => {
    const response = await fetch(
      'https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1/products'
    )
    response
      .json()
      .then(response => setProducts(response))
      .catch(error => setErrors(error))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleClick = () => {
    setIsSold(!isSold)
  }

  return (
    <div>
      <button onClick={handleClick}>
        {isSold ? 'Hide sold items' : 'Show sold items'}
      </button>
      {!isSold
        ? products
            .filter(({ sold }) => sold === !false)
            .map(({ id, title, brand, size, price, img, sold }) => {
              return (
                sold && (
                  <Product
                    key={id}
                    productTitle={title}
                    imageURL={img}
                    productBrand={brand || 'No brand specified'}
                    productSize={size}
                    productPrice={price}
                  />
                )
              )
            })
        : products.map(({ id, title, brand, size, price, img, sold }) => {
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
          })}
    </div>
  )
}
export default Products
