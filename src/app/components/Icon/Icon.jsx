import React from 'react'
import Image from 'next/image'
import "./Icon.css"
const Icon = ({icon, text, cart}) => {
  return (
    <div className={cart ? 'cart' :'icon-holder'}>
        <p className={cart ? "cart-text" :'icon-text'}>{text}</p>
        <Image src={icon} alt='icon'/>
    </div>
  )
}

export default Icon