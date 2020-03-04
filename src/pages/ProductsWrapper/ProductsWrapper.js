import React, { useEffect, useState, lazy, Suspense } from 'react'

import './ProductsWrapper.scss'

const AvailableProducts = lazy(() =>
  import('../../components/AvailableProducts')
)
const AllProducts = lazy(() => import('../../components/AllProducts'))

const ProductsWrapper = () => {
  const [isSold, setIsSold] = useState(true)
  const [count, setCount] = useState(null)
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

  const handleClick = () => {
    setIsSold(!isSold)
  }

  return (
    <>
      <div className="header">
        <p>{count} Results</p>
        <button className="button" onClick={handleClick}>
          {isSold ? 'Hide sold items' : 'Show sold items'}
        </button>
      </div>
      <div className="wrapper">
        <Suspense fallback={'Loading..'}>
          {!isSold ? (
            <AvailableProducts products={products} setCount={setCount} />
          ) : (
            <AllProducts products={products} setCount={setCount} />
          )}
        </Suspense>
      </div>
    </>
  )
}
export default ProductsWrapper
