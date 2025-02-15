// Navbar.jsx
import React, { useState } from 'react';
import NavbarLink from 'components/NavbarLink'; 
import { FaBars, FaTimes } from 'react-icons/fa'; 
import styles from './Navbar.module.css'; 

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const closeMenu = () => {
    setIsMobile(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>

        <ul className={isMobile ? styles.navLinksMobile : styles.navLinks}>
          <li onClick={closeMenu}><NavbarLink to="/">Home</NavbarLink></li>
          <li onClick={closeMenu}><NavbarLink to="/music">Music</NavbarLink></li>
          <li onClick={closeMenu}><NavbarLink to="/shop">Shop</NavbarLink></li>
          <li onClick={closeMenu}><NavbarLink to="/tour">Tour</NavbarLink></li>
          <li onClick={closeMenu}><NavbarLink to="/videos">Videos</NavbarLink></li>
          <li onClick={closeMenu}><NavbarLink to="/signup">Sign Up</NavbarLink></li>
        </ul>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}
