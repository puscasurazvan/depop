import React, { lazy, Suspense } from 'react'

import './App.scss'

const ProductsWrapper = lazy(() => import('./pages/ProductsWrapper'))

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={'Loading...'}>
        <ProductsWrapper />
      </Suspense>
    </div>
  )
}

export default App
