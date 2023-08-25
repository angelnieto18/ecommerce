import React from "react"
import { Link } from "react-router-dom"

const Card = ({ id, image, price, discount, discountDecimals, title }) => {
  return (
    <>
      <Link
        className="w-full rounded-2xl bg-slate-100 p-4 text-xs text-slate-950 no-underline"
        to={`product/${id}`}
      >
        <div>
          <img className="w-full" src={image} />
        </div>
        <div className="flex items-center justify-between">
          <h2>
            ${discount}
            <sup>.{discountDecimals}</sup>
          </h2>
          <div>
            <p className="text-slate-400 line-through">${price}</p>
          </div>
        </div>
        <div>
          <h4>{title}</h4>
        </div>
      </Link>
    </>
  )
}

export default Card
