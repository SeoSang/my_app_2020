import React from "react"
import { Link } from "react-router-dom"
import "./Navigation.css"

function Navigation() {
  return (
    <div className="nav">
      {/* Link는 Router 안에 있어야댐 */}
      <Link to="/">Home</Link>
      <Link
        to={{
          pathname: "/about",
          state: {
            fromNavigation: true
          }
        }}
      >
        About
      </Link>
    </div>
  )
}

export default Navigation
