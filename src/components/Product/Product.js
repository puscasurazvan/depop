import React, { useState } from 'react'
import PropTypes from 'prop-types'

import like from '../../assets/like.svg'

import './Product.scss'

const Product = ({
  productTitle,
  productBrand,
  productSize,
  productPrice,
  imageURL,
  sold,
  handleLike,
  addProductLikes,
}) => {
  const [liked, setLiked] = useState(false)

  const handleLiked = productTitle => {
    setLiked(!liked)
    addProductLikes(productTitle)
  }

  return (
    <div className="productWrapper">
      <div className="imagewrapper">
        <img
          src={imageURL}
          alt="product display"
          className={sold ? 'imagewrapper__sold' : 'imagewrapper__image'}
          lazy="loading"
        />
        {sold && <p className="imagewrapper__soldText">SOLD</p>}
      </div>
      <p className="title"> {productTitle}</p>
      <p className="brand"> {productBrand}</p>
      <p className="size"> {productSize}</p>
      <p className="price"> £{productPrice}</p>
      <button
        onClick={() => handleLiked(productTitle)}
        className={liked ? 'button liked' : 'button'}
      >
        <img src={like} className="like" alt="" />
      </button>
    </div>
  )
}

Product.defaultProps = {
  productTitle: 'No description specified',
  productBrand: 'No brand specified',
  productSize: 'No size specified',
  productPrice: 12,
}

Product.propTypes = {
  imageURL: PropTypes.string.isRequired,
  productTitle: PropTypes.string.isRequired,
  productBrand: PropTypes.string.isRequired,
  productSize: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
}

export default Product
