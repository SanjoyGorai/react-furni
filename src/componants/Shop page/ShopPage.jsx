import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { data } from 'autoprefixer';
import './ShopPage.css'

const ShopPage = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('Use Effect is Called Axios');
       axios.get('https://fakestoreapi.com/products')
      .then((data) => {
        console.log(data);
        setProducts(data.data);  
     })
      .catch((error) => {
        console.log(error);
      })
  },)


  return (
    <>
      <div className='container flex flex-wrap box-border '>
        {
          products.map((product) => {
            return (
              <div className='w-60'>
                <img src={product.image} alt="" className='w-40 h-60' />
                <h2>{product.title}</h2>
                <h2>{product.price}</h2>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default ShopPage