import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header>
      Header
      <div>
        Logo
      </div>
      <ul>
        <li>
          <Link>Logout</Link>
        </li>
        <li>
          <Link>Login</Link>
        </li>
        <li>
          <Link>Register</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header