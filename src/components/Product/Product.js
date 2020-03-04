import React from 'react'
import PropTypes from 'prop-types'

import './Product.scss'

const Product = ({
  productTitle,
  productBrand,
  productSize,
  productPrice,
  imageURL,
}) => {
  return (
    <div className="productWrapper">
      <img
        src={imageURL}
        alt="product display"
        className="productWrapper__image"
      />
      <p> {productTitle}</p>
      <p> {productBrand}</p>
      <p> {productSize}</p>
      <p> {productPrice}</p>
    </div>
  )
}

Product.defaultProps = {
  productBrand: 'No brand specified',
}

Product.propTypes = {
  imageURL: PropTypes.string.isRequired,
  productTitle: PropTypes.string.isRequired,
  productBrand: PropTypes.string.isRequired,
  productSize: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
}

export default Product
