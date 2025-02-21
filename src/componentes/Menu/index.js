import { useState } from "react";
import styles from "./Menu.module.css";
import MenuLink from "componentes/MenuLink";

const Menu = () => {
   const [isOpen, setIsOpen] = useState(false);

   const closeMenu = () => setIsOpen(false); // Fecha o menu ao clicar em um link

   return (
      <nav className={styles.navbar}>
         <button
            className={styles.hamburger}
            onClick={() => setIsOpen(!isOpen)}
         >
            ☰
         </button>
         <ul className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
            <li><MenuLink to="/" onClick={closeMenu}>Home</MenuLink></li>
            <li><MenuLink to="/music" onClick={closeMenu}>Music</MenuLink></li>
            <li><MenuLink to="/videos" onClick={closeMenu}>Videos</MenuLink></li>
            <li><MenuLink to="/tour" onClick={closeMenu}>Tour</MenuLink></li>
            <li><MenuLink to="/shop" onClick={closeMenu}>Shop</MenuLink></li>
            <li><MenuLink to="/signup" onClick={closeMenu}>Sign Up</MenuLink></li>
         </ul>
      </nav>
   );
};

export default Menu;
