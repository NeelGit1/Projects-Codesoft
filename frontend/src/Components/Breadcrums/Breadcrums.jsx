import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
export default function Breadcrums(props) {
  const { product } = props;
  return (
    <div className='breadcrum'>
      {product ? (
        <>
          HOME <img src={arrow_icon} alt="" />SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
        </>
      ) : (
        // You can show a loading indicator or fallback content if the product data is not available
        <div>Loading breadcrumbs...</div>
      )}
    </div>
  )
}
