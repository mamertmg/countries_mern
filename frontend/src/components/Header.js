import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <nav className='flex justify-between'>
      <div>
        <Link to='/'>Countries</Link>
      </div>
      <ul className='flex px-5'>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header