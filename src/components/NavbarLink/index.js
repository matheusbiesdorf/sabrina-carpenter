import { NavLink } from "react-router-dom";
import styles from './NavbarLink.module.css'

export default function NavbarLink({ to , children }){
    return(
        <NavLink to={to} className={styles.navbarLink}>
            {children}
        </NavLink>
    )
}