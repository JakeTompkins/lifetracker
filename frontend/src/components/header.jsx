import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default props => {
  return (
    <div id="header">
      <img src="#" alt="Logo" />
      <ul className="nav-menu">
        {
          props.menuItems.map(item => {
            reutrn(
              <li className="menu-item">
                <Link to={`/${item}`}>{item}</Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}