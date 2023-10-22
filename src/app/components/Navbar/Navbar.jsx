import React from 'react';
import Logo from '../../../../public/Assets/logos.png'; // Adjust the path accordingly
import './Navbar.css';
import Icon from '../Icon/Icon';
import Image from 'next/image';
import Search from "../../../../public/Assets/search.svg"
import Cart from "../../../../public/Assets/cart.svg"
import Bookmark from "../../../../public/Assets/bookmark.svg"
import Profile from "../../../../public/Assets/profile.svg"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo-holder'>
       <Image src={Logo} height={50} width={70} />
      </div>
      <div className='toolsIcons'>
        <Icon icon={Search} text="search" />
        <Icon icon={Cart} text="Cart" cart/>
    
        <div className='special-icons'>
            <Image src={Bookmark} alt='icon'/>
             <p className='text'>0</p>
        </div>
        <div className='special-icons'>
            <Image src={Profile} alt='icon'/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
