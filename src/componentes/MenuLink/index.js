import { NavLink } from "react-router-dom";
import styles from "./MenuLink.module.css";

export default function MenuLink({ to, children, onClick }) {
   return (
      <NavLink to={to} className={styles.MenuLink} onClick={onClick}>
         {children}
      </NavLink>
   );
}
