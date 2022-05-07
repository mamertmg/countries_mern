import React from 'react'

function Footer() {

  const footerYear = new Date().getFullYear()

  return (
    <footer className='mt-5'>
      <p>Copyright &copy; {footerYear} All rights reserved</p>
    </footer>
  )
}

export default Footer