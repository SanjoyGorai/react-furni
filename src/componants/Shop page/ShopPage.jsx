import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { data } from 'autoprefixer';
import './ShopPage.css'

const ShopPage = () => {

  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   console.log('Use Effect is Called Axios');
  //   axios.get('https://fakestoreapi.com/products')
  //     .then((data) => {
  //       console.log(data);
  //       setProducts(data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // },)

  useEffect(() => {
    async function fetchData() {

      const options = {
        method: 'GET',
        url: 'https://youtube138.p.rapidapi.com/search/',
        params: {
          q: 'desp',
          hl: 'en',
          gl: 'US'
        },
        headers: {
          'X-RapidAPI-Key': '6e4f3542d1msh4d2f7d5fc314f58p1e1532jsn38558c63b3d7',
          'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
      fetchData()
  });



  return (
    <>
      <div className='container flex flex-wrap box-border '>
        {
          products.map((product, index) => {
            return (
              <div className='w-60' key={index}>
                {/* <img src={product.image} alt="" className='w-40 h-60' />
                <h2>{product.title}</h2>
                <h2>{product.price}</h2> */}
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default ShopPage