import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../../layouts/Header/Header"
import { ecommerceContext } from "../../contexts/EcommerceContext"

const Product = () => {
  const [singleProduct, setSingleProduct] = useState({ images: [] })
  const { productId } = useParams()

  const images = useContext(ecommerceContext)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then(response => response.json())
      .then(product => setSingleProduct(product))
  }, [])

  return (
    <>
      <Header className="bg-red-900" location={"h-0"} />
      <main className="flex justify-center">
        <div className="mx-0 mb-0 mt-4 w-[90%] rounded-2xl bg-gray-200 p-4">
          <div className="w-full">
            <img className="w-full" src={images[productId - 1]} />
          </div>
          <div>
            <h2>{singleProduct.title}</h2>
          </div>
          <div className="flex items-center justify-between">
            <h3>
              $
              {(
                singleProduct.price -
                (singleProduct.price * singleProduct.discountPercentage) / 100
              ).toFixed(0)}
              <sup>
                .
                {(
                  (singleProduct.price -
                    (singleProduct.price * singleProduct.discountPercentage) /
                      100) %
                  1
                )
                  .toFixed(2)
                  .substring(2)}
              </sup>
            </h3>
            <h3 className="text-[#999] line-through">${singleProduct.price}</h3>
          </div>
          <div className="mx-0 mb-0 mt-4 flex flex-col gap-4">
            <button className="rounded-2xl border-[none] bg-slate-950 p-2 text-[#eee]">
              Buy
            </button>
            <button className="rounded-2xl border-[none] bg-slate-950 p-2 text-[#eee]">
              Add to cart
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default Product
