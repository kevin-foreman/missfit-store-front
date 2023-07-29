import React from 'react'

export const Merch = (props) => {
  const { id, productName, price, productImage } = props.data;
  console.log(productName);
  return (
    <div className='product'>
      <img src={productImage} />
      <div className='description'>
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
    </div>
  );
}
