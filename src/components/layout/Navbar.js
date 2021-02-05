import React, {Component} from "react"

const Navbar = ({icon, title}) => {
  return (
    <nav className="navbar bg-primary">
      <h1 className="p-1" style={{fontSize: "18px"}}>
        <i class={icon}></i>
        {title}
      </h1>
    </nav>
  )
}

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
}

export default Navbar
