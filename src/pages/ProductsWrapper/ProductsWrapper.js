import React, { useEffect, useState, lazy, Suspense } from 'react'

import './ProductsWrapper.scss'

import like from '../../assets/like.svg'

const AvailableProducts = lazy(() =>
  import('../../components/AvailableProducts')
)
const AllProducts = lazy(() => import('../../components/AllProducts'))

const ProductsWrapper = () => {
  const [isSold, setIsSold] = useState(true)
  const [results, setResults] = useState(null)
  const [likes, setLikes] = useState([])
  const [products, setProducts] = useState([])
  const [showList, setShowList] = useState(false)

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
    setLikes([])
  }

  return (
    <div className="productsWrapper">
      <Suspense fallback={null}>
        <div className="header">
          <p>{results} Results</p>
          <button className="button" onClick={handleClick}>
            {isSold ? 'Hide sold items' : 'Show sold items'}
          </button>
          {
            <button
              className="results-button"
              onClick={() => setShowList(!showList)}
            >
              <img
                src={like}
                alt="liked products results"
                className="results-button__svg"
              />
              {likes.length}
              {likes.length !== 0 && showList && (
                <ul className="liked-products-list">
                  {likes.map((likedProduct, index) => {
                    return (
                      <li className="liked-products-list__item" key={index}>
                        {likedProduct}
                      </li>
                    )
                  })}
                </ul>
              )}
            </button>
          }
        </div>
      </Suspense>
      <div className="wrapper">
        <Suspense fallback={'Loading...'}>
          {!isSold ? (
            <AvailableProducts
              products={products}
              setCount={setResults}
              setLikes={setLikes}
            />
          ) : (
            <AllProducts
              products={products}
              setCount={setResults}
              setLikes={setLikes}
            />
          )}
        </Suspense>
      </div>
    </div>
  )
}
export default ProductsWrapper
