import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <>
        <h1> ReactJS | NodeJS | MySQL</h1>

        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/newTask">Create new task</Link>
            </li>
        </ul>
    </>
  )
}

export default NavBar