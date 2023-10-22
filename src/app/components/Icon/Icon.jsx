import React from 'react'
import Image from 'next/image'
import "./Icon.css"
const Icon = ({icon, text, cart}) => {
  return (
    <div className={cart ? 'cart' :'icon-holder'}>
        <p className='icon-text'>{text}</p>
        <Image src={icon} />
    </div>
  )
}

export default Icon