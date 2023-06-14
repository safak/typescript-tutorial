import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>lama dev</span>
      <div className="links">
        <Link href="#">Homepage</Link>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar