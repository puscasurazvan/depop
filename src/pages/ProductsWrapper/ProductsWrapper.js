import React, { useState, lazy, Suspense } from 'react'

import './ProductsWrapper.scss'

const AvailableProducts = lazy(() =>
  import('../../components/AvailableProducts')
)
const AllProducts = lazy(() => import('../../components/AllProducts'))

const ProductsWrapper = () => {
  const [isSold, setIsSold] = useState(true)

  const handleClick = () => {
    setIsSold(!isSold)
  }

  return (
    <>
      <button onClick={handleClick}>
        {isSold ? 'Hide sold items' : 'Show sold items'}
      </button>
      <div className="wrapper">
        <Suspense fallback={'Loading..'}>
          {!isSold ? <AvailableProducts /> : <AllProducts />}
        </Suspense>
      </div>
    </>
  )
}
export default ProductsWrapper
