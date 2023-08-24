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
    <nav className="h-20 relative bg-gray-100">
      <div className="flex items-center h-full justify-between px-4 py-0">
        <img className="cursor-pointer w-8" src={logo} alt="Logo" />
        <img
          className="cursor-pointer w-8"
          src={bars}
          alt="toggle"
          onClick={toggleHandler}
        />
      </div>
      <ul className={`absolute list-none text-center transition-all duration-[1s] w-full p-4 bg-gray-100 ${toggle}`}>
        <li>
          <Link className="text-[#111] inline-block no-underline p-4 rounded-lg bg-neutral-50" to={"/"}>
            Home
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
