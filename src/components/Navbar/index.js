import NavbarLink from "components/NavbarLink";
import styles from './Navbar.module.css'

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <NavbarLink to="/" >Home</NavbarLink>
            <NavbarLink to="/music" >Music</NavbarLink>
            <NavbarLink to="/shop" >Shop</NavbarLink>
            <NavbarLink to="/tour" >Tour</NavbarLink>
            <NavbarLink to="/videos" >Videos</NavbarLink>
            <NavbarLink to="/signup" >Sign Up</NavbarLink>
        </nav>
    )
}