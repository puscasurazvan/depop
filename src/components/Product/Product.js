import React from 'react'
import PropTypes from 'prop-types'

const Product = ({
  productTitle,
  productBrand,
  productSize,
  productPrice,
  imageURL,
}) => {
  return (
    <div>
      <img src={imageURL} alt="" />
      <p> {productTitle}</p>
      <p> {productBrand}</p>
      <p> {productSize}</p>
      <p> {productPrice}</p>
    </div>
  )
}

Product.propTypes = {
  imageURL: PropTypes.string.isRequired,
  productTitle: PropTypes.string.isRequired,
  productBrand: PropTypes.string.isRequired,
  productSize: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
}

export default Product
