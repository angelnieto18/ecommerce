import React from "react"
import Header from "./layouts/Header/Header"
import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <>
      <Header title={"All products"} location={"h-60"} />
      <section className="products">
        <Outlet />
      </section>
    </>
  )
}

export default App
