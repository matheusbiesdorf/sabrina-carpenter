import { useState } from "react";
import styles from "./Menu.module.css";
import { NavLink } from "react-router-dom";
import MenuLink from "componentes/MenuLink";

const Menu = () => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <nav className={styles.navbar}>
         <button
            className={styles.hamburger}
            onClick={() => setIsOpen(!isOpen)}
         >
            ☰
         </button>
         <ul className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
            
            <li> <MenuLink to="/">Home</MenuLink> </li>
            <li> <MenuLink to="/music">Music</MenuLink> </li>
            <li> <MenuLink to="/videos">Videos</MenuLink> </li>
            <li> <MenuLink to="/shop">Shop</MenuLink> </li>
            <li> <MenuLink to="/signup">Sign Up</MenuLink> </li>
         </ul>
      </nav>
   );
};

export default Menu;
