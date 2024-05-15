import React from 'react'
import {Link , NavLink} from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav>
        <Link to="/" className=''><img src="../../public/letter-m.png" alt="Logo" /></Link>
      </nav>
    </header>
  )
}

export default Header
