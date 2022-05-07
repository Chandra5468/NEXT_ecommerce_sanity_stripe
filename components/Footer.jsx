import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

function Footer() {
  return (
    <div className='footer-container'>
      <p>2022 Toy store products, All rights reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer