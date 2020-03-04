import React, { useState, lazy, Suspense } from 'react'

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
    <div>
      <button onClick={handleClick}>
        {isSold ? 'Hide sold items' : 'Show sold items'}
      </button>
      <Suspense fallback={'Loading..'}>
        {!isSold ? <AvailableProducts /> : <AllProducts />}
      </Suspense>
    </div>
  )
}
export default ProductsWrapper
