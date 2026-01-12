import React from 'react'
import './Header.css';
import Logo from '../../Assets/logo.webp'
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className='menubar'>
        <div className="logo">
            <div><img src={Logo} alt="logo" /></div>
            <div className="mobiletoggle"><i class='bx  bx-menu-notification'></i> </div>
        </div>
        <div className="navbar">
            <ul>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/about"}>About</Link></li>
              <li><Link to={"/service"}>Service</Link></li>
              <li className='parentmenu'><Link to={"/projects"}>Projects</Link>
                  <ul className='childmenu'>    
                    <li><Link href="#">Recent Project</Link></li>
                    <li><Link href="#">Future Project</Link></li>
                  </ul>
              </li>
              <li><Link to={"/contact"}>Contact</Link></li>
              <li><Link href="#">Subscribe</Link></li>
            </ul>
        </div>
    </header>
  )
}
