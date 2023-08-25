import React, { useState } from "react"
import logo from "../../assets/images/logo.svg"
import bars from "../../assets/images/bars-solid.svg"
import { Link } from "react-router-dom"

const Header = ({ title, location }) => {
  return (
    <header className="relative">
      <Nav />
      <div className={`flex items-center justify-center ${location}`}>
        <h1>{title}</h1>
      </div>
    </header>
  )
}

const Nav = () => {
  const [toggle, setToggle] = useState("hidden")

  const toggleHandler = () => {
    if (toggle === "hidden") {
      setToggle("showed")
    } else {
      setToggle("hidden")
    }
  }

  return (
    <nav className="relative h-20 bg-gray-100">
      <div className="flex h-full items-center justify-between px-4 py-0">
        <img className="w-8 cursor-pointer" src={logo} alt="Logo" />
        <img
          className="w-8 cursor-pointer"
          src={bars}
          alt="toggle"
          onClick={toggleHandler}
        />
      </div>
      <ul
        className={`absolute w-full list-none bg-gray-100 p-4 text-center transition-all duration-[1s] ${toggle}`}
      >
        <li>
          <Link
            className="inline-block rounded-lg bg-neutral-50 p-4 text-[#111] no-underline"
            to={"/"}
          >
            Home
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
