import React, { useState, useEffect, useContext } from "react"
import Card from "../../components/Card/Card"
import { ecommerceContext } from "../../contexts/EcommerceContext"

export const getProducts = async url => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

const Home = () => {
  const [productsList, setProductsList] = useState([])

  const images = useContext(ecommerceContext)

  useEffect(() => {
    getProducts("https://dummyjson.com/products?limit=10").then(products => {
      setProductsList(products.products)
    })
  }, [])

  return (
    <>
      {productsList === undefined ? (
        <p>Loading...</p>
      ) : (
        productsList.map(product => (
          <Card
            key={product.id}
            id={product.id}
            image={images[product.id - 1]}
            price={product.price}
            discount={(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(0)}
            discountDecimals={(
              (product.price -
                (product.price * product.discountPercentage) / 100) %
              1
            )
              .toFixed(2)
              .substring(2)}
            title={product.title}
          />
        ))
      )}
    </>
  )
}
export default Home
