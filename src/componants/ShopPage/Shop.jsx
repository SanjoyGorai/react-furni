import React, { useState, useEffect } from 'react'


const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/1')
            .then(res => res.json())
            .then(json => console.log(json))
    })

    return (
        <>


        </>
    )
}

export default Shop