import React,{useState} from 'react'
import { Button } from './Button';
import './Navbar.css';
import {Link} from 'react-router-dom'
function Navbar() {
    const [click,setClick]=useState(false);
    const [button,setButton]=useState(true);

    const handleClick=()=> setClick(!click);
    const closeMobileMenu=()=> setClick(false);


    const showButton=()=>{
      if(window.innerWidth<=960){
        setButton(false)
      } else {setButton(true)}
    };

    window.addEventListener('resize',showButton);
  return (
  <>
  <nav className="navbar">
    <div className="navbar-container">
       <Link to="/" className="navbar-logo">
        SUBS <i class="fa-solid fa-snowflake"></i> 
       </Link>
       {/* <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times':'fas fa-bars'}/>
       </div>
       <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
            <Link to="/" className='nav-links' onClick={closeMobileMenu}>
            HOME
            </Link>
        </li>
        <li className='nav-item'>
            <Link to="/home2" className='nav-links' onClick={closeMobileMenu}>
            HOME2
            </Link>
        </li>
        <li className='nav-item'>
            <Link to="/home3" className='nav-links' onClick={closeMobileMenu}>
            HOME3
            </Link>
        </li>
       </ul>
       {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
    </div>
  </nav>
  </>
  )
}

export default Navbar
